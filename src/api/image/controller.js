import Joi from "joi";
import log4js from "log4js";
import aws from "aws-sdk";
import multer from "multer";
import multerS3 from "multer-s3";
import appRoot from "app-root-path";
import dotenv from "dotenv";
import Image, { schemaFetch, schemaCreate, schemaUpdate } from "./model";
import { success, fail, notFound } from "../../lib/response";
import { STATUS_MSG } from "../../constants";

dotenv.config();

aws.config.update({
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    accessKeyId: process.env.ACCESS_KEY_ID,
    region: "eu-west-2",
});

const s3 = new aws.S3();

// Logging
const logger = log4js.getLogger("[image]");
log4js.configure({
    appenders: { file: { type: "file", filename: "logs/image.log" } },
    categories: { default: { appenders: ["file"], level: "debug" } },
});

let imageUrl;

const storedLocally = multer.diskStorage({
    destination(req, file, callback) {
        callback(null, `${appRoot}/src/upload/Images`);
    },
    filename(req, file, callback) {
        imageUrl = `${file.fieldname}_${new Date().toISOString()}_${file.originalname}`;
        callback(null, imageUrl);
    },
});

const storedOnAws = multerS3({
    s3,
    bucket: "peacebucket",
    acl: "public-read",
    metadata(req, file, callback) {
        callback(null, { fieldName: file.fieldname });
    },
    key(req, file, callback) {
        imageUrl = `${file.fieldname}_${new Date().toISOString()}_${file.originalname}`;
        callback(null, imageUrl);
    },
});

const uploadLocally = multer({ storage: storedLocally }).array("image", 3); // Field name and max count
const uploadToAws = multer({ storage: storedOnAws }).array("image", 3);

export async function createRecord(req, res) {
    return uploadLocally(req, res, async (err) => {
        if (err) return fail(res, 422, `Error uploading image. ${err.message}`);
        const { name } = req.body;
        const url = req.files[ 0 ].path;
        const data = { name, url, created_by: 1 };
        console.log(data);
        const { error } = Joi.validate(data, schemaCreate);
        if (error) return fail(res, 422, `Error validating request data. ${error.message}`);
        try {
            const result = await Image.create(data);
            if (!result) {
                logger.info(STATUS_MSG.SUCCESS.DEFAULT, []);
                return notFound(res, "Error: Bad Request: Model not found");
            }
            return success(res, 201, result, "Record created successfully!");
        } catch (errata) {
            logger.error(errata);
            return fail(res, 500, `Error creating record. ${errata.message}`);
        }
    });
}

export async function addImageAws(req, res) {
    return uploadToAws(req, res, async (err) => {
        const { name } = req.body;
        // const { error } = Joi.validate(data, schemaCreate);
        // if (error) return fail(res, 422, `Error validating request data. ${error.message}`);

        const url = req.files[ 0 ].location;
        console.log(req.body, req.files[ 0 ]);
        const data = { name, url };
        if (err) return res.end(`Error uploading image. ${err.message}`);

        try {
            const result = await Image.create(data);
            if (!result) {
                logger.info(STATUS_MSG.SUCCESS.DEFAULT, []);
                return notFound(res, "Error: Bad Request: Model not found");
            }
            return success(res, 201, result, "Record created successfully!");
        } catch (error) {
            logger.error(error);
            return fail(res, 500, `Error creating record. ${error.message}`);
        }
    });
}

// eslint-disable-next-line complexity
export async function fetchRecord(req, res) {
    const { query } = req;
    const { error } = Joi.validate(query, schemaFetch);
    if (error) return fail(res, 422, `Error validating request query. ${error.message}`);
    let { id, offset, limit, fields } = query;
    id = parseInt(id, 10);
    offset = parseInt(offset, 10);
    limit = parseInt(limit, 10);
    let fieldsArray = [];
    if (fields && typeof fields === "string") {
        fieldsArray = fields.replace(/\s+/g, "").split(",");
    }
    const eligibleField = Object.keys(schema);
    eligibleField.push("created_at", "updated_at");
    const attributes = [];
    let result;
    fieldsArray.forEach((item) => {
        if (eligibleField.includes(item)) attributes.push(item);
    });
    const options = {};
    if (attributes.length > 0) options.attributes = attributes;
    if (offset >= 0) options.offset = offset;
    if (limit > 0) options.limit = limit;
    try {
        if (id) {
            if (attributes.length > 0) {
                result = await Image.findOne({ where: { id }, attributes });
            } else {
                result = await Image.findOne({ where: { id } });
            }
        } else {
            result = await Image.findAll(options);
        }
        if (!result) {
            return notFound(res, "Error: Bad Request: Model not found");
        }
        logger.info(STATUS_MSG.SUCCESS.DEFAULT, []);
        return success(res, 201, result, null);
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error retrieving record. ${err.message}`);
    }
}

export async function updateRecord(req, res) {
    const data = req.body;
    const { recordId: id } = req.params;
    const { error } = Joi.validate(data, schemaUpdate);
    if (error) return fail(res, 422, `Error validating request data. ${error.message}`);
    try {
        const model = await Image.findByPk(id);
        if (!model) {
            return notFound(res, `Bad Request: Model not found with id ${id}`);
        }
        const result = await model.update(data);
        return success(res, 200, result, "Record updated successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error updating record. ${err.message}`);
    }
}

export async function deleteRecord(req, res) {
    const { recordId: id } = req.params;
    try {
        const model = await Image.findByPk(id);
        if (!model) {
            return notFound(res, `Bad Request: Model not found with id ${id}`);
        }
        const result = await model.destroy();
        return success(res, 200, result, "Record deleted successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error deleting record. ${err.message}`);
    }
}
