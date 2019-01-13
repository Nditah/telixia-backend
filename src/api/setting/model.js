/**
 * @author 4Decoder
 * @property {Number} id Setting primaryKey
 * @property {String} name Setting varaible name
 * @property {String} category Setting category of domains affected
 * @property {String} value Setting value value
 * @property {String} description Setting description
 * @description Setting holds record of all cities with terminals
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
    value: Joi.string().trim().required(),
    category: Joi.string().optional(),
    description: Joi.string().required(),
};

export const schemaUpdate = {
    name: Joi.string().trim().optional(),
    value: Joi.string().trim().optional(),
    category: Joi.string().optional(),
    description: Joi.string().optional(),
    updated_by: Joi.number().required(),
};

const schema = {
    id: { type: Sequelize.INTEGER(11), primaryKey: true, autoIncrement: true },
    name: { type: Sequelize.STRING, allowNull: false },
    value: { type: Sequelize.STRING, allowNull: false },
    category: { type: Sequelize.STRING },
    description: { type: Sequelize.STRING, allowNull: false },
    updated_by: { type: Sequelize.INTEGER(11) },
};


const options = {
    timestamps: true,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
};
const Setting = sequelize.define("setting", schema, options);
sequelize.sync()
    .then(() => Setting.sync({ force }).then(() => Setting.bulkCreate(table)));
    
export default Setting;