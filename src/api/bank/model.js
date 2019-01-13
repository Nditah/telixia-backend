/**
 * @author 4Dcoder
 * @property {Number} id bank primaryKey
 * @property {String} name Bank full name (required)
 * @property {String} sort_code Bank sort_code (required)
 * @property {String} bank_code Bank bank_code (required)
 * @property {String} country_iso2 Bank country_iso2 (optional)
 * @property {String} contact_person Bank contact_person (optional)
 * @property {String} website Bank website (optional)
 * @description Bank model holds record of all banks the company deals with
 */
import Joi from "joi";
import * as Sequelize from "sequelize";
import sequelize from "../../config/sequelize";
import table from "./table";
import { DATABASE } from "../../constants";

const force = DATABASE.DROP_TABLE_IF_EXIST.FALSE;

export const schemaFetch = {
    id: Joi.number().optional(),
    offset: Joi.number().optional(),
    limit: Joi.number().optional(),
    fields: Joi.string().optional(),
};

export const schemaCreate = {
    name: Joi.string().trim().required(),
    sort_code: Joi.string().trim().required(),
    bank_code: Joi.string().required(),
    country_iso2: Joi.string().optional(),
    contact_person: Joi.string().optional(),
    website: Joi.string().optional(),
    created_by: Joi.number().required(),
};

export const schemaUpdate = {
    name: Joi.string().trim().optional(),
    sort_code: Joi.string().trim().optional(),
    bank_code: Joi.string().optional(),
    country_iso2: Joi.string().optional(),
    contact_person: Joi.string().optional(),
    website: Joi.string().optional(),
    updated_by: Joi.number().required(),
};

export const schema = {
    id: { type: Sequelize.INTEGER(11), primaryKey: true, autoIncrement: true },
    name: { type: Sequelize.STRING, allowNull: false },
    sort_code: { type: Sequelize.STRING(11), allowNull: false },
    bank_code: { type: Sequelize.INTEGER(11), allowNull: false },
    country_iso2: { type: Sequelize.STRING(2), allowNull: false, defaultValue: "ng" },
    contact_person: { type: Sequelize.STRING },
    website: { type: Sequelize.STRING },
    created_by: { type: Sequelize.INTEGER(11), allowNull: false },
    updated_by: { type: Sequelize.INTEGER(11) },
};

const options = {
    timestamps: true,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
};
const Bank = sequelize.define("bank", schema, options);
sequelize.sync()
    .then(() => Bank.sync({ force }).then(() => Bank.bulkCreate(table)));
    
export default Bank;
