/* eslint-disable default-case */
/* eslint-disable complexity */
/* eslint-disable prefer-destructuring */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
const async = require("neo-async");
const Config = require("config");
const gcm = require("node-gcm");
const apns = require("apn");
const log4js = require("log4js");
const Path = require("path");
const _ = require("lodash");
const rp = require("request-promise");
const nodeMailerModule = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
const fs = require("fs");
const filepath = require("filepath");
const Handlebars = require("handlebars");

const twilioCredentials = Config.get("twilioCredentials");
const nodeMailer = Config.get("nodeMailer");
const androidPushSettings = Config.get("androidPushSettings");
const iOSPushSettings = Config.get("iOSPushSettings");
const AppSettings = Config.get("AppSettings");

const client = require("twilio")(twilioCredentials.accountSid, twilioCredentials.authToken);
const Constants = require("../constants");

const transporter = nodeMailerModule.createTransport(smtpTransport(nodeMailer.Mandrill));
const logger = log4js.getLogger("[Notification_Manager]");

function sendEmail(emailRequestId) {
    const options = {
        method: "POST",
        uri: "http://localhost:1337/notification",
        body: { emailRequestId },
        json: true,
    };
    rp(options)
        .then((parsedBody) => {
            console.log("Email Sent: ", parsedBody);
        })
        .catch((err) => {
            console.log("Error sending Email: ", err);
        });
}

const sendCustomEmail = function (template, subject, data) {
    const sql = "INSERT INTO `mailbox_queue` (`email_identifier`, `subject`, `to_address`, `from_address`, `variables_json`, `created_at`) VALUES (?,?,?,?,?,NOW())";
    connection.query(
        sql, [template, subject, data.email_to, `Tr1pp <${AppSettings.supportEmail}>`, JSON.stringify(data)],
        (err, result) => {
            if (err) {
                console.log("Error creating mail queue: ", err);
            } else {
                sendEmail(result.insertId);
            }
        },
    );
};

const sendPush = (pushDetails, userType) => {
    console.log("=====================SENDING NOTIFICATIONS==========================", pushDetails, userType);
    pushDetails.payload.flag = pushDetails.flag;
    const androidPushTokens = [];
    const iosPushTokens = [];
    const devices = pushDetails.deviceDetails;
    const lenDevice = devices.length;
    for (let i = 0; i < lenDevice; i++) {
        if (devices[ i ] && devices[ i ].deviceToken) {
            const deviceToken = devices[ i ].deviceToken;
            const deviceType = devices[ i ].deviceType;
            if (deviceType === Constants.APP_CONSTANTS.DATABASE.DEVICE_TYPES.ANDROID) { androidPushTokens.push(deviceToken); } else if (deviceType === Constants.APP_CONSTANTS.DATABASE.DEVICE_TYPES.IOS) { iosPushTokens.push(deviceToken); }
        }
    }
    try {
        if (androidPushTokens.length > 0) { sendAndroidPushNotification(androidPushTokens, pushDetails.text, (pushDetails.flag || 0), userType); }
        if (iosPushTokens.length > 0) { sendIosPushNotification(iosPushTokens, pushDetails.text, (pushDetails.payload || null), userType); }
    } catch (e) {
    }
};

/*
 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 @ sendSMS Function
 @ This function will initiate sending sms as per the smsOptions are set
 @ Requires following parameters in smsOptions
 @ from:  // sender address
 @ to:  // list of receivers
 @ Body:  // SMS text message
 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 */

const sendDataSMSToUser = (dataVariable, messageType, phoneNo, callback) => {
    const twilioNumber = twilioCredentials.smsFromNumber;
    const smsOptions = {
        from: twilioNumber,
        to: phoneNo,
        body: null,
    };
    async.series([
        (cb) => {
            smsOptions.body = renderMessageFromTemplateAndVariables(messageType, dataVariable);
            cb();
        },
        (cb) => {
            client.messages.create(smsOptions, (err, message) => {
                cb(err, res);
            });
        },
    ], (err, responses) => {
        if (err) {
            callback(err);
        } else {
            callback(null, Constants.APP_CONSTANTS.STATUS_MSG.SUCCESS.DEFAULT);
        }
    });
};

