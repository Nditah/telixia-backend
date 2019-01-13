"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.schema = exports.schemaUpdate = exports.schemaCreate = exports.schemaFetch = exports.schemaLogin = undefined;

var _joi = require("joi");

var _joi2 = _interopRequireDefault(_joi);

var _sequelize = require("sequelize");

var Sequelize = _interopRequireWildcard(_sequelize);

var _sequelize2 = require("../../config/sequelize");

var _sequelize3 = _interopRequireDefault(_sequelize2);

var _constants = require("../../constants");

var _table = require("./table");

var _table2 = _interopRequireDefault(_table);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var force = _constants.DATABASE.DROP_TABLE_IF_EXIST.FALSE; /**
                                                            * @author 4Decoder
                                                            * @property {Integer} id Admin primaryKey
                                                            * @property {String} title Admin title (optional)
                                                            * @property {String} surname Admin  surname (required)
                                                            * @property {String} other_name Admin  other_name (required)
                                                            * @property {String} gender Admin  gender (required)
                                                            * @property {Date} birth_date Admin  birth_date (required)
                                                            * @property {String} marital_status Admin  marital_status (required)
                                                            * @property {String} phone_office Admin  phone_office (required)
                                                            * @property {String} phone_personal Admin  phone_personal (required)
                                                            * @property {String} address Admin  address (required)
                                                            * @property {String} country_iso2 Admin  country_iso2 (required)
                                                            * @property {String} email Admin  email (required)
                                                            * @property {String} password Admin  password (required)
                                                            * @property {String} otp Admin  otp (required)
                                                            * @property {Integer} otp_count Admin  otp_count (required)
                                                            * @property {String} kin Admin  kin (required)
                                                            * @property {String} kin_phone Admin  kin_phone (required)
                                                            * @property {String} kin_address Admin  kin_address (required)
                                                            * @property {String} job_responsibility Admin  job_responsibility (required)
                                                            * @property {String} job_title Admin  job_title (required)
                                                            * @property {String} highest_qualification Admin  highest_qualification (optional)
                                                            * @property {String} highest_institution Admin  highest_institution (optional)
                                                            * @property {String} employment_status Admin  employment_status (required)
                                                            * @property {Date} employment_date Admin  employment_date (required)
                                                            * @property {Integer} monthly_tax Admin  monthly_tax (optional)
                                                            * @property {Integer} monthly_salary Admin  monthly_salary (required)
                                                            * @property {Integer} bank_id Admin  bank_id (required)
                                                            * @property {String} bank_account_number Admin  bank_account_number (required)
                                                            * @property {String} bank_account_name Admin  bank_account_name (required)
                                                            * @property {Boolean} is_salary_payable Admin  is_salary_payable (optional)
                                                            * @property {Boolean} is_document_complete Admin  is_document_complete (optional)
                                                            * @property {Integer} superior_id Admin  superior_id (optional)
                                                            * @property {String} remark Admin  remark (optional)
                                                            * @property {String} photo Admin  photo (optional)  
                                                            * @property {Date} last_login_date Admin  last_login_date (optional)
                                                            * @property {String} last_login_ip Admin  last_login_ip (optional)
                                                            * @property {Integer} created_by Admin record created by
                                                            * @property {Integer} updated_by Admin record modified by
                                                            * @description Admin holds record of all Telixia Staff
                                                            */
var schemaLogin = exports.schemaLogin = {
    email: _joi2.default.string().optional(),
    phone_office: _joi2.default.string().optional(),
    otp: _joi2.default.string().optional(),
    password: _joi2.default.string().optional()
};

var schemaFetch = exports.schemaFetch = {
    id: _joi2.default.number().optional(),
    offset: _joi2.default.number().optional(),
    limit: _joi2.default.number().optional(),
    fields: _joi2.default.string().optional()
};

var schemaCreate = exports.schemaCreate = {
    title: _joi2.default.string().optional(),
    surname: _joi2.default.string().required(),
    other_name: _joi2.default.string().required(),
    gender: _joi2.default.string().required(),
    birth_date: _joi2.default.date().required(),
    marital_status: _joi2.default.string().required(),
    phone_office: _joi2.default.string().required(),
    phone_personal: _joi2.default.string().required(),
    address: _joi2.default.string().required(),
    country_iso2: _joi2.default.string().required(),
    email: _joi2.default.string().required(),
    password: _joi2.default.string().required(),
    otp: _joi2.default.string().required(),
    otp_count: _joi2.default.number().required(),
    kin: _joi2.default.string().required(),
    kin_phone: _joi2.default.string().required(),
    kin_address: _joi2.default.string().required(),
    job_responsibility: _joi2.default.string().required(),
    job_title: _joi2.default.string().required(),
    highest_qualification: _joi2.default.string().optional(),
    highest_institution: _joi2.default.string().optional(),
    employment_status: _joi2.default.string().required(),
    employment_date: _joi2.default.date().required(),
    monthly_tax: _joi2.default.number().optional(),
    monthly_salary: _joi2.default.number().required(),
    bank_id: _joi2.default.number().required(),
    bank_account_number: _joi2.default.string().required(),
    bank_account_name: _joi2.default.string().required(),
    is_salary_payable: _joi2.default.boolean().optional(),
    is_document_complete: _joi2.default.boolean().optional(),
    superior_id: _joi2.default.number().optional(),
    remark: _joi2.default.string().optional(),
    photo: _joi2.default.string().optional(),
    last_login_date: _joi2.default.date().optional(),
    last_login_ip: _joi2.default.string().optional(),
    created_by: _joi2.default.number().required()
};

