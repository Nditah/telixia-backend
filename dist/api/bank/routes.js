"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _authorization = require("../../middleware/authorization");

var _controller = require("./controller");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

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
/**
 * @author 4Decoder
 * @description Bank holds record of all banks with terminals
 */
router.get("/banks", [_authorization.checkAuth, _authorization.isValidAdmin], _controller.fetchRecord);

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
router.post("/banks", [_authorization.checkAuth, _authorization.isValidAdmin], _controller.createRecord);

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
router.put("/banks/:recordId", [_authorization.checkAuth, _authorization.isValidAdmin], _controller.updateRecord);

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
router.delete("/banks/:recordId", [_authorization.checkAuth, _authorization.isValidAdmin], _controller.deleteRecord);

exports.default = router;
//# sourceMappingURL=routes.js.map