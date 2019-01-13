/**
 * @author 4Decoder
 * @description Invoice holds record of all Account Headings
 */
import Joi from "joi";
import log4js from "log4js";
import Invoice, { schema, schemaFetch, schemaCreate, schemaUpdate } from "./model";
import { success, fail, notFound } from "../../lib/response";
import { STATUS_MSG, FLUTTERWAVE } from "../../constants";

// Logging
const logger = log4js.getLogger("[invoice]");
log4js.configure({
    appenders: { file: { type: "file", filename: "logs/invoice.log" } },
    categories: { default: { appenders: ["file"], level: "debug" } },
});

/**
 * @description fetchRecord() Retrieve  all record(s)
 * @param {Object} req http request object
 * @param {Object} res http request object returns
 */
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
                result = await Invoice.findOne({ where: { id }, attributes });
            } else {
                result = await Invoice.findOne({ where: { id } });
            }
        } else {
            result = await Invoice.findAll(options);
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

export async function createRecord(req, res) {
    const data = req.body;
    const { error } = Joi.validate(data, schemaCreate);
    if (error) return fail(res, 422, `Error validating request data. ${error.message}`);
    try {
        const result = await Invoice.create(data);
        if (!result) {
            logger.info(STATUS_MSG.SUCCESS.DEFAULT, []);
            return notFound(res, "Error: Bad Request: Model not found");
        }
        return success(res, 201, result, "Record created successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error creating record. ${err.message}`);
    }
}

export async function updateRecord(req, res) {
    const data = req.body;
    const { recordId: id } = req.params;
    const { error } = Joi.validate(data, schemaUpdate);
    if (error) return fail(res, 422, `Error validating request data. ${error.message}`);
    try {
        const model = await Invoice.findByPk(id);
        // const model = await Invoice.findOne({ where: { id } });
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
        const model = await Invoice.findByPk(id);
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


export async function flutterwaveWebhook(req, res) {
    // retrieve the signature from the header
    const hash = req.headers["verif-hash"];
    
    // discard the request, only a post with rave signature header gets our attention
    if (!hash) return fail(res, 422, `Error validating request header. ${hash}`); 
  
    // Get signature stored as env variable on your server
    const secret_hash = FLUTTERWAVE.HASH;
  
  // check if signatures match
  if(hash !== secret_hash) {
    logger.error(`Error invalid transaction signature. ${hash}`, []);
    return fail(res, 422, `Error invalid transaction signature. ${hash}`); 
  }
  
  // Retrieve the request's body
  const request_json = JSON.parse(req.body);
    logger.info(STATUS_MSG.SUCCESS.DEFAULT, []);

    // Give value to your customer but don't give any output
    // Remember that this is a call from rave's servers and 
    // Your customer is not seeing the response here at all
    return success(res, 200, result, "Transaction was successful!");
    // Update Invoice if it exist or create an invoice with status of "success"
}