var schemaUpdate = exports.schemaUpdate = {
    title: _joi2.default.string().optional(),
    surname: _joi2.default.string().required(),
    other_name: _joi2.default.string().optional(),
    gender: _joi2.default.string().optional(),
    birth_date: _joi2.default.date().optional(),
    marital_status: _joi2.default.string().optional(),
    phone_office: _joi2.default.string().optional(),
    phone_personal: _joi2.default.string().optional(),
    address: _joi2.default.string().optional(),
    country_iso2: _joi2.default.string().optional(),
    email: _joi2.default.string().optional(),
    password: _joi2.default.string().optional(),
    otp: _joi2.default.string().optional(),
    otp_count: _joi2.default.number().optional(),
    kin: _joi2.default.string().optional(),
    kin_phone: _joi2.default.string().optional(),
    kin_address: _joi2.default.string().optional(),
    job_responsibility: _joi2.default.string().optional(),
    job_title: _joi2.default.string().optional(),
    highest_qualification: _joi2.default.string().optional(),
    highest_institution: _joi2.default.string().optional(),
    employment_status: _joi2.default.string().optional(),
    employment_date: _joi2.default.date().optional(),
    monthly_tax: _joi2.default.number().optional(),
    monthly_salary: _joi2.default.number().optional(),
    bank_id: _joi2.default.number().optional(),
    bank_account_number: _joi2.default.string().optional(),
    bank_account_name: _joi2.default.string().optional(),
    is_salary_payable: _joi2.default.boolean().optional(),
    is_document_complete: _joi2.default.boolean().optional(),
    superior_id: _joi2.default.number().optional(),
    remark: _joi2.default.string().optional(),
    photo: _joi2.default.string().optional(),
    last_login_date: _joi2.default.date().optional(),
    last_login_ip: _joi2.default.string().optional(),
    updated_by: _joi2.default.number().required()
};

var schema = exports.schema = {
    id: { type: Sequelize.INTEGER(11), primaryKey: true, autoIncrement: true },
    title: { type: Sequelize.STRING },
    surname: { type: Sequelize.STRING, notEmpty: true },
    other_name: { type: Sequelize.STRING, notEmpty: true },
    gender: {
        type: Sequelize.ENUM(_constants.GENDER.MALE, _constants.GENDER.FEMALE),
        allowNull: false
    },
    birth_date: { type: Sequelize.DATEONLY, allowNull: false },
    marital_status: {
        type: Sequelize.ENUM(Object.values(_constants.MARITAL_STATUS)),
        allowNull: false
    },
    phone_office: { type: Sequelize.STRING, allowNull: false },
    phone_personal: { type: Sequelize.STRING },
    address: { type: Sequelize.STRING },
    country_iso2: { type: Sequelize.STRING(2), allowNull: false, defaultValue: "ng" },
    email: { type: Sequelize.STRING, validate: { isEmail: true } },
    password: { type: Sequelize.STRING },
    otp: { type: Sequelize.STRING },
    otp_count: { type: Sequelize.INTEGER(11), allowNull: false, defaultValue: 0 },
    kin: { type: Sequelize.STRING, comment: "Fullname and Relationship", allowNull: false },
    kin_phone: { type: Sequelize.STRING, allowNull: false },
    kin_address: { type: Sequelize.STRING, allowNull: false },
    job_responsibility: { type: Sequelize.STRING },
    job_title: { type: Sequelize.STRING },
    highest_qualification: { type: Sequelize.STRING },
    highest_institution: { type: Sequelize.STRING },
    employment_status: {
        type: Sequelize.ENUM(Object.values(_constants.EMPLOYMENT_STATUS)),
        allowNull: false
    },
    employment_date: { type: Sequelize.DATE },
    monthly_tax: { type: Sequelize.DECIMAL(10, 2), defaultValue: 0.0 },
    monthly_salary: { type: Sequelize.DECIMAL(10, 2), defaultValue: 0.0 },
    bank_id: { type: Sequelize.INTEGER(11) },
    bank_account_number: { type: Sequelize.STRING },
    bank_account_name: { type: Sequelize.STRING },
    is_salary_payable: { type: Sequelize.BOOLEAN, defaultValue: false, allowNull: false },
    is_document_complete: { type: Sequelize.BOOLEAN, defaultValue: false, allowNull: false },
    superior_id: { type: Sequelize.INTEGER(11), allowNull: false, defaultValue: 1 },
    remark: { type: Sequelize.STRING },
    photo: { type: Sequelize.STRING },
    last_login_date: { type: Sequelize.DATE },
    last_login_ip: { type: Sequelize.STRING },
    created_by: { type: Sequelize.INTEGER(11), allowNull: false },
    updated_by: { type: Sequelize.INTEGER(11) }
};

var options = {
    timestamps: true,
    paranoid: true,
    underscored: true,
    freezeTableName: true
};
var Admin = _sequelize3.default.define("admin", schema, options);
_sequelize3.default.sync().then(function () {
    return Admin.sync({ force: force }).then(function () {
        return Admin.bulkCreate(_table2.default);
    });
});

exports.default = Admin;
//# sourceMappingURL=model.js.map