"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ownerAuthenticate = undefined;

var ownerAuthenticate = exports.ownerAuthenticate = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(params) {
        var email, phone, otp, password, user, payload, token;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        // return next();
                        email = params.email, phone = params.phone_office, otp = params.otp, password = params.password;
                        _context.next = 3;
                        return _models.Owner.findOne({
                            where: _defineProperty({}, Op.or, [{ email: email }, { phone_office: phone }]),
                            raw: true
                        });

                    case 3:
                        user = _context.sent;

                        if (user) {
                            _context.next = 6;
                            break;
                        }

                        throw new Error("Authentication failed. Driver not found.");

                    case 6:
                        if (_bcryptjs2.default.compareSync(password || "", user.password) || _bcryptjs2.default.compareSync(otp || "", user.otp)) {
                            _context.next = 8;
                            break;
                        }

                        throw new Error("Authentication failed. Wrong password or otp.");

                    case 8:
                        payload = {
                            id: user.id,
                            userType: "driver",
                            email: user.email,
                            phone_office: user.phone_office,
                            time: new Date()
                        };
                        token = _jsonwebtoken2.default.sign(payload, _constants.JWT.jwtSecret, {
                            expiresIn: _constants.JWT.tokenExpireTime
                        });
                        return _context.abrupt("return", token);

                    case 11:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function ownerAuthenticate(_x) {
        return _ref.apply(this, arguments);
    };
}();

exports.staffAuthenticate = staffAuthenticate;
exports.driverAuthenticate = driverAuthenticate;
exports.customerAuthenticate = customerAuthenticate;

var _bcryptjs = require("bcryptjs");

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _jsonwebtoken = require("jsonwebtoken");

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _sequelize = require("sequelize");

var Sequelize = _interopRequireWildcard(_sequelize);

var _models = require("../api/models");

var _constants = require("../constants");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Op = Sequelize.Op;
function staffAuthenticate(params) {
    // return next();
    var email = params.email,
        phone = params.phone_office,
        otp = params.otp,
        password = params.password;

    return _models.Staff.findOne({
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
            userType: "staff",
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

function driverAuthenticate(params) {
    // return next();
    var email = params.email,
        phone = params.phone_office,
        otp = params.otp,
        password = params.password;

    return _models.Driver.findOne({
        where: _defineProperty({}, Op.or, [{ email: email }, { phone_office: phone }]),
        raw: true
    })
    // eslint-disable-next-line complexity
    .then(function (user) {
        if (!user) {
            throw new Error("Authentication failed. Driver not found.");
        }
        if (!(_bcryptjs2.default.compareSync(password || "", user.password) || _bcryptjs2.default.compareSync(otp || "", user.otp))) {
            throw new Error("Authentication failed. Wrong password or otp.");
        }
        var payload = {
            id: user.id,
            userType: "driver",
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

function customerAuthenticate(params) {
    // return next();
    var email = params.email,
        phone = params.phone,
        otp = params.otp,
        password = params.password;

    return _models.Customer.findOne({
        where: _defineProperty({}, Op.or, [{ email: email }, { phone: phone }]),
        raw: true
    })
    // eslint-disable-next-line complexity
    .then(function (user) {
        if (!user) {
            throw new Error("Authentication failed. Customer not found.");
        }
        if (!(_bcryptjs2.default.compareSync(password || "", user.password) || _bcryptjs2.default.compareSync(otp || "", user.otp))) {
            throw new Error("Authentication failed. Wrong password or otp.");
        }
        var payload = {
            id: user.id,
            userType: "customer",
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