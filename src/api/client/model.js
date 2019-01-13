/**
 * @author 4Dcoder
 * @property {Number} id Client primaryKey
 * @property {String} client type "INDIVIDUAL", "ORGANIZATION"
 * @property {String} title
 * @property {String} surname Client surname (required)
 * @property {String} other_name Client other name (required)
 * @property {String} gender Client gender (required)
 * @property {Date} birth_date Client date of birth
 * @property {String} phone Client phone number (required)
 * @property {String} email Client email address
 * @property {String} password Client password for accessing the App
 * @property {String} otp Client one-time-password for accessing the App
 * @property {Number} otp_count Number of times OTP has been used without successful transaction
 * @property {String} contact_person Client next-of-kin, or contact person
 * @property {String} contact_person_phone Client next-of-kin, or contact person phone
 * @property {String} product Client products of services of interest
 * @property {String} photo Client photo url
 * @property {String} address Client residential or work address
 * @property {String} country_iso2 Client country of residence (required)
 * @property {Boolean} is_pmt_client assert that client is also a PMT client
 * @property {Boolean} is_pesl_client assert that client is also a PESL client
 * @property {Boolean} is_pet_client assert that client is also a PET client
 * @property {Boolean} is_shop_client assert that client is also a SHOP client
 * @property {Boolean} is_tenant assert if client is a depot tenant
 * @property {Boolean} is_phone_verified phone verification status
 * @property {Boolean} is_email_verified email verification status
 * @property {String} remark comment about client
 * @property {Number} created_by (required) id of the staff who created the record
 * @property {Number} updated_by id of the staff who created the record
 * @description Records of all company clients.
 */
import Joi from "joi";
import * as Sequelize from "sequelize";
import sequelize from "../../config/sequelize";
import { DATABASE, GENDER, CUSTOMER_TYPE } from "../../constants";
import table from "./table";

const force = DATABASE.DROP_TABLE_IF_EXIST.FALSE;

export const schemaLogin = {
    email: Joi.string().optional(),
    phone: Joi.string().optional(),
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
    client_type: Joi.string().trim().required(),
    title: Joi.string().optional(),
    surname: Joi.string().required(),
    other_name: Joi.string().required(),
    gender: Joi.string().required(),
    birth_date: Joi.date().optional(),
    phone: Joi.string().required(),
    email: Joi.string().optional(),
    password: Joi.string().optional(),
    otp: Joi.string().optional(),
    otp_count: Joi.number().optional(),
    contact_person: Joi.string().required(),
    contact_person_phone: Joi.string().required(),
    product: Joi.string().optional(),
    photo: Joi.string().optional(),
    address: Joi.string().optional(),
    country_iso2: Joi.string().trim().required(),
    is_pmt_client: Joi.boolean().optional(),
    is_pesl_client: Joi.boolean().optional(),
    is_pet_client: Joi.boolean().optional(),
    is_shop_client: Joi.boolean().optional(),
    is_tenant: Joi.boolean().optional(),
    is_phone_verified: Joi.boolean().optional(),
    is_email_verified: Joi.boolean().optional(),
    remark: Joi.string().optional(),
    created_by: Joi.number().required(),
};

export const schemaUpdate = {
    client_type: Joi.string().trim().optional(),
    title: Joi.string().optional(),
    surname: Joi.string().optional(),
    other_name: Joi.string().optional(),
    gender: Joi.string().optional(),
    birth_date: Joi.date().optional(),
    phone: Joi.string().optional(),
    email: Joi.string().optional(),
    password: Joi.string().optional(),
    otp: Joi.string().optional(),
    otp_count: Joi.number().optional(),
    contact_person: Joi.string().optional(),
    contact_person_phone: Joi.string().optional(),
    product: Joi.string().optional(),
    photo: Joi.string().optional(),
    address: Joi.string().optional(),
    country_iso2: Joi.string().trim().optional(),
    is_pmt_client: Joi.boolean().optional(),
    is_pesl_client: Joi.boolean().optional(),
    is_pet_client: Joi.boolean().optional(),
    is_shop_client: Joi.boolean().optional(),
    is_tenant: Joi.boolean().optional(),
    is_phone_verified: Joi.boolean().optional(),
    is_email_verified: Joi.boolean().optional(),
    remark: Joi.string().optional(),
    updated_by: Joi.number().required(),
};

export const schema = {
    id: { type: Sequelize.INTEGER(11), primaryKey: true, autoIncrement: true },
    client_type: {
        type: Sequelize.ENUM(CUSTOMER_TYPE.INDIVIDUAL, CUSTOMER_TYPE.ORGANIZATION),
        defaultValue: CUSTOMER_TYPE.INDIVIDUAL,
        allowNull: false,
    },
    title: { type: Sequelize.STRING },
    surname: { type: Sequelize.STRING, allowNull: false },
    other_name: { type: Sequelize.STRING, allowNull: false },
    gender: {
        type: Sequelize.ENUM(GENDER.MALE, GENDER.FEMALE),
        allowNull: false,
    },
    birth_date: { type: Sequelize.DATEONLY },
    phone: { type: Sequelize.STRING, allowNull: false },
    email: { type: Sequelize.STRING },
    password: { type: Sequelize.STRING },
    otp: { type: Sequelize.STRING },
    otp_count: { type: Sequelize.INTEGER(11), allowNull: false, defaultValue: 0 },
    contact_person: { type: Sequelize.STRING, allowNull: false },
    contact_person_phone: { type: Sequelize.STRING, allowNull: false },
    product: { type: Sequelize.STRING },
    photo: { type: Sequelize.STRING },
    address: { type: Sequelize.STRING },
    country_iso2: { type: Sequelize.STRING(2), allowNull: false },
    is_pmt_client: { type: Sequelize.BOOLEAN, defaultValue: false },
    is_pesl_client: { type: Sequelize.BOOLEAN, defaultValue: false },
    is_pet_client: { type: Sequelize.BOOLEAN, defaultValue: false },
    is_shop_client: { type: Sequelize.BOOLEAN, defaultValue: false },
    is_tenant: { type: Sequelize.BOOLEAN, defaultValue: false },
    is_phone_verified: { type: Sequelize.BOOLEAN, defaultValue: false },
    is_email_verified: { type: Sequelize.BOOLEAN, defaultValue: false },
    remark: { type: Sequelize.STRING },
    created_by: { type: Sequelize.INTEGER(11), allowNull: false },
    updated_by: { type: Sequelize.INTEGER(11) },
};

const options = {
    timestamps: true,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
};
const Client = sequelize.define("client", schema, options);
sequelize.sync()
    .then(() => Client.sync({ force }).then(() => Client.bulkCreate(table)));
    
export default Client;