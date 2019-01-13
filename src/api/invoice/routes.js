/**
 * @author 4Decoder
 * @description Invoice holds record of all invoices involving company vehicles
 */
import express from "express";
import { checkAuth, isValidStaff } from "../../middleware/authorization";
import { fetchRecord, createRecord, updateRecord, deleteRecord } from "./controller";

const router = express.Router();

/**
 * @api {get} /api/invoices?id={recordId} Retrieve one or all records
 * @apiName RetrieveInvoice
 * @apiGroup Invoice
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i http://localhost/api/invoices?id=2&fields=id,created_at,updated_at
 * @apiExample {curl} Example usage for retieving multiple records:
 *      curl -i http://localhost/api/invoices?offset=10&limit=50
 * @apiParam {Number} id Unique id of the record to retrieve (optional)
 * @apiParam {Number} offset Number of records to skip (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} fields Comma-separated list of record's attributes to retrieve (optional)
 * @apiDescription Records  of account headings belonging to one classification
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/invoices", [checkAuth, isValidStaff], fetchRecord);

/**
 * @api {post} /api/invoices Create invoices
 * @apiName CreateInvoice
 * @apiGroup Invoice
 * @apiParam {String} access_token master access token.
 * @apiParam {Number} user_id Invoice user  fk
 * @apiParam {String} label Invoice label
 * @apiSuccess {Object} Invoice Invoice's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Invoice not found.
 * @apiError 401 master access only.
 */
router.post("/invoices", [checkAuth, isValidStaff], createRecord);

/**
 * @api {put} /api/invoices/{recordId} Update invoices
 * @apiName UpdateInvoice
 * @apiGroup Invoice
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam {Number} user_id Invoice user  fk
 * @apiParam {String} label Invoice label
 * @apiSuccess {Object} Invoice Invoice's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Invoice not found.
 * @apiError 401 master access only.
 */
router.put("/invoices/:recordId", [checkAuth, isValidStaff], updateRecord);

/**
 * @api {delete} /api/invoices/{recordId} Delete invoices
 * @apiName DeleteInvoice
 * @apiGroup Invoice
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Invoice not found.
 * @apiError 401 master access only.
 */
router.delete("/invoices/:recordId", [checkAuth, isValidStaff], deleteRecord);

export default router;
