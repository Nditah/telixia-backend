/**
 * @author 4Dcoder
 * @property {Number} id Invoice primaryKey
 * @property {String} label Invoice label
 * @description Invoice model holds record of all Inventories except vehicles
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
    label: Joi.string().optional(),
    serial: Joi.string().optional(),
    remark: Joi.string().optional(),
    created_by: Joi.number().required(),
};

export const schemaUpdate = {
    label: Joi.string().optional(),
    serial: Joi.string().optional(),
    remark: Joi.string().optional(),
    updated_by: Joi.number().required(),
};

export const schema = {
    id: { type: Sequelize.INTEGER(11), primaryKey: true, autoIncrement: true },
    transaction_code: { type: Sequelize.STRING, comment: "txref" },
    customer_id: { type: Sequelize.STRING },
    amount: { type: Sequelize.DECIMAL(10, 2), allowNull: false },
    currency: { type: Sequelize.STRING, allowNull: false, defaultValue: "NGN" },
    transaction_status: { type: Sequelize.ENUM("PENDING", "SUCCESSFUL", "FAILED"), defaultValue: "PENDING" },
    description: { type: Sequelize.STRING },
    created_by: { type: Sequelize.INTEGER(11), allowNull: false, defaultValue: 1 },
    updated_by: { type: Sequelize.INTEGER(11) },
};

const options = {
    timestamps: true,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
};
const Transaction = sequelize.define("invoice", schema, options);
sequelize.sync()
    .then(() => Transaction.sync({ force }).then(() => Transaction.bulkCreate(table)));
    
export default Transaction;