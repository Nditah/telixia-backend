/**
 * @author 4Decoder
 * @description Staff holds record of all staff with terminals
 */
import express from "express";
import { checkAuth, isValidStaff } from "../../middleware/authorization";
import { fetchRecord, createRecord, updateRecord, deleteRecord, login } from "./controller";

const router = express.Router();

/**
 * @api {get} /api/staff?id={recordId} Retrieve one or all records
 * @apiName RetrieveStaff
 * @apiGroup Employee
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i http://localhost/api/staff?id=2&fields=id,created_at,updated_at
 * @apiExample {curl} Example usage for retieving multiple records:
 *      curl -i http://localhost/api/staff?offset=10&limit=50
 * @apiParam {Number} id Unique id of the record to retrieve (optional)
 * @apiParam {Number} offset Number of records to skip (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} fields Comma-separated list of record's attributes to retrieve (optional)
 * @apiDescription Records of staff distributed across terminals.
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/staff", [checkAuth, isValidStaff], fetchRecord);

/**
 * @api {post} /api/staff Create staff
 * @apiName CreateStaff
 * @apiGroup Employee
 * @apiParam {String} access_token master access token.
 * @apiParam {Integer} id Staff primaryKey
 * @apiParam {Integer} created_by Staff record created by
 * @apiParam {Number} created_by Staff record created by
 * @apiSuccess {Object} Staff Staff's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Staff not found.
 * @apiError 401 master access only.
 */
router.post("/staff", [checkAuth, isValidStaff], createRecord);

/**
 * @api {put} /api/staff/{recordId} Update staff
 * @apiName UpdateStaff
 * @apiGroup Employee
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam {Number} recordId Staff record id (primaryKey)
 * @apiParam {String} name Staff short name
 * @apiParam {Number} updated_by Staff record modified by
 * @apiSuccess {Object} Staff Staff's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Staff not found.
 * @apiError 401 master access only.
 */
router.put("/staff/:recordId", [checkAuth, isValidStaff], updateRecord);

/**
 * @api {delete} /api/staff/{recordId} Delete staff
 * @apiName DeleteStaff
 * @apiGroup Employee
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Staff not found.
 * @apiError 401 master access only.
 */
router.delete("/staff/:recordId", [checkAuth, isValidStaff], deleteRecord);

/**
 * @api {post} /api/staff/login Login Staff
 * @apiName LoginStaff
 * @apiGroup Employee
 * @apiPermission master
 * @apiParam {String} email Staff email address (optional)
 * @apiParam {String} password Staff password (optional)
 * @apiParam {String} office_phone Staff official phone number (optional)
 * @apiParam {String} otp Staff One-Time-Password sent to phone (optional)
 * @apiSuccess (Success 200) 200 Login Successful.
 * @apiError 404 Staff not found.
 */
router.post("/staff/login", login);

export default router;
