/**
 * @author 4Decoder
 * @property {Number} id Image primaryKey
 * @property {String} name Image name
 * @property {String} url The Image url absolute-path
 * @property {Number} created_by Image record created by
 * @property {Number} updated_by Image record modified by
 * @description Image holds record of all image assets
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
    url: Joi.string().trim().required(),
    // image: Joi.any().meta({ swaggerType: "file" }).required(),
    created_by: Joi.number().required(),
};

export const schemaUpdate = {
    name: Joi.string().trim().required(),
    url: Joi.string().trim().required(),
    updated_by: Joi.number().required(),
};

const schema = {
    id: { type: Sequelize.INTEGER(11), primaryKey: true, autoIncrement: true },
    name: { type: Sequelize.STRING, allowNull: false },
    url: { type: Sequelize.STRING, allowNull: false },
    created_by: { type: Sequelize.INTEGER(11), allowNull: false },
    updated_by: { type: Sequelize.INTEGER(11) },
};


const options = {
    timestamps: true,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
};
const Image = sequelize.define("image", schema, options);
sequelize.sync()
    .then(() => Image.sync({ force }).then(() => Image.bulkCreate(table)));
    
export default Image;