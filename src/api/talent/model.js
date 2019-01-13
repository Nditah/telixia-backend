/**
 * @author 4Dcoder
 * @property {Number} id Talent primaryKey
 * @property {String} talent type "INDIVIDUAL", "ORGANIZATION"
 * @property {String} title
 * @property {String} surname Talent surname (required)
 * @property {String} other_name Talent other name (required)
 * @property {String} gender Talent gender (required)
 * @property {Date} birth_date Talent date of birth
 * @property {String} phone Talent phone number (required)
 * @property {String} email Talent email address
 * @property {String} password Talent password for accessing the App
 * @property {String} otp Talent one-time-password for accessing the App
 * @property {Number} otp_count Number of times OTP has been used without successful transaction
 * @property {String} contact_person Talent next-of-kin, or contact person
 * @property {String} contact_person_phone Talent next-of-kin, or contact person phone
 * @property {String} product Talent products of services of interest
 * @property {String} photo Talent photo url
 * @property {String} address Talent residential or work address
 * @property {String} country_iso2 Talent country of residence (required)
 * @property {Boolean} is_pmt_talent assert that talent is also a PMT talent
 * @property {Boolean} is_pesl_talent assert that talent is also a PESL talent
 * @property {Boolean} is_pet_talent assert that talent is also a PET talent
 * @property {Boolean} is_shop_talent assert that talent is also a SHOP talent
 * @property {Boolean} is_tenant assert if talent is a depot tenant
 * @property {Boolean} is_phone_verified phone verification status
 * @property {Boolean} is_email_verified email verification status
 * @property {String} remark comment about talent
 * @property {Number} created_by (required) id of the staff who created the record
 * @property {Number} updated_by id of the staff who created the record
 * @description Records of all company talents.
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
    talent_type: Joi.string().trim().required(),
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
    is_pmt_talent: Joi.boolean().optional(),
    is_pesl_talent: Joi.boolean().optional(),
    is_pet_talent: Joi.boolean().optional(),
    is_shop_talent: Joi.boolean().optional(),
    is_tenant: Joi.boolean().optional(),
    is_phone_verified: Joi.boolean().optional(),
    is_email_verified: Joi.boolean().optional(),
    remark: Joi.string().optional(),
    created_by: Joi.number().required(),
};

export const schemaUpdate = {
    talent_type: Joi.string().trim().optional(),
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
    is_pmt_talent: Joi.boolean().optional(),
    is_pesl_talent: Joi.boolean().optional(),
    is_pet_talent: Joi.boolean().optional(),
    is_shop_talent: Joi.boolean().optional(),
    is_tenant: Joi.boolean().optional(),
    is_phone_verified: Joi.boolean().optional(),
    is_email_verified: Joi.boolean().optional(),
    remark: Joi.string().optional(),
    updated_by: Joi.number().required(),
};

export const schema = {
    id: { type: Sequelize.INTEGER(11), primaryKey: true, autoIncrement: true },
    talent_type: {
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
    is_pmt_talent: { type: Sequelize.BOOLEAN, defaultValue: false },
    is_pesl_talent: { type: Sequelize.BOOLEAN, defaultValue: false },
    is_pet_talent: { type: Sequelize.BOOLEAN, defaultValue: false },
    is_shop_talent: { type: Sequelize.BOOLEAN, defaultValue: false },
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
const Talent = sequelize.define("talent", schema, options);
sequelize.sync()
    .then(() => Talent.sync({ force }).then(() => Talent.bulkCreate(table)));
    
export default Talent;