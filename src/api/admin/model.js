/**
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
import Joi from "joi";
import * as Sequelize from "sequelize";
import sequelize from "../../config/sequelize";
import { DATABASE, GENDER, MARITAL_STATUS,
    EMPLOYMENT_STATUS } from "../../constants";
import table from "./table";
    
const force = DATABASE.DROP_TABLE_IF_EXIST.FALSE;

export const schemaLogin = {
    email: Joi.string().optional(),
    phone_office: Joi.string().optional(),
    otp: Joi.string().optional(),
    password: Joi.string().optional(),
};

export const schemaFetch = {
    id: Joi.number().optional(),
    offset: Joi.number().optional(),
    limit: Joi.number().optional(),
    fields: Joi.string().optional(),
};

export const schemaCreate = {
    title: Joi.string().optional(),
    surname: Joi.string().required(),
    other_name: Joi.string().required(),
    gender: Joi.string().required(),
    birth_date: Joi.date().required(),
    marital_status: Joi.string().required(),
    phone_office: Joi.string().required(),
    phone_personal: Joi.string().required(),
    address: Joi.string().required(),
    country_iso2: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    otp: Joi.string().required(),
    otp_count: Joi.number().required(),
    kin: Joi.string().required(),
    kin_phone: Joi.string().required(),
    kin_address: Joi.string().required(),
    job_responsibility: Joi.string().required(),
    job_title: Joi.string().required(),
    highest_qualification: Joi.string().optional(),
    highest_institution: Joi.string().optional(),
    employment_status: Joi.string().required(),
    employment_date: Joi.date().required(),
    monthly_tax: Joi.number().optional(),
    monthly_salary: Joi.number().required(),
    bank_id: Joi.number().required(),
    bank_account_number: Joi.string().required(),
    bank_account_name: Joi.string().required(),
    is_salary_payable: Joi.boolean().optional(),
    is_document_complete: Joi.boolean().optional(),
    superior_id: Joi.number().optional(),
    remark: Joi.string().optional(),
    photo: Joi.string().optional(),  
    last_login_date: Joi.date().optional(),
    last_login_ip: Joi.string().optional(),
    created_by: Joi.number().required(),
};

export const schemaUpdate = {
    title: Joi.string().optional(),
    surname: Joi.string().required(),
    other_name: Joi.string().optional(),
    gender: Joi.string().optional(),
    birth_date: Joi.date().optional(),
    marital_status: Joi.string().optional(),
    phone_office: Joi.string().optional(),
    phone_personal: Joi.string().optional(),
    address: Joi.string().optional(),
    country_iso2: Joi.string().optional(),
    email: Joi.string().optional(),
    password: Joi.string().optional(),
    otp: Joi.string().optional(),
    otp_count: Joi.number().optional(),
    kin: Joi.string().optional(),
    kin_phone: Joi.string().optional(),
    kin_address: Joi.string().optional(),
    job_responsibility: Joi.string().optional(),
    job_title: Joi.string().optional(),
    highest_qualification: Joi.string().optional(),
    highest_institution: Joi.string().optional(),
    employment_status: Joi.string().optional(),
    employment_date: Joi.date().optional(),
    monthly_tax: Joi.number().optional(),
    monthly_salary: Joi.number().optional(),
    bank_id: Joi.number().optional(),
    bank_account_number: Joi.string().optional(),
    bank_account_name: Joi.string().optional(),
    is_salary_payable: Joi.boolean().optional(),
    is_document_complete: Joi.boolean().optional(),
    superior_id: Joi.number().optional(),
    remark: Joi.string().optional(),
    photo: Joi.string().optional(),  
    last_login_date: Joi.date().optional(),
    last_login_ip: Joi.string().optional(),
    updated_by: Joi.number().required(),
};

export const schema = {
    id: { type: Sequelize.INTEGER(11), primaryKey: true, autoIncrement: true },
    title: { type: Sequelize.STRING },
    surname: { type: Sequelize.STRING, notEmpty: true },
    other_name: { type: Sequelize.STRING, notEmpty: true },
    gender: {
        type: Sequelize.ENUM(GENDER.MALE, GENDER.FEMALE),
        allowNull: false,
    },
    birth_date: { type: Sequelize.DATEONLY, allowNull: false },
    marital_status: {
        type: Sequelize.ENUM(Object.values(MARITAL_STATUS)),
        allowNull: false,
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
        type: Sequelize.ENUM(Object.values(EMPLOYMENT_STATUS)),
        allowNull: false,
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
    updated_by: { type: Sequelize.INTEGER(11) },
};


const options = {
    timestamps: true,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
};
const Admin = sequelize.define("admin", schema, options);
sequelize.sync()
    .then(() => Admin.sync({ force }).then(() => Admin.bulkCreate(table)));
    
export default Admin;