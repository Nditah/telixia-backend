"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _bcryptjs = require("bcryptjs");

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _constants = require("../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var table = [{
    client_type: "INDIVIDUAL",
    surname: "Jave",
    other_name: "Scott",
    gender: _constants.GENDER.FEMALE,
    phone: "08134836164",
    email: "client@peacegroup.ng",
    password: _bcryptjs2.default.hashSync("peace", _constants.JWT.saltRounds),
    otp: _bcryptjs2.default.hashSync("1234", _constants.JWT.saltRounds),
    otp_count: 1,
    country_iso2: "ng",
    contact_person: "Adam",
    contact_person_phone: "0802737300",
    created_by: 1
}];

exports.default = table;
//# sourceMappingURL=table.js.map