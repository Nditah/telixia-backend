/**
 * @author 4Decoder
 * @description Setting holds record of all settings with terminals
 */
import express from "express";
import { checkAuth, isValidStaff } from "../../middleware/authorization";
import { fetchRecord, createRecord, updateRecord, deleteRecord } from "./controller";

const router = express.Router();

/**
 * @api {get} /api/settings?id={recordId} Retrieve one or all records
 * @apiName RetrieveSetting
 * @apiGroup Setting
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i http://localhost/api/settings?id=2&fields=id,created_at,updated_at
 * @apiExample {curl} Example usage for retieving multiple records:
 *      curl -i http://localhost/api/settings?offset=10&limit=50
 * @apiParam {Number} id Unique id of the record to retrieve (optional)
 * @apiParam {Number} offset Number of records to skip (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} fields Comma-separated list of record's attributes to retrieve (optional)
 * @apiDescription Records of Software adjustable and default parameters.
 * Labels and contents for the website are kept here.
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/settings", fetchRecord);

/**
 * @api {post} /api/settings Create settings
 * @apiName CreateSetting
 * @apiGroup Setting
 * @apiParam {String} access_token master access token.
 * @apiParam {Number} id Setting primaryKey
 * @apiParam {String} name Setting varaible name
 * @apiParam {String} category Setting category of domains affected
 * @apiParam {String} control Setting control value
 * @apiParam {String} description Setting description
 * @apiSuccess {Object} Setting Setting's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Setting not found.
 * @apiError 401 master access only.
 */
router.post("/settings", [checkAuth, isValidStaff], createRecord);

/**
 * @api {put} /api/settings/{recordId} Update settings
 * @apiName UpdateSetting
 * @apiGroup Setting
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam {Number} recordId Setting record id (primaryKey)
 * @apiParam {String} name Setting varaible name
 * @apiParam {String} category Setting category of domains affected
 * @apiParam {String} control Setting control value
 * @apiParam {String} description Setting description
 * @apiParam {Number} updated_by Setting record modified by
 * @apiSuccess {Object} Setting Setting's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Setting not found.
 * @apiError 401 master access only.
 */
router.put("/settings/:recordId", [checkAuth, isValidStaff], updateRecord);

/**
 * @api {delete} /api/settings/{recordId} Delete settings
 * @apiName DeleteSetting
 * @apiGroup Setting
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Setting not found.
 * @apiError 401 master access only.
 */
router.delete("/settings/:recordId", [checkAuth, isValidStaff], deleteRecord);

export default router;
