"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.adminAuthenticate = adminAuthenticate;
exports.talentAuthenticate = talentAuthenticate;
exports.clientAuthenticate = clientAuthenticate;

var _bcryptjs = require("bcryptjs");

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _jsonwebtoken = require("jsonwebtoken");

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _sequelize = require("sequelize");

var Sequelize = _interopRequireWildcard(_sequelize);

var _model = require("../api/admin/model");

var _model2 = _interopRequireDefault(_model);

var _model3 = require("../api/talent/model");

var _model4 = _interopRequireDefault(_model3);

var _model5 = require("../api/client/model");

var _model6 = _interopRequireDefault(_model5);

var _constants = require("../constants");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Op = Sequelize.Op;
function adminAuthenticate(params) {
    // return next();
    var email = params.email,
        phone = params.phone_office,
        otp = params.otp,
        password = params.password;

    return _model2.default.findOne({
        where: _defineProperty({}, Op.or, [{ email: email }, { phone_office: phone }]),
        raw: true
    })
    // eslint-disable-next-line complexity
    .then(function (user) {
        if (!user) {
            throw new Error("Authentication failed. User not found.");
        }
        if (!(_bcryptjs2.default.compareSync(password || "", user.password) || _bcryptjs2.default.compareSync(otp || "", user.otp))) {
            throw new Error("Authentication failed. Wrong password or otp.");
        }
        var payload = {
            id: user.id,
            userType: "admin",
            email: user.email,
            phone_office: user.phone_office,
            office_id: user.office_id,
            time: new Date()
        };

        var token = _jsonwebtoken2.default.sign(payload, _constants.JWT.jwtSecret, {
            expiresIn: _constants.JWT.tokenExpireTime
        });
        return token;
    });
}

function talentAuthenticate(params) {
    // return next();
    var email = params.email,
        phone = params.phone_office,
        otp = params.otp,
        password = params.password;

    return _model4.default.findOne({
        where: _defineProperty({}, Op.or, [{ email: email }, { phone_office: phone }]),
        raw: true
    })
    // eslint-disable-next-line complexity
    .then(function (user) {
        if (!user) {
            throw new Error("Authentication failed. talent not found.");
        }
        if (!(_bcryptjs2.default.compareSync(password || "", user.password) || _bcryptjs2.default.compareSync(otp || "", user.otp))) {
            throw new Error("Authentication failed. Wrong password or otp.");
        }
        var payload = {
            id: user.id,
            userType: "talent",
            email: user.email,
            phone_office: user.phone_office,
            vehicle_id: user.vehicle_id,
            time: new Date()
        };

        var token = _jsonwebtoken2.default.sign(payload, _constants.JWT.jwtSecret, {
            expiresIn: _constants.JWT.tokenExpireTime
        });
        return token;
    });
}

function clientAuthenticate(params) {
    // return next();
    var email = params.email,
        phone = params.phone,
        otp = params.otp,
        password = params.password;

    return _model6.default.findOne({
        where: _defineProperty({}, Op.or, [{ email: email }, { phone: phone }]),
        raw: true
    })
    // eslint-disable-next-line complexity
    .then(function (user) {
        if (!user) {
            throw new Error("Authentication failed. Client not found.");
        }
        if (!(_bcryptjs2.default.compareSync(password || "", user.password) || _bcryptjs2.default.compareSync(otp || "", user.otp))) {
            throw new Error("Authentication failed. Wrong password or otp.");
        }
        var payload = {
            id: user.id,
            userType: "client",
            email: user.email,
            phone: user.phone,
            time: new Date()
        };

        var token = _jsonwebtoken2.default.sign(payload, _constants.JWT.jwtSecret, {
            expiresIn: _constants.JWT.tokenExpireTime
        });
        return token;
    });
}
//# sourceMappingURL=authenticate.js.map