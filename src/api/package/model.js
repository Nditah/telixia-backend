/**
 * @author 4Dcoder
 * @property {Number} id package primaryKey
 * @property {String} name Package full name (required)
 * @property {String} description Package description (required)
 * @property {Number} duration Package duration (required)
 * @property {Number} cost Package cost (required)
 * @property {Boolean} is_available Package is current availability
 * @description Package model holds record of all packages the company deals with
 */
import Joi from "joi";
import * as Sequelize from "sequelize";
import sequelize from "../../config/sequelize";
import table from "./table";
import { DATABASE } from "../../constants";

const force = DATABASE.DROP_TABLE_IF_EXIST.TRUE;

export const schemaFetch = {
    id: Joi.number().optional(),
    offset: Joi.number().optional(),
    limit: Joi.number().optional(),
    fields: Joi.string().optional(),
};

export const schemaCreate = {
    name: Joi.string().required(),
    description: Joi.string().required(),
    duration: Joi.number().optional(),
    cost: Joi.number().optional(),
    is_available: Joi.boolean().optional(),
    // created_by: Joi.number().required(),
};

export const schemaUpdate = {
    name: Joi.string().optional(),
    description: Joi.string().optional(),
    duration: Joi.number().optional(),
    cost: Joi.number().optional(),
    is_available: Joi.boolean().optional(),
    // updated_by: Joi.number().required(),
};

export const schema = {
    id: { type: Sequelize.INTEGER(11), primaryKey: true, autoIncrement: true },
    name: { type: Sequelize.STRING, allowNull: false },
    description: { type: Sequelize.STRING, allowNull: false },
    duration: { type: Sequelize.TINYINT(2), comment: "Weeks", allowNull: false, defaultValue: 4 },
    cost: { type: Sequelize.DECIMAL(10, 2), allowNull: false, defaultValue: 20000.00 },
    is_available: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true },
    created_by: { type: Sequelize.INTEGER(11), allowNull: false, defaultValue: 1 },
    updated_by: { type: Sequelize.INTEGER(11), defaultValue: 1 },
};

const options = {
    timestamps: true,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
};
const Package = sequelize.define("package", schema, options);
sequelize.sync()
    .then(() => Package.sync({ force }).then(() => Package.bulkCreate(table)));
    
export default Package;
