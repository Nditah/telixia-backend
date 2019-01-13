/**
 * @author 4Decoder
 * @description Talent holds record of all talents with terminals
 */
import express from "express";
import { checkAuth, isValidAdmin } from "../../middleware/authorization";
import { fetchRecord, createRecord, updateRecord, deleteRecord, login } from "./controller";

const router = express.Router();

/**
 * @api {get} /api/talents?id={recordId} Retrieve one or all records
 * @apiName RetrieveTalent
 * @apiGroup Talent
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i http://localhost/api/talents?id=2&fields=id,created_at,updated_at
 * @apiExample {curl} Example usage for retieving multiple records:
 *      curl -i http://localhost/api/talents?offset=10&limit=50
 * @apiParam {Number} id Unique id of the record to retrieve (optional)
 * @apiParam {Number} offset Number of records to skip (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} fields Comma-separated list of record's attributes to retrieve (optional)
 * @apiDescription Records of consolidated list of talents from PMT, PML, PET, Shop etc
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/talents", [checkAuth, isValidAdmin], fetchRecord);

/**
 * @api {post} /api/talents Create talents
 * @apiName CreateTalent
 * @apiGroup Talent
 * @apiParam {String} access_token master access token.
 * @apiParam {Number} id Talent primaryKey
 * @apiParam {String} talent type "INDIVIDUAL", "ORGANIZATION"
 * @apiParam {String} title
 * @apiParam {String} surname Talent surname (required)
 * @apiParam {String} other_name Talent other name (required)
 * @apiParam {String} gender Talent gender (required)
 * @apiParam {Date} birth_date Talent date of birth
 * @apiParam {String} phone Talent phone number (required)
 * @apiParam {String} phone2 Talent mobile work or home phone number
 * @apiParam {String} email Talent email address
 * @apiParam {String} password Talent password for accessing the App
 * @apiParam {String} contact_person Talent next-of-kin, or contact person
 * @apiParam {String} contact_person_phone Talent next-of-kin, or contact person phone
 * @apiParam {String} product Talent products of services of interest
 * @apiParam {String} photo Talent photo url
 * @apiParam {String} address Talent residential or work address
 * @apiParam {String} country_iso2 Talent country of residence (required)
 * @apiParam {String} packages Talent programs of interest
 * @apiParam {Boolean} is_phone_verified phone verification status
 * @apiParam {Boolean} is_email_verified email verification status
 * @apiParam {String} remark comment about talent
 * @apiParam {Number} created_by (required) id of the staff who created the record
 * @apiParam {Number} updated_by id of the staff who created the record
 * @apiSuccess {Object} Talent Talent's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Talent not found.
 * @apiError 401 master access only.
 */
router.post("/talents", createRecord);

/**
 * @api {put} /api/talents/{recordId} Update talents
 * @apiName UpdateTalent
 * @apiGroup Talent
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam {String} access_token master access token.
 * @apiParam {Number} id Talent primaryKey
 * @apiParam {String} talent type "INDIVIDUAL", "ORGANIZATION"
 * @apiParam {String} title
 * @apiParam {String} surname Talent surname (required)
 * @apiParam {String} other_name Talent other name (required)
 * @apiParam {String} gender Talent gender (required)
 * @apiParam {Date} birth_date Talent date of birth
 * @apiParam {String} phone Talent phone number (required)
 * @apiParam {String} phone2 Talent mobile work or home phone number
 * @apiParam {String} email Talent email address
 * @apiParam {String} password Talent password for accessing the App
 * @apiParam {String} contact_person Talent next-of-kin, or contact person
 * @apiParam {String} contact_person_phone Talent next-of-kin, or contact person phone
 * @apiParam {String} product Talent products of services of interest
 * @apiParam {String} photo Talent photo url
 * @apiParam {String} address Talent residential or work address
 * @apiParam {String} country_iso2 Talent country of residence (required)
 * @apiParam {String} packages Talent programs of interest
 * @apiParam {Boolean} is_phone_verified phone verification status
 * @apiParam {Boolean} is_email_verified email verification status
 * @apiParam {String} remark comment about talent
 * @apiParam {Number} created_by (required) id of the staff who created the record
 * @apiParam {Number} updated_by id of the staff who created the record
 * @apiSuccess {Object} Talent Talent's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Talent not found.
 * @apiError 401 master access only.
 */
router.put("/talents/:recordId", [checkAuth], updateRecord);

/**
 * @api {delete} /api/talents/{recordId} Delete talents
 * @apiName DeleteTalent
 * @apiGroup Talent
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Talent not found.
 * @apiError 401 master access only.
 */
router.delete("/talents/:recordId", [checkAuth, isValidAdmin], deleteRecord);

/**
 * @api {post} /api/talents/login Login Talent
 * @apiName LoginTalent
 * @apiGroup Talent
 * @apiPermission master
 * @apiParam {String} email Talent email address (optional)
 * @apiParam {String} password Talent password (optional)
 * @apiParam {String} phone Talent mobile phone number (optional)
 * @apiParam {String} otp Talent One-Time-Password sent to phone (optional)
 * @apiSuccess (Success 200) 200 Login Successful.
 * @apiError 404 Talent not found.
 */
router.post("/talents/login", login);

export default router;
