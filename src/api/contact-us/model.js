/**
 * @author 4Dcoder
 * @property {Number} id contact_us primaryKey
 * @property {String} fullname ContactUs fullname (required)
 * @property {String} email ContactUs email (required)
 * @property {String} phone ContactUs phone (required)
 * @property {String} subject ContactUs subject (required)
 * @property {String} message ContactUs message (required)
 * @property {String} request_type ContactUs request_type with values
 * "COMPLAINT", "ENQUIRY", "SUGGESTION", (required)
 * @property {String} request_status ContactUs request_status with values
 *  "PENDING", "ACTIVE", "CLOSED" (prohibited)
 * @property {String} remark ContactUs remark (prohibited)
 * @property {Boolean} has_ticket ContactUs has_ticket (prohibited)
 * @description ContactUs model holds record of all contact_us info from site visitors
 */
import Joi from "joi";
import * as Sequelize from "sequelize";
import sequelize from "../../config/sequelize";
import { DATABASE } from "../../constants";
import table from "./table";

const force = DATABASE.DROP_TABLE_IF_EXIST.FALSE;

export const schemaFetch = {
    id: Joi.number().optional(),
    offset: Joi.number().optional(),
    limit: Joi.number().optional(),
    fields: Joi.string().optional(),
};

export const schemaCreate = {
    fullname: Joi.string().required(),
    email: Joi.string().trim().required(),
    phone: Joi.string().trim().required(),
    subject: Joi.string().required(),
    message: Joi.string().required(),
    request_type: Joi.string().trim().valid("COMPLAINT", "ENQUIRY", "SUGGESTION").required(),
};

export const schemaUpdate = {
    request_type: Joi.string().trim().valid("COMPLAINT", "ENQUIRY", "SUGGESTION").optional(),
    request_status: Joi.string().trim().valid("ACTIVE", "CLOSED").optional(),
    remark: Joi.string(),
    has_ticket: Joi.boolean(),
    updated_by: Joi.number().required(),
};

const schema = {
    id: { type: Sequelize.INTEGER(11), primaryKey: true, autoIncrement: true },
    fullname: { type: Sequelize.STRING, allowNull: false },
    email: { type: Sequelize.STRING, allowNull: false },
    phone: { type: Sequelize.STRING, allowNull: false },
    subject: { type: Sequelize.STRING, allowNull: false },
    message: { type: Sequelize.STRING, allowNull: false },
    request_type: { type: Sequelize.ENUM("COMPLAINT", "ENQUIRY", "SUGGESTION"), allowNull: false },
    request_status: {
        type: Sequelize.ENUM("PENDING", "ACTIVE", "CLOSED"),
        defaultValue: "PENDING",
        allowNull: false,
    },
    remark: { type: Sequelize.STRING },
    has_ticket: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false },
    updated_by: { type: Sequelize.INTEGER(11) },
};


const options = {
    timestamps: true,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
};
const ContactUs = sequelize.define("contact_us", schema, options);
sequelize.sync()
    .then(() => ContactUs.sync({ force }).then(() => ContactUs.bulkCreate(table)));
    
export default ContactUs;
