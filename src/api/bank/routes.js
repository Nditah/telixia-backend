/**
 * @author 4Decoder
 * @description Bank holds record of all banks with terminals
 */
import express from "express";
import { checkAuth, isValidAdmin } from "../../middleware/authorization";
import { fetchRecord, createRecord, updateRecord, deleteRecord } from "./controller";

const router = express.Router();

/**
 * @api {get} /api/banks?id={recordId} Retrieve one or all records
 * @apiName RetrieveBank
 * @apiGroup Bank
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i http://localhost/api/banks?id=2&fields=id,created_at,updated_at
 * @apiExample {curl} Example usage for retieving multiple records:
 *      curl -i http://localhost/api/banks?offset=10&limit=50
 * @apiParam {Number} id Unique id of the record to retrieve (optional)
 * @apiParam {Number} offset Number of records to skip (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} fields Comma-separated list of record's attributes to retrieve (optional)
 * @apiDescription Records  of Corporate commercial banks operating Groups bank account(s)
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/banks", [checkAuth, isValidAdmin], fetchRecord);

/**
 * @api {post} /api/banks Create banks
 * @apiName CreateBank
 * @apiGroup Bank
 * @apiParam {String} access_token master access token.
 * @apiParam {String} name Bank full name (required)
 * @apiParam {String} sort_code Bank sort_code (required)
 * @apiParam {String} bank_code Bank bank_code (required)
 * @apiParam {String} country_iso2 Bank country_iso2 (optional)
 * @apiParam {String} contact_person Bank contact_person (optional)
 * @apiParam {String} website Bank website (optional)
 * @apiSuccess {Object} Bank Bank's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Bank not found.
 * @apiError 401 master access only.
 */
router.post("/banks", [checkAuth, isValidAdmin], createRecord);

/**
 * @api {put} /api/banks/{recordId} Update banks
 * @apiName UpdateBank
 * @apiGroup Bank
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam {String} name Bank full name (required)
 * @apiParam {String} sort_code Bank sort_code (required)
 * @apiParam {String} bank_code Bank bank_code (required)
 * @apiParam {String} country_iso2 Bank country_iso2 (optional)
 * @apiParam {String} contact_person Bank contact_person (optional)
 * @apiParam {String} website Bank website (optional)
 * @apiSuccess {Object} Bank Bank's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Bank not found.
 * @apiError 401 master access only.
 */
router.put("/banks/:recordId", [checkAuth, isValidAdmin], updateRecord);

/**
 * @api {delete} /api/banks/{recordId} Delete banks
 * @apiName DeleteBank
 * @apiGroup Bank
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Bank not found.
 * @apiError 401 master access only.
 */
router.delete("/banks/:recordId", [checkAuth, isValidAdmin], deleteRecord);

export default router;