const sendEmailToUser = (userRole, emailType, emailVariables, emailId, callback) => {
    const from = "Support <support@peacegroup.ng>";
    const mailOptions = {
        from,
        to: emailId,
        subject: null,
        html: null,
    };
    async.series([
        (cb) => {
            switch (emailType) {
            case "DRIVER_REGISTERED":
                mailOptions.subject = notificationMessages.drivrRegisteredEmail.emailSubject;
                mailOptions.html = renderMessageFromTemplateAndVariables(notificationMessages.drivrRegisteredEmail.emailMessage, emailVariables);
                break;
            case "REGISTRATION_MAIL":
                mailOptions.subject = notificationMessages.registrationEmail.emailSubject;
                mailOptions.html = renderMessageFromTemplateAndVariables(notificationMessages.registrationEmail.emailMessage, emailVariables);
                break;
            case "FORGOT_PASSWORD":
                mailOptions.subject = notificationMessages.forgotPassword.emailSubject;
                mailOptions.html = renderMessageFromTemplateAndVariables(notificationMessages.forgotPassword.emailMessage, emailVariables);
                break;
            case "DRIVER_CONTACT_FORM":
                mailOptions.subject = notificationMessages.contactDriverForm.emailSubject;
                mailOptions.html = renderMessageFromTemplateAndVariables(notificationMessages.contactDriverForm.emailMessage, emailVariables);
                break;
            case "BUSINESS_CONTACT_FORM":
                mailOptions.subject = notificationMessages.contactBusinessForm.emailSubject;
                mailOptions.html = renderMessageFromTemplateAndVariables(notificationMessages.contactBusinessForm.emailMessage, emailVariables);
                break;
            }
            cb();
        }, (cb) => {
            sendMailViaTransporter(mailOptions, (err, res) => {
                cb(err, res);
            });
        },
    ], (err, responses) => {
        if (err) {
            callback(err);
        } else {
            callback();
        }
    });
};

function renderMessageFromTemplateAndVariables(templateData, variablesData) {
    return Handlebars.compile(templateData)(variablesData);
}

/*
 ==========================================================
 Send the notification to the iOS device for customer
 ==========================================================
 */
function sendIosPushNotification(iosDeviceToken, message, payload, userType) {
    let certificate;
    let gateway;
    let options;

    if (userType === Constants.APP_CONSTANTS.DATABASE.USER_ROLES.CUSTOMER || userType === Constants.APP_CONSTANTS.DATABASE.USER_ROLES.BUSINESS) {
        certificate = Config.iOSPushSettings.customer.iosApnCertificate;
        console.log("<<<<<<<<<< certificate from config >>>>>>>>>>>", certificate);

        certificate = filepath.create(certificate).path;

        console.log("certificate", certificate);
        gateway = iOSPushSettings.customer.gateway;
        console.log("gateway", gateway);
        options = {
            cert: certificate,
            certData: null,
            key: certificate,
            keyData: null,
            passphrase: "click",
            ca: null,
            pfx: null,
            pfxData: null,
            gateway,
            // port: 2195,
            rejectUnauthorized: true,
            enhanced: true,
            // cacheLength: 100,
            autoAdjustCache: true,
            connectionTimeout: 0,
            // ssl: true,
            debug: true,
            // production: true
        };
    } else if (userType === Constants.APP_CONSTANTS.DATABASE.USER_ROLES.DRIVER) {
        certificate = Config.iOSPushSettings.driver.iosApnCertificate;
        console.log("<<<<<<<<<< certificate from config >>>>>>>>>>>", certificate);
        certificate = filepath.create(certificate).path;

        console.log("<<<<<<<<<< CERT PATH >>>>>>>>>>>", certificate);
        gateway = iOSPushSettings.driver.gateway;
        console.log("certificate", certificate);
        console.log("gateway", gateway);
        options = {
            cert: certificate,
            certData: null,
            key: certificate,
            keyData: null,
            passphrase: "click",
            ca: null,
            pfx: null,
            pfxData: null,
            gateway,
            // port: 2195,
            rejectUnauthorized: true,
            enhanced: true,
            // cacheLength: 100,
            autoAdjustCache: true,
            connectionTimeout: 0,
            // ssl: true,
            debug: true,
            // production: true
        };
    } else {
        console.log("error......................................");
    }

    const status = 1;
    const msg = message;
    const snd = "dong.aiff";
    const apnsConnection = new apns.Connection(options);
    const note = new apns.Notification();

    note.expiry = Math.floor(Date.now() / 1000) + 3600;
    note.contentAvailable = 1;
    note.sound = snd;
    note.alert = msg;
    note.newsstandAvailable = status;
    note.payload = { message: payload };

    _.each(iosDeviceToken, (token) => {
        console.log("DEVICE TOKEN: ", token);
        logger.trace(token);
        if (!token || token == "(null)" || token == "deviceToken" || !token.length || token.length !== 64) {
            logger.error("IOS PUSH ERROR with Token: ", token);
        } else {
            // var device = new apns.token(token);
            logger.debug("NOTE: ", note);
            console.log("device", token);
            apnsConnection.pushNotification(note, token);
        }
    });
    // Handle these events to confirm that the notification gets
    // transmitted to the APN server or find error if any
    function log(type) {
        return function () {
            console.log(`iOS PUSH NOTIFICATION RESULT: ${type}`);
        };
    }

    apnsConnection.on("error", log("error"));
    apnsConnection.on("transmitted", log("transmitted"));
    apnsConnection.on("timeout", log("timeout"));
    apnsConnection.on("connected", log("connected"));
    apnsConnection.on("disconnected", log("disconnected"));
    apnsConnection.on("socketError", (errCode, notification, device) => {
        console.error(`Notification caused  SOCKET ERROR error: ${errCode } for device `, device, notification);
    });
    apnsConnection.on("transmissionError", (errCode, notification, device) => {
        console.error(`Notification caused error: ${errCode} for device `, device, notification);
    });
    apnsConnection.on("cacheTooSmall", log("cacheTooSmall"));
}

