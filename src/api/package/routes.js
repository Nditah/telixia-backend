/**
 * @author 4Decoder
 * @description Package holds record of all packages with terminals
 */
import express from "express";
import { checkAuth, isValidAdmin } from "../../middleware/authorization";
import { fetchRecord, createRecord, updateRecord, deleteRecord } from "./controller";

const router = express.Router();

/**
 * @api {get} /api/packages?id={recordId} Retrieve one or all records
 * @apiName RetrievePackage
 * @apiGroup Package
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i http://localhost/api/packages?id=2&fields=id,created_at,updated_at
 * @apiExample {curl} Example usage for retieving multiple records:
 *      curl -i http://localhost/api/packages?offset=10&limit=50
 * @apiParam {Number} id Unique id of the record to retrieve (optional)
 * @apiParam {Number} offset Number of records to skip (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} fields Comma-separated list of record's attributes to retrieve (optional)
 * @apiDescription Records  of Corporate commercial packages operating Groups package account(s)
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/packages", fetchRecord);

/**
 * @api {post} /api/packages Create packages
 * @apiName CreatePackage
 * @apiGroup Package
 * @apiParam {String} access_token master access token.
 * @apiParam {String} name Package full name (required)
 * @apiParam {String} description Package description (required)
 * @apiParam {Number} duration Package duration (required)
 * @apiParam {Number} cost Package cost (required)
 * @apiSuccess {Object} Package Package's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Package not found.
 * @apiError 401 master access only.
 */
router.post("/packages", [checkAuth, isValidAdmin], createRecord);

/**
 * @api {put} /api/packages/{recordId} Update packages
 * @apiName UpdatePackage
 * @apiGroup Package
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam {String} name Package full name (required)
 * @apiParam {String} description Package description (required)
 * @apiParam {Number} duration Package duration (required)
 * @apiParam {Number} cost Package cost (required)
 * @apiSuccess {Object} Package Package's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Package not found.
 * @apiError 401 master access only.
 */
router.put("/packages/:recordId", [checkAuth, isValidAdmin], updateRecord);

/**
 * @api {delete} /api/packages/{recordId} Delete packages
 * @apiName DeletePackage
 * @apiGroup Package
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Package not found.
 * @apiError 401 master access only.
 */
router.delete("/packages/:recordId", [checkAuth, isValidAdmin], deleteRecord);

export default router;
