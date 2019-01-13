"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.schemaUpdate = exports.schemaCreate = exports.schemaFetch = exports.schemaLogin = undefined;

var _joi = require("joi");

var _joi2 = _interopRequireDefault(_joi);

var _sequelize = require("sequelize");

var Sequelize = _interopRequireWildcard(_sequelize);

var _sequelize2 = require("../config/sequelize");

var _sequelize3 = _interopRequireDefault(_sequelize2);

var _constants = require("../../../constants");

var _table = require("./table");

var _table2 = _interopRequireDefault(_table);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var force = _constants.DATABASE.DROP_TABLE_IF_EXIST.FALSE; /**
                                                            * @author 4Decoder
                                                            * @property {Integer} id Staff primaryKey
                                                            * @property {String} name Staff short name
                                                            * @property {Integer} created_by Staff record created by
                                                            * @property {Integer} updated_by Staff record modified by
                                                            * @description Staff holds record of all cities with terminal_list
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
    serial: _joi2.default.string().optional(),
    category: _joi2.default.string().optional(),
    title: _joi2.default.string().optional(),
    surname: _joi2.default.string().required(),
    other_name: _joi2.default.string().required(),
    gender: _joi2.default.string().required(),
    birth_date: _joi2.default.date().required(),
    marital_status: _joi2.default.string().required(),
    children: _joi2.default.number().optional(),
    phone_office: _joi2.default.string().required(),
    phone_personal: _joi2.default.string().optional(),
    address: _joi2.default.string().optional(),
    village: _joi2.default.string().optional(),
    state_id: _joi2.default.number().required(),
    county_id: _joi2.default.number().required(),
    country_iso2: _joi2.default.string().optional(),
    email: _joi2.default.string().optional(),
    password: _joi2.default.string().optional(),
    otp: _joi2.default.string().optional(),
    otp_count: _joi2.default.number().optional(),
    kin: _joi2.default.string().required(),
    kin_phone: _joi2.default.string().required(),
    kin_address: _joi2.default.string().required(),
    guarantor1: _joi2.default.string().required(),
    guarantor1_phone: _joi2.default.string().required(),
    guarantor1_address: _joi2.default.string().required(),
    guarantor2: _joi2.default.string().optional(),
    guarantor2_phone: _joi2.default.string().optional(),
    guarantor2_address: _joi2.default.string().optional(),
    profession: _joi2.default.string().optional(),
    qualification: _joi2.default.string().optional(),
    institution: _joi2.default.string().optional(),
    employment_status: _joi2.default.string().required(),
    tax: _joi2.default.number().optional(),
    basic_salary: _joi2.default.number().optional(),
    bonus: _joi2.default.number().optional(),
    entertainment_allowance: _joi2.default.number().optional(),
    house_allowance: _joi2.default.number().optional(),
    lunch_allowance: _joi2.default.number().optional(),
    medical_allowance: _joi2.default.number().optional(),
    transport_allowance: _joi2.default.number().optional(),
    utility_allowance: _joi2.default.number().optional(),
    welfare_allowance: _joi2.default.number().optional(),
    pension: _joi2.default.number().optional(),
    assurance: _joi2.default.number().optional(),
    bank_id: _joi2.default.number().optional(),
    bank_account_number: _joi2.default.string().optional(),
    bank_account_name: _joi2.default.string().optional(),
    rank_id: _joi2.default.number().optional(),
    office_id: _joi2.default.number().required(),
    superior_id: _joi2.default.number().required(),
    subsidiary: _joi2.default.string().valid(Object.values(_constants.SUBSIDIARY)).required(),
    terminal_id: _joi2.default.number().required(),
    vehicle_id: _joi2.default.number().optional(),
    notice: _joi2.default.string().optional(),
    rating: _joi2.default.string().optional(),
    remark: _joi2.default.string().optional(),
    photo: _joi2.default.string().optional(),
    is_salary_payable: _joi2.default.boolean().optional(),
    is_document_complete: _joi2.default.boolean().optional(),
    access_level: _joi2.default.string().optional(),
    approved_by: _joi2.default.number().optional(),
    approved_date: _joi2.default.date().optional(),
    disengaged_by: _joi2.default.number().optional(),
    disengaged_date: _joi2.default.date().optional(),
    created_by: _joi2.default.number().required()
};

var schemaUpdate = exports.schemaUpdate = {
    serial: _joi2.default.string().optional(),
    category: _joi2.default.string().optional(),
    title: _joi2.default.string().optional(),
    surname: _joi2.default.string().optional(),
    other_name: _joi2.default.string().optional(),
    gender: _joi2.default.string().optional(),
    birth_date: _joi2.default.date().optional(),
    marital_status: _joi2.default.string().optional(),
    children: _joi2.default.number().optional(),
    phone_office: _joi2.default.string().optional(),
    phone_personal: _joi2.default.string().optional(),
    address: _joi2.default.string().optional(),
    village: _joi2.default.string().optional(),
    state_id: _joi2.default.number().optional(),
    county_id: _joi2.default.number().optional(),
    country_iso2: _joi2.default.string().optional(),
    email: _joi2.default.string().optional(),
    password: _joi2.default.string().optional(),
    otp: _joi2.default.string().optional(),
    otp_count: _joi2.default.number().optional(),
    kin: _joi2.default.string().optional(),
    kin_phone: _joi2.default.string().optional(),
    kin_address: _joi2.default.string().optional(),
    guarantor1: _joi2.default.string().optional(),
    guarantor1_phone: _joi2.default.string().optional(),
    guarantor1_address: _joi2.default.string().optional(),
    guarantor2: _joi2.default.string().optional(),
    guarantor2_phone: _joi2.default.string().optional(),
    guarantor2_address: _joi2.default.string().optional(),
    profession: _joi2.default.string().optional(),
    qualification: _joi2.default.string().optional(),
    institution: _joi2.default.string().optional(),
    employment_status: _joi2.default.string().optional(),
    tax: _joi2.default.number().optional(),
    basic_salary: _joi2.default.number().optional(),
    bonus: _joi2.default.number().optional(),
    entertainment_allowance: _joi2.default.number().optional(),
    house_allowance: _joi2.default.number().optional(),
    lunch_allowance: _joi2.default.number().optional(),
    medical_allowance: _joi2.default.number().optional(),
    transport_allowance: _joi2.default.number().optional(),
    utility_allowance: _joi2.default.number().optional(),
    welfare_allowance: _joi2.default.number().optional(),
    pension: _joi2.default.number().optional(),
    assurance: _joi2.default.number().optional(),
    bank_id: _joi2.default.number().optional(),
    bank_account_number: _joi2.default.string().optional(),
    bank_account_name: _joi2.default.string().optional(),
    rank_id: _joi2.default.number().optional(),
    office_id: _joi2.default.number().optional(),
    superior_id: _joi2.default.number().optional(),
    subsidiary: _joi2.default.string().valid(Object.values(_constants.SUBSIDIARY)).optional(),
    terminal_id: _joi2.default.number().optional(),
    vehicle_id: _joi2.default.number().optional(),
    notice: _joi2.default.string().optional(),
    rating: _joi2.default.string().optional(),
    remark: _joi2.default.string().optional(),
    photo: _joi2.default.string().optional(),
    is_salary_payable: _joi2.default.boolean().optional(),
    is_document_complete: _joi2.default.boolean().optional(),
    access_level: _joi2.default.string().optional(),
    approved_by: _joi2.default.number().optional(),
    approved_date: _joi2.default.date().optional(),
    disengaged_by: _joi2.default.number().optional(),
    disengaged_date: _joi2.default.date().optional(),
    updated_by: _joi2.default.number().required()
};

var schema = {
    id: { type: Sequelize.INTEGER(11), primaryKey: true, autoIncrement: true },
    serial: { type: Sequelize.STRING },
    category: { type: Sequelize.STRING },
    title: { type: Sequelize.STRING },
    surname: { type: Sequelize.STRING, notEmpty: true },
    other_name: { type: Sequelize.STRING, notEmpty: true },
    gender: {
        type: Sequelize.ENUM(_constants.GENDER.MALE, _constants.GENDER.FEMALE),
        defaultValue: _constants.GENDER.MALE,
        allowNull: false
    },
    birth_date: { type: Sequelize.DATEONLY, allowNull: false },
    marital_status: {
        type: Sequelize.ENUM(_constants.MARITAL_STATUS.SINGLE, _constants.MARITAL_STATUS.MARRIED, _constants.MARITAL_STATUS.DIVORSED, _constants.MARITAL_STATUS.SEPARATED, _constants.MARITAL_STATUS.WIDOWED),
        allowNull: false
    },
    children: { type: Sequelize.STRING },
    phone_office: { type: Sequelize.STRING, allowNull: false },
    phone_personal: { type: Sequelize.STRING },
    address: { type: Sequelize.STRING },
    village: { type: Sequelize.STRING },
    state_id: { type: Sequelize.INTEGER(11), allowNull: false },
    county_id: { type: Sequelize.INTEGER(11), allowNull: false },
    country_iso2: { type: Sequelize.STRING(2), allowNull: false, defaultValue: "ng" },
    email: { type: Sequelize.STRING, validate: { isEmail: true } },
    password: { type: Sequelize.STRING },
    otp: { type: Sequelize.STRING },
    otp_count: { type: Sequelize.INTEGER(11), allowNull: false, defaultValue: 0 },
    kin: { type: Sequelize.STRING, allowNull: false },
    kin_phone: { type: Sequelize.STRING, allowNull: false },
    kin_address: { type: Sequelize.STRING, allowNull: false },
    guarantor1: { type: Sequelize.STRING, allowNull: false },
    guarantor1_phone: { type: Sequelize.STRING, allowNull: false },
    guarantor1_address: { type: Sequelize.STRING, allowNull: false },
    guarantor2: { type: Sequelize.STRING },
    guarantor2_phone: { type: Sequelize.STRING },
    guarantor2_address: { type: Sequelize.STRING },
    profession: { type: Sequelize.STRING },
    qualification: { type: Sequelize.STRING },
    institution: { type: Sequelize.STRING },
    employment_status: {
        type: Sequelize.ENUM(_constants.EMPLOYMENT_STATUS.ON_DUTY, _constants.EMPLOYMENT_STATUS.ON_LEAVE, _constants.EMPLOYMENT_STATUS.ON_RETIREMENT, _constants.EMPLOYMENT_STATUS.ON_SUSPENSION, _constants.EMPLOYMENT_STATUS.ON_PROBATION),
        allowNull: false
    },
    tax: { type: Sequelize.DECIMAL(10, 2), defaultValue: 0.0 },
    basic_salary: { type: Sequelize.DECIMAL(10, 2), defaultValue: 0.0 },
    bonus: { type: Sequelize.DECIMAL(10, 2), defaultValue: 0.0 },
    entertainment_allowance: { type: Sequelize.DECIMAL(10, 2), defaultValue: 0.0 },
    house_allowance: { type: Sequelize.DECIMAL(10, 2), defaultValue: 0.0 },
    lunch_allowance: { type: Sequelize.DECIMAL(10, 2), defaultValue: 0.0 },
    medical_allowance: { type: Sequelize.DECIMAL(10, 2), defaultValue: 0.0 },
    transport_allowance: { type: Sequelize.DECIMAL(10, 2), defaultValue: 0.0 },
    utility_allowance: { type: Sequelize.DECIMAL(10, 2), defaultValue: 0.0 },
    welfare_allowance: { type: Sequelize.DECIMAL(10, 2), defaultValue: 0.0 },
    pension: { type: Sequelize.DECIMAL(10, 2), defaultValue: 0.0 },
    assurance: { type: Sequelize.DECIMAL(10, 2), defaultValue: 0.0 },
    bank_id: { type: Sequelize.INTEGER(11) },
    bank_account_number: { type: Sequelize.STRING },
    bank_account_name: { type: Sequelize.STRING },
    rank_id: { type: Sequelize.INTEGER(11) },
    office_id: { type: Sequelize.INTEGER(11), allowNull: false },
    superior_id: { type: Sequelize.INTEGER(11), allowNull: false },
    subsidiary: {
        type: Sequelize.ENUM(Object.values(_constants.SUBSIDIARY)),
        allowNull: false
    },
    terminal_id: { type: Sequelize.INTEGER(11), defaultValue: 1, allowNull: false },
    vehicle_id: { type: Sequelize.INTEGER(11) },
    notice: { type: Sequelize.STRING },
    rating: { type: Sequelize.STRING },
    remark: { type: Sequelize.STRING },
    photo: { type: Sequelize.STRING },
    is_salary_payable: { type: Sequelize.BOOLEAN, defaultValue: false, allowNull: false },
    is_document_complete: { type: Sequelize.BOOLEAN, defaultValue: false, allowNull: false },
    access_level: { type: Sequelize.STRING, defaultValue: "0", allowNull: false },
    approved_by: { type: Sequelize.INTEGER(11) },
    approved_date: { type: Sequelize.DATE },
    disengaged_by: { type: Sequelize.INTEGER(11) },
    disengaged_date: { type: Sequelize.DATE },
    last_login: { type: Sequelize.DATE },
    created_by: { type: Sequelize.INTEGER(11), allowNull: false },
    updated_by: { type: Sequelize.INTEGER(11) }
};

var options = {
    timestamps: true,
    paranoid: true,
    underscored: true,
    freezeTableName: true
};
var Staff = _sequelize3.default.define("staff", schema, options);
_sequelize3.default.sync().then(function () {
    return Staff.sync({ force: force }).then(function () {
        return Staff.bulkCreate(_table2.default);
    });
});

exports.default = Staff;
//# sourceMappingURL=model.js.map