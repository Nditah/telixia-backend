"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _bcryptjs = require("bcryptjs");

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _constants = require("../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var table = [{
    serial: "ABC",
    category: "ABC",
    title: "Mrs",
    surname: "Eve",
    other_name: "Tera",
    gender: _constants.GENDER.FEMALE,
    birth_date: new Date(1987, 6, 20),
    marital_status: _constants.MARITAL_STATUS.MARRIED,
    country_iso2: "ng",
    state_id: 1,
    county_id: 90,
    email: "admin@peacegroup.ng",
    password: _bcryptjs2.default.hashSync("peace", _constants.JWT.saltRounds),
    otp: _bcryptjs2.default.hashSync("1234", _constants.JWT.saltRounds),
    otp_count: 1,
    kin: "Joel",
    kin_phone: "ABC",
    kin_address: "ABC",
    phone_office: "08134836164",
    guarantor1: "ABC",
    guarantor1_phone: "ABC",
    guarantor1_address: "ABC",
    employment_status: _constants.EMPLOYMENT_STATUS.ON_DUTY,
    terminal_id: 1,
    superior_id: 1,
    office_id: 1,
    subsidiary: _constants.SUBSIDIARY.PMT,
    created_by: 1
}];

exports.default = table;
//# sourceMappingURL=table.js.map