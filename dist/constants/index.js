"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var EMPLOYEE_TYPE = {
    STAFF: "STAFF",
    DRIVER: "DRIVER",
    CONTRACTOR: "CONTRACTOR"
};

var SERVICES = exports.SERVICES = {
    MENTORING: "MENTORING",
    OUTSOURCING: "OUTSOURCING",
    RECRUITING: "RECRUITING",
    PARTNERSHIP: "PARTNERSHIP"
};

var STATUS_MSG = {
    ERROR: {
        ALREADY_EXISTS: {
            statusCode: 400,
            customMessage: "record with this name already exists",
            type: "ALREADY_EXISTS"
        },
        RECORD_NOT_FOUND: {
            statusCode: 404,
            customMessage: "User doesnt not exist",
            type: "RECORD_NOT_FOUND"
        },
        PAYMENT_NOT_PROCESSED: {
            statusCode: 400,
            customMessage: "There seems like a problem with the payment, Kindly try again !",
            type: "PAYMENT_NOT_PROCESSED"
        },
        INVALID_VERIFICATION_LINK: {
            statusCode: 400,
            customMessage: "Link for verifying email has expired.",
            type: "INVALID_VERIFICATION_LINK"
        },
        INVALID_COMBINATION_IN_ROLE: {
            statusCode: 400,
            type: "INVALID_COMBINATION_IN_ROLE",
            customMessage: "Please send the valid Role according to belong to user type"
        },
        NULL_INVALID: {
            statusCode: 400,
            customMessage: "Null is not a valid value",
            type: "NULL_INVALID"
        },
        PLEASE_CREATE_NEW_PROFILE: {
            statusCode: 400,
            customMessage: "Please create new profile",
            type: "PLEASE_CREATE_NEW_PROFILE"
        },
        INVALID_USER_PASS: {
            statusCode: 401,
            type: "INVALID_USER_PASS",
            customMessage: "Invalid username or password"
        },
        TOKEN_ALREADY_EXPIRED: {
            statusCode: 401,
            customMessage: "Token Already Expired",
            type: "TOKEN_ALREADY_EXPIRED"
        },
        DB_ERROR: {
            statusCode: 400,
            customMessage: "DB Error : ",
            type: "DB_ERROR"
        },
        INVALID_ID: {
            statusCode: 400,
            customMessage: "Invalid Id Provided.",
            type: "INVALID_ID"
        },
        ORDER_PENDING: {
            statusCode: 400,
            customMessage: "You have an ongoing order, please complete the order before changing status.",
            type: "ORDER_PENDING"
        },
        DRIVER_BUSY: {
            statusCode: 400,
            customMessage: "Sorry, driver is already doing a job.",
            type: "DRIVER_BUSY"
        },
        INVALID_ORDER_ID: {
            statusCode: 400,
            customMessage: "Invalid Order Id Provided.",
            type: "INVALID_ORDER_ID"
        },
        INVALID_STATUS_UPDATE: {
            statusCode: 400,
            customMessage: "The status update requested is not in sequence !!",
            type: "INVALID_STATUS_UPDATE"
        },
        INVALID_RATING_UPDATE: {
            statusCode: 400,
            customMessage: "The booking is not in completed state , cannot rate !!",
            type: "INVALID_RATING_UPDATE"
        },
        ALREADY_RATED: {
            statusCode: 400,
            customMessage: "The booking is already rated !",
            type: "ALREADY_RATED"
        },
        APP_ERROR: {
            statusCode: 400,
            customMessage: "Application Error",
            type: "APP_ERROR"
        },
        ADMIN_NOT_FOUND: {
            statusCode: 400,
            customMessage: "Admin not found",
            type: "ADMIN_NOT_FOUND"
        },
        ADDRESS_NOT_FOUND: {
            statusCode: 400,
            customMessage: "Address not found",
            type: "ADDRESS_NOT_FOUND"
        },
        NO_UPDATE: {
            statusCode: 400,
            customMessage: "Entries not updated in DB",
            type: "NO_UPDATE"
        },
        SAME_ADDRESS_ID: {
            statusCode: 400,
            customMessage: "Pickup and Delivery Address Cannot Be Same",
            type: "SAME_ADDRESS_ID"
        },
        PICKUP_ADDRESS_NOT_FOUND: {
            statusCode: 400,
            customMessage: "Pickup Address not found",
            type: "PICKUP_ADDRESS_NOT_FOUND"
        },
        DELIVERY_ADDRESS_NOT_FOUND: {
            statusCode: 400,
            customMessage: "Delivery Address not found",
            type: "DELIVERY_ADDRESS_NOT_FOUND"
        },
        NOT_AUTHORISED: {
            statusCode: 400,
            customMessage: "Not Enough Permissions for the user .Kindly contact administrator",
            type: "NOT_AUTHORISED"
        },
        CUSTOMER_ID: {
            statusCode: 400,
            customMessage: "Incorrect USER ID",
            type: "UNAUTHORIZED"
        },
        IMP_ERROR: {
            statusCode: 500,
            customMessage: "Implementation Error",
            type: "IMP_ERROR"
        },
        INVALID_IMAGE_PROVIDED: {
            statusCode: 500,
            customMessage: "Image provided is not valid !",
            type: "INVALID_IMAGE_PROVIDED"
        },
        APP_VERSION_ERROR: {
            statusCode: 400,
            customMessage: "One of the latest version or updated version value must be present",
            type: "APP_VERSION_ERROR"
        },
        BLOCKED_ACCOUNT: {
            statusCode: 401,
            customMessage: "Your account has been blocked, please contact customer care",
            type: "BLOCKED_ACCOUNT"
        },
        INVALID_TOKEN: {
            statusCode: 401,
            customMessage: "Invalid token provided",
            type: "INVALID_TOKEN"
        },
        INVALID_CODE: {
            statusCode: 400,
            customMessage: "Invalid Verification Code",
            type: "INVALID_CODE"
        },
        DEFAULT: {
            statusCode: 400,
            customMessage: "Error in execution",
            type: "DEFAULT"
        },
        PHONE_NO_EXIST: {
            statusCode: 400,
            customMessage: "Phone No Already Exist",
            type: "PHONE_NO_EXIST"
        },
        EMAIL_EXIST: {
            statusCode: 400,
            customMessage: "Email Already Exist",
            type: "EMAIL_EXIST"
        },
        DUPLICATE: {
            statusCode: 400,
            customMessage: "Duplicate Entry",
            type: "DUPLICATE"
        },
        DUPLICATE_ADDRESS: {
            statusCode: 400,
            customMessage: "Address Already Exist",
            type: "DUPLICATE_ADDRESS"
        },
        UNIQUE_CODE_LIMIT_REACHED: {
            statusCode: 400,
            customMessage: "Cannot Generate Unique Code, All combinations are used",
            type: "UNIQUE_CODE_LIMIT_REACHED"
        },
        INVALID_REFERRAL_CODE: {
            statusCode: 400,
            customMessage: "Invalid Referral Code",
            type: "INVALID_REFERRAL_CODE"
        },
        FACEBOOK_ID_PASSWORD_ERROR: {
            statusCode: 400,
            customMessage: "Only one field should be filled at a time, either facebookId or password",
            type: "FACEBOOK_ID_PASSWORD_ERROR"
        },
        ALREADY_REGISTERED: {
            statusCode: 400,
            customMessage: "You are already registered with us.",
            type: "ALREADY_REGISTERED"
        },
        INVALID_EMAIL: {
            statusCode: 400,
            customMessage: "Invalid Email Address",
            type: "INVALID_EMAIL"
        },
        PASSWORD_REQUIRED: {
            statusCode: 400,
            customMessage: "Password doesnt match with your credentials",
            type: "PASSWORD_REQUIRED"
        },
        COUNTRY_CODE_MISSING: {
            statusCode: 400,
            customMessage: "You forgot to enter the country code",
            type: "COUNTRY_CODE_MISSING"
        },
        INVALID_PHONE_NO: {
            statusCode: 400,
            customMessage: "Phone No. & Country Code does not match to which the OTP was sent",
            type: "INVALID_PHONE_NO"
        },
        PHONE_NO_MISSING: {
            statusCode: 400,
            customMessage: "You forgot to enter the phone no.",
            type: "PHONE_NO_MISSING"
        },
        NOTHING_TO_UPDATE: {
            statusCode: 400,
            customMessage: "Nothing to update",
            type: "NOTHING_TO_UPDATE"
        },
        NOT_FOUND: {
            statusCode: 400,
            customMessage: "User Not Found",
            type: "NOT_FOUND"
        },
        INVALID_RESET_PASSWORD_TOKEN: {
            statusCode: 400,
            customMessage: "Invalid Reset Password Token",
            type: "INVALID_RESET_PASSWORD_TOKEN"
        },
        INCORRECT_PASSWORD: {
            statusCode: 400,
            customMessage: "Incorrect Password",
            type: "INCORRECT_PASSWORD"
        },
        EMPTY_VALUE: {
            statusCode: 400,
            customMessage: "Empty String Not Allowed",
            type: "EMPTY_VALUE"
        },
        PHONE_NOT_MATCH: {
            statusCode: 400,
            customMessage: "Phone No. Doesn't Match",
            type: "PHONE_NOT_MATCH"
        },
        SAME_PASSWORD: {
            statusCode: 400,
            customMessage: "Old password and new password are same",
            type: "SAME_PASSWORD"
        },
        EMAIL_ALREADY_EXIST: {
            statusCode: 400,
            customMessage: "Email Address Already Exists",
            type: "EMAIL_ALREADY_EXIST"
        },
        ERROR_PROFILE_PIC_UPLOAD: {
            statusCode: 400,
            customMessage: "Profile pic is not a valid file",
            type: "ERROR_PROFILE_PIC_UPLOAD"
        },
        FILE_TYPE_NOT_SUPPORTED: {
            statusCode: 400,
            customMessage: "File type not accepted",
            type: "ERROR_FILE_TYPE"
        },
        PHONE_ALREADY_EXIST: {
            statusCode: 400,
            customMessage: "Phone No. Already Exists",
            type: "PHONE_ALREADY_EXIST"
        },
        EMAIL_NOT_FOUND: {
            statusCode: 400,
            customMessage: "Your email id is not registered with us",
            type: "EMAIL_NOT_FOUND"
        },
        PHONE_NOT_FOUND: {
            statusCode: 400,
            customMessage: "Phone No. Not Found",
            type: "PHONE_NOT_FOUND"
        },
        INCORRECT_OLD_PASS: {
            statusCode: 400,
            customMessage: "Incorrect Old Password",
            type: "INCORRECT_OLD_PASS"
        },
        UNAUTHORIZED: {
            statusCode: 401,
            customMessage: "You are not authorized to perform this action",
            type: "UNAUTHORIZED"
        },
        ADDRESS_ALREADY_EXIST: {
            statusCode: 400,
            customMessage: "Address already exit",
            type: "ADDRESS_ALREADY_EXIST"
        },
        NO_RESULT_FOUND: {
            statusCode: 404,
            customMessage: "No result found in database",
            type: "NO_RESULT_FOUND"
        },
        NOCARD_Found: {
            statusCode: 400,
            customMessage: "Card doesn't exist",
            type: "NOCARD_FOUND"
        },
        ORDER_CANNOT_PROCESS: {
            statusCode: 400,
            customMessage: "Sorry, your order can not be processed.",
            type: "ORDER_CANNOT_PROCESS"
        },
        BOOKING_ALREADY_CONFIRMED: {
            statusCode: 400,
            customMessage: "Sorry, your ride can not be cancelled now as the driver is already enroute to your location.",
            type: "BOOKING_ALREADY_CONFIRMED"
        },
        ENTER_CARD_DETAIL: {
            statusCode: 404,
            customMessage: "Please enter your card details.",
            type: "ENTER_CARD_DETAIL"
        },
        DEFAULT_CARD: {
            statusCode: 404,
            customMessage: "Sorry, default card can not be deleted"
        }
    },
    SUCCESS: {
        RESET_PASSWORD_LINK_SENT: {
            statusCode: 201,
            customMessage: "A link has been send to your registered email address to reset your password.",
            type: "RESET_PASSWORD_LINK_SENT"
        },
        DRIVER_REQUEST_DECLINED: {
            statusCode: 201,
            customMessage: "Driver Request declined successfully.",
            type: "DRIVER_REQUEST_DECLINED"
        },
        RATING_UPDATED: {
            statusCode: 201,
            customMessage: "Thank you for providing your valuable feedback !",
            type: "RATING_UPDATED"
        },
        PRODUCT_CREATED: {
            statusCode: 201,
            customMessage: "Car category added successfully.",
            type: "PRODUCT_CREATED"
        },
        PRODUCT_UPDATED: {
            statusCode: 201,
            customMessage: "Car category updated successfully.",
            type: "PRODUCT_UPDATED"
        },
        DRIVER_REGISTERED: {
            statusCode: 201,
            customMessage: "Driver registered successfully.",
            type: "DRIVER_REGISTERED"
        },
        DRIVER_CREATED: {
            statusCode: 201,
            customMessage: "Driver added successfully.",
            type: "DRIVER_CREATED"
        },
        REGION_CREATED: {
            statusCode: 201,
            customMessage: "Region added successfully.",
            type: "REGION_CREATED"
        },
        REGION_UPDATED: {
            statusCode: 201,
            customMessage: "Region updated successfully.",
            type: "REGION_UPDATED"
        },
        VEHICLE_ADDED: {
            statusCode: 201,
            customMessage: "Vehicle added successfully.",
            type: "VEHICLE_ADDED"
        },
        ADMIN_ADDED: {
            statusCode: 201,
            customMessage: "User added successfully.",
            type: "USER_ADDED"
        },
        DRIVER_UPDATED: {
            statusCode: 201,
            customMessage: "Driver data updated successfully.",
            type: "DRIVER_UPDATED"
        },
        EVENT_ADDED: {
            statusCode: 201,
            customMessage: "Event added successfully.",
            type: "EVENT_ADDED"
        },
        EVENT_UPDATED: {
            statusCode: 201,
            customMessage: "Event data updated successfully.",
            type: "EVENT_UPDATED"
        },
        VEHICLE_UPDATED: {
            statusCode: 201,
            customMessage: "Vehicle added successfully.",
            type: "VEHICLE_UPDATED"
        },
        USER_UPDATED: {
            statusCode: 201,
            customMessage: "user updated successfully.",
            type: "USER_UPDATED"
        },
        ADMIN_UPDATED: {
            statusCode: 201,
            customMessage: "admin updated successfully.",
            type: "ADMIN_UPDATED"
        },
        UPLOADED: {
            statusCode: 201,
            customMessage: "Uploaded Successfully",
            type: "UPLOADED"
        },
        CREATED: {
            statusCode: 201,
            customMessage: "Created Successfully",
            type: "CREATED"
        },
        RIDE_SENT_SUCCESSFULLY: {
            statusCode: 201,
            customMessage: "Ride request sent successfully. Customer will be notified soon.",
            type: "RIDE_SENT_SUCCESSFULLY"
        },
        DEFAULT: {
            statusCode: 200,
            customMessage: "Success",
            type: "DEFAULT"
        },
        QUERY_SUBMITTED: {
            statusCode: 200,
            customMessage: "Query submitted successfully ",
            type: "QUERY_SUBMITTED"
        },
        UPDATED: {
            statusCode: 200,
            customMessage: "Updated Successfully",
            type: "UPDATED"
        },
        LOGOUT: {
            statusCode: 200,
            customMessage: "Logged Out Successfully",
            type: "LOGOUT"
        },
        DELETED: {
            statusCode: 200,
            customMessage: "Deleted Successfully",
            type: "DELETED"
        },
        VERIFIED: {
            statusCode: 200,
            customMessage: "Phone number verified successfully",
            type: "VERIFIED"
        },
        NO_RESULT_FOUND: {
            statusCode: 200,
            customMessage: "No result found in database",
            type: "NO_RESULT_FOUND"
        },
        OTP_SENT: {
            statusCode: 200,
            customMessage: "New OTP has been sent successfully",
            type: "OTP_SENT"
        },
        ORDER_CANCELLED: {
            statusCode: 200,
            customMessage: "Order cancelled successfully",
            type: "ORDER_CANCELLED"
        }

    }
};

var GENDER = {
    MALE: "MALE",
    FEMALE: "FEMALE"
};

var MARITAL_STATUS = {
    SINGLE: "SINGLE",
    MARRIED: "MARRIED",
    DIVORSED: "DIVORSED",
    SEPARATED: "SEPARATED",
    WIDOWED: "WIDOWED"
};

var CUSTOMER_TYPE = {
    INDIVIDUAL: "INDIVIDUAL",
    ORGANIZATION: "ORGANIZATION"
};

var PERSONAL_TITLE = {
    MR: "MR",
    MISS: "MISS",
    MRS: "MRS",
    DR: "DR",
    PROF: "PROF",
    ENGR: "ENGR",
    BARR: "BARR",
    FR: "FR",
    REV: "REV",
    PASTOR: "PASTOR",
    CHIEF: "CHIEF",
    HON: "HON",
    SIR: "SIR",
    MADAM: "MADAM"
};

var EMPLOYMENT_STATUS = {
    ON_DUTY: "ON_DUTY",
    ON_LEAVE: "ON_LEAVE",
    ON_PROBATION: "ON_PROBATION",
    ON_SUSPENSION: "ON_SUSPENSION",
    ON_RETIREMENT: "ON_RETIREMENT"
};

var DEPARTMENT = {
    FRONTEND: "FRONTEND",
    BACKEND: "BACKEND",
    ANDROID: "ANDROID",
    IOS: "IOS",
    DEVOPS: "DEVOPS",
    OPERATIONS: "OPERATIONS",
    HR: "HR"
};

var BANK_ACCOUNT_TYPE = exports.BANK_ACCOUNT_TYPE = {
    SAVINGS: "SAVINGS",
    CORPORATE: "CORPORATE",
    DOMICIARY: "DOMICIARY"
};

var JWT = exports.JWT = {
    saltRounds: 2,
    jwtSecret: "yo ma nigga`s-a_hidden-secret",
    tokenExpireTime: "6h"
};

var SMS = exports.SMS = {
    SMS_USERNAME: "aishatu",
    SMS_PASSWORD: "(pass1234)",
    SMS_URL1: "http://fancysms.com/components/com_spc/smsapi.php",
    SMS_URL2: "http://smsexperience.com/components/com_spc/smsapi.php",
    SMS_URL3: "http://fancysms.com/components/com_spc/smsapi.php",
    SMS_SENDER: "Peace"
};

var DATABASE = exports.DATABASE = {
    TABLES: ["AMIND", "TALENT", "CLIENT", "INVOICE", "PACKAGE"],
    DROP_TABLE_IF_EXIST: { TRUE: true, FALSE: true },
    RECORD_STATUS: {
        PENDING: "PENDING",
        REJECTED: "REJECTED",
        ACKNOWLEDGED: "ACKNOWLEDGED",
        APPROVED: "APPROVED",
        AUTHORIZED: "AUTHORIZED",
        AUDITED: "AUDITED",
        CLOSED: "CLOSED"
    }
};

var FLUTTERWAVE = exports.FLUTTERWAVE = {
    LIVE_TXN_URL: "https://api.ravepay.co/flwv3-pug/getpaidx/api/v2/hosted/pay",
    TEST_TXN_URL: "https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/v2/hosted/pay",
    LIVE_VERIFY_URL: "https://api.ravepay.co/flwv3-pug/getpaidx/api/v2/verify",
    TEST_VERIFY_URL: "https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/v2/verify",
    PUBLIC_KEY: "<ADD PBFPubKey is FLUTERWAVE PUBLIC KEY HERE>",
    SECRET_KEY: "FLWSECK-e6db11d1f8a6208de8cb2f94e293450e-X",
    REDIRECT_URL: "https://your-website.com/urltoredirectto",
    HASH: "<My harsh>"
};

exports.EMPLOYEE_TYPE = EMPLOYEE_TYPE;
exports.GENDER = GENDER;
exports.STATUS_MSG = STATUS_MSG;
exports.MARITAL_STATUS = MARITAL_STATUS;
exports.CUSTOMER_TYPE = CUSTOMER_TYPE;
exports.PERSONAL_TITLE = PERSONAL_TITLE;
exports.EMPLOYMENT_STATUS = EMPLOYMENT_STATUS;
exports.DEPARTMENT = DEPARTMENT;
//# sourceMappingURL=index.js.map