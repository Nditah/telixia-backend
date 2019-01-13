/**
 * @author 4Decoder
 * @property {Number} id Country primaryKey
 * @property {String} name Country name
 * @property {String} iso2 Country iso where the state is located
 * @property {String} iso3 Country iso3 (required)
 * @property {String} callingCodes Country callingCodes (required)
 * @property {String} currencies Country currencies (required)
 * @property {String} ioc Country ioc (required)
 * @property {String} languages Country languages (required)
 * @property {String} status Country status (required)
 * @property {Number} created_by Country record created by
 * @property {Number} updated_by Country record modified by
 * @description Country holds record of all cities with terminal_list
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
    name: Joi.string().trim().required(),
    iso2: Joi.string().trim().required(),
    iso3: Joi.string().trim().required(),
    callingCodes: Joi.string().required(),
    currencies: Joi.string().required(),
    ioc: Joi.string().trim().required(),
    languages: Joi.string().required(),
    status: Joi.string().trim().required(),
    created_by: Joi.number().required(),
};

export const schemaUpdate = {
    name: Joi.string().trim().optional(),
    iso2: Joi.string().trim().optional(),
    iso3: Joi.string().trim().optional(),
    callingCodes: Joi.string().optional(),
    currencies: Joi.string().optional(),
    ioc: Joi.string().trim().optional(),
    languages: Joi.string().optional(),
    status: Joi.string().trim().optional(),
    updated_by: Joi.number().required(),
};

export const schema = {
    id: { type: Sequelize.INTEGER(11), primaryKey: true, autoIncrement: true },
    name: { type: Sequelize.STRING },
    iso2: { type: Sequelize.STRING },
    iso3: { type: Sequelize.STRING },
    callingCodes: { type: Sequelize.STRING },
    currencies: { type: Sequelize.STRING },
    ioc: { type: Sequelize.STRING },
    languages: { type: Sequelize.STRING },
    status: { type: Sequelize.STRING },
    created_by: { type: Sequelize.INTEGER(11), defaultValue: 1 },
    updated_by: { type: Sequelize.INTEGER(11) },
};

const options = {
    timestamps: true,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
};
const Country = sequelize.define("country", schema, options);
sequelize.sync()
    .then(() => Country.sync({ force }).then(() => Country.bulkCreate(table)));
    
export default Country;