/*
 ==============================================
 Send the notification to the android device
 =============================================
 */
function sendAndroidPushNotification(deviceTokens, message, flag, userType) {
    let brandName = "";
    let gcmSender = "";
    if (userType === Constants.APP_CONSTANTS.DATABASE.USER_ROLES.CUSTOMER || userType === Constants.APP_CONSTANTS.DATABASE.USER_ROLES.BUSINESS) {
        brandName = androidPushSettings.customer.brandName;
        gcmSender = androidPushSettings.customer.gcmSender;
    }
    if (userType === Constants.APP_CONSTANTS.DATABASE.USER_ROLES.DRIVER) {
        brandName = androidPushSettings.driver.brandName;
        gcmSender = androidPushSettings.driver.gcmSender;
    }
    console.log(message);
    var message = new gcm.Message({
        collapseKey: "demo",
        delayWhileIdle: false,
        timeToLive: 2419200,
        data: {
            message,
            brand_name: brandName,
            flag,
        },
    });
    const sender = new gcm.Sender(gcmSender);
    const registrationIds = [];
    registrationIds.push(deviceTokens);

    logger.debug(deviceTokens);
    logger.debug(message);
    sender.send(message, deviceTokens, 4, (err, result) => {
        if (err) {
            logger.error(`ANDROID NOTIFICATION ERROR: ${JSON.stringify(err)}`);
        } else {
            logger.info(`ANDROID NOTIFICATION RESULT: ${JSON.stringify(result)}`);
        }
    });
}

/*
 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 @ sendMailViaTransporter Function
 @ This function will initiate sending email as per the mailOptions are set
 @ Requires following parameters in mailOptions
 @ from:  // sender address
 @ to:  // list of receivers
 @ subject:  // Subject line
 @ html: html body
 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 */
function sendMailViaTransporter(mailOptions, cb) {
    transporter.sendMail(mailOptions, (error, info) => {
        console.log("Mail Sent Callback Error:", error);
        console.log("Mail Sent Callback Ifo:", info);
    });
    cb(null, null); // Callback is outside as mail sending confirmation can get delayed by a lot of time
}

const notificationMessages = {
    createBookingMessage: "Hola {{customerName}} , you have booked a ride with us . Your booking reference number is : {{booking_number}}",
    verificationCodeMsg: "Your 4 digit verification code for {{project_name}} is {{four_digit_verification_code}}",
    userCredentialMessage: "Hi {{username}}, Your Tr1pp panel login username is your email and password is {{password}}.",
    patientRegisteredEmail: {
        emailMessage: "Dear {{user_name}},<br><br>You have been registered on Drivr. Please download <a href='#'>Drivr app</a> to track your treatment. You username is your email and password is {{password}}",
        emailSubject: "User Registered Successfully",
    },
    driverRegisteredEmail: {
        emailMessage: "Dear {{user_name}},<br><br>You have been registered on Drivr. Please download <a href='#'>Drivr app</a>. You username is your email and password is {{password}}",
        emailSubject: "Driver Registered Successfully",
    },
    drivrRegisteredEmail: {
        emailMessage: "Dear {{user_name}},<br><br>You have been registered on Drivr. Please download <a href='#'>Drivr app</a>. You username is your email and password is {{password}} .",
        emailSubject: "Driver Registered Successfully",
    },
    registrationEmail: {
        emailMessage: "Dear {{user_name}},<br><br>Please <a href={{verification_url}}>click here</a> to verify your email address",
        emailSubject: "DRIVR : Verification Email ",
    },
    contactDriverForm: {
        emailMessage: "A new driver has showed interest <br><br> Details : <br><br> Name : {{fullName}} <br><br> Email : {{email}} <br><br> Phone No : {{phoneNo}} <br><br> Vehicle Type : {{vehicleType}} <br><br> Bank Account : {{bankAccountBoolean}} <br><br> Heard From : {{heardFrom}}",
        emailSubject: "New Driver Contact Request",
    },
    contactBusinessForm: {
        emailMessage: "A new business has showed interest <br><br> Details : <br><br> Name : {{fullName}} <br><br> Email : {{email}} <br><br> Phone No : {{phoneNo}} <br><br> Business Name: {{businessName}} <br><br> Business Address: {{businessAddress}}  <br><br> Delivery Service : {{ownDeliveryService}} <br><br> Heard From : {{heardFrom}}",
        emailSubject: "New Business Contact Request",
    },
    forgotPassword: {
        emailMessage: "Dear {{user_name}}, <br>You have requested for reset password, please <a href='{{password_reset_link}}'>click here</a> to reset your password.<br><br> Drivr Support",
        emailSubject: "Reset Password Email",
    },
};

const languageSpecificMessages = {
    verificationCodeMsg: {
        EN: "Your 4 digit verification code is {{four_digit_verification_code}}",
        ES_MX: "Your 4 digit verification code is {{four_digit_verification_code}}",
    },
};

module.exports = {
    sendDataSMSToUser,
    sendEmailToUser,
    sendPush,
    notificationMessages,
    languageSpecificMessages,
    sendCustomEmail,
};
