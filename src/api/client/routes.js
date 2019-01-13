/**
 * @author 4Decoder
 * @description Client holds record of all clients with terminals
 */
import express from "express";
import { checkAuth, isValidStaff } from "../../middleware/authorization";
import { fetchRecord, createRecord, updateRecord, deleteRecord, login } from "./controller";

const router = express.Router();

/**
 * @api {get} /api/clients?id={recordId} Retrieve one or all records
 * @apiName RetrieveClient
 * @apiGroup Client
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i http://localhost/api/clients?id=2&fields=id,created_at,updated_at
 * @apiExample {curl} Example usage for retieving multiple records:
 *      curl -i http://localhost/api/clients?offset=10&limit=50
 * @apiParam {Number} id Unique id of the record to retrieve (optional)
 * @apiParam {Number} offset Number of records to skip (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} fields Comma-separated list of record's attributes to retrieve (optional)
 * @apiDescription Records of consolidated list of clients from PMT, PML, PET, Shop etc
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/clients", [checkAuth, isValidStaff], fetchRecord);

/**
 * @api {post} /api/clients Create clients
 * @apiName CreateClient
 * @apiGroup Client
 * @apiParam {String} access_token master access token.
 * @apiParam {Number} id Client primaryKey
 * @apiParam {String} client type "INDIVIDUAL", "ORGANIZATION"
 * @apiParam {String} title
 * @apiParam {String} surname Client surname (required)
 * @apiParam {String} other_name Client other name (required)
 * @apiParam {String} gender Client gender (required)
 * @apiParam {Date} birth_date Client date of birth
 * @apiParam {String} phone Client phone number (required)
 * @apiParam {String} phone2 Client mobile work or home phone number
 * @apiParam {String} email Client email address
 * @apiParam {String} password Client password for accessing the App
 * @apiParam {String} contact_person Client next-of-kin, or contact person
 * @apiParam {String} contact_person_phone Client next-of-kin, or contact person phone
 * @apiParam {String} product Client products of services of interest
 * @apiParam {String} photo Client photo url
 * @apiParam {String} address Client residential or work address
 * @apiParam {String} country_iso2 Client country of residence (required)
 * @apiParam {Boolean} is_pmt_client assert that client is also a PMT client
 * @apiParam {Boolean} is_pesl_client assert that client is also a PESL client
 * @apiParam {Boolean} is_pet_client assert that client is also a PET client
 * @apiParam {Boolean} is_shop_client assert that client is also a SHOP client
 * @apiParam {Boolean} is_tenant assert if client is a depot tenant
 * @apiParam {Boolean} is_phone_verified phone verification status
 * @apiParam {Boolean} is_email_verified email verification status
 * @apiParam {String} remark comment about client
 * @apiParam {Number} created_by (required) id of the staff who created the record
 * @apiParam {Number} updated_by id of the staff who created the record
 * @apiSuccess {Object} Client Client's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Client not found.
 * @apiError 401 master access only.
 */
router.post("/clients", createRecord);

/**
 * @api {put} /api/clients/{recordId} Update clients
 * @apiName UpdateClient
 * @apiGroup Client
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam {String} access_token master access token.
 * @apiParam {Number} id Client primaryKey
 * @apiParam {String} client type "INDIVIDUAL", "ORGANIZATION"
 * @apiParam {String} title
 * @apiParam {String} surname Client surname (required)
 * @apiParam {String} other_name Client other name (required)
 * @apiParam {String} gender Client gender (required)
 * @apiParam {Date} birth_date Client date of birth
 * @apiParam {String} phone Client phone number (required)
 * @apiParam {String} phone2 Client mobile work or home phone number
 * @apiParam {String} email Client email address
 * @apiParam {String} password Client password for accessing the App
 * @apiParam {String} contact_person Client next-of-kin, or contact person
 * @apiParam {String} contact_person_phone Client next-of-kin, or contact person phone
 * @apiParam {String} product Client products of services of interest
 * @apiParam {String} photo Client photo url
 * @apiParam {String} address Client residential or work address
 * @apiParam {String} country_iso2 Client country of residence (required)
 * @apiParam {Boolean} is_pmt_client assert that client is also a PMT client
 * @apiParam {Boolean} is_pesl_client assert that client is also a PESL client
 * @apiParam {Boolean} is_pet_client assert that client is also a PET client
 * @apiParam {Boolean} is_shop_client assert that client is also a SHOP client
 * @apiParam {Boolean} is_tenant assert if client is a depot tenant
 * @apiParam {Boolean} is_phone_verified phone verification status
 * @apiParam {Boolean} is_email_verified email verification status
 * @apiParam {String} remark comment about client
 * @apiParam {Number} created_by (required) id of the staff who created the record
 * @apiParam {Number} updated_by id of the staff who created the record
 * @apiSuccess {Object} Client Client's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Client not found.
 * @apiError 401 master access only.
 */
router.put("/clients/:recordId", [checkAuth], updateRecord);

/**
 * @api {delete} /api/clients/{recordId} Delete clients
 * @apiName DeleteClient
 * @apiGroup Client
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Client not found.
 * @apiError 401 master access only.
 */
router.delete("/clients/:recordId", [checkAuth, isValidStaff], deleteRecord);

/**
 * @api {post} /api/clients/login Login Client
 * @apiName LoginClient
 * @apiGroup Client
 * @apiPermission master
 * @apiParam {String} email Client email address (optional)
 * @apiParam {String} password Client password (optional)
 * @apiParam {String} phone Client mobile phone number (optional)
 * @apiParam {String} otp Client One-Time-Password sent to phone (optional)
 * @apiSuccess (Success 200) 200 Login Successful.
 * @apiError 404 Client not found.
 */
router.post("/clients/login", login);

export default router;
