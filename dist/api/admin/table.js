"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _bcryptjs = require("bcryptjs");

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _constants = require("../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var table = [{
    title: "Engr",
    surname: "Nditah",
    other_name: "Samweld",
    gender: _constants.GENDER.MALE,
    birth_date: new Date(1987, 6, 20),
    marital_status: _constants.MARITAL_STATUS.SINGLE,
    phone_office: "08134836164",
    phone_personal: "08134836164",
    address: "Emene, Enugu",
    country_iso2: "ng",
    email: "admin@telixia.com",
    password: _bcryptjs2.default.hashSync("hotjobs", _constants.JWT.saltRounds),
    otp: _bcryptjs2.default.hashSync("1234", _constants.JWT.saltRounds),
    otp_count: 1,
    kin: "Joel",
    kin_phone: "ABC",
    kin_address: "ABC",
    job_responsibility: "Recruite, Mentor, Job-placement",
    job_title: "CEO",
    highest_qualification: "PGDE",
    highest_institution: "NOUN",
    employment_status: _constants.EMPLOYMENT_STATUS.ON_DUTY,
    employment_date: new Date(2018, 11, 20),
    monthly_tax: 0.0,
    monthly_salary: 10000.0,
    bank_id: 7,
    bank_account_number: "00",
    bank_account_name: "Nditah Samweld",
    is_salary_payable: true,
    is_document_complete: true,
    superior_id: 1,
    remark: "Founder",
    photo: null,
    last_login_date: null,
    last_login_ip: null,
    created_by: 1
}];

exports.default = table;
//# sourceMappingURL=table.js.map