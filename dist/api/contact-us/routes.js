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
 * @api {get} /api/contact-us?id={recordId} Retrieve one or all records
 * @apiName RetrieveContactUs
 * @apiGroup ContactUs
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i http://localhost/api/contact-us?id=2&fields=id,created_at,updated_at
 * @apiExample {curl} Example usage for retieving multiple records:
 *      curl -i http://localhost/api/contact-us?offset=10&limit=50
 * @apiParam {Number} id Unique id of the record to retrieve (optional)
 * @apiParam {Number} offset Number of records to skip (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} fields Comma-separated list of record's attributes to retrieve (optional)
 * @apiDescription Records of enquiries, suggestions or complaints issues by clients via
 * the website or mobile app contact-us page.
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
/**
 * @author 4Decoder
 * @description ContactUs holds record of all contact-us from clients
 */
router.get("/contact-us", [_authorization.checkAuth, _authorization.isValidAdmin], _controller.fetchRecord);

/**
 * @api {post} /api/contact-us Create contact-us
 * @apiName CreateContactUs
 * @apiGroup ContactUs
 * @apiParam {String} access_token master access token.
 * @apiParam {String} fullname ContactUs fullname (required)
 * @apiParam {String} email ContactUs email (required)
 * @apiParam {String} phone ContactUs phone (required)
 * @apiParam {String} subject ContactUs subject (required)
 * @apiParam {String} message ContactUs message (required)
 * @apiParam {String} request_type ContactUs request_type:
 * "COMPLAINT", "ENQUIRY", "SUGGESTION", (required)
 * @apiParam {String} request_status ContactUs request_status:
 * "PENDING", "ACTIVE", "CLOSED" (prohibited)
 * @apiParam {String} remark ContactUs remark (prohibited)
 * @apiParam {Boolean} has_ticket ContactUs has_ticket (prohibited)
 * @apiSuccess {Object} ContactUs ContactUs's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 ContactUs not found.
 * @apiError 401 master access only.
 */
router.post("/contact-us", [_authorization.checkAuth, _authorization.isValidAdmin], _controller.createRecord);

/**
 * @api {put} /api/contact-us/{recordId} Update contact-us
 * @apiName UpdateContactUs
 * @apiGroup ContactUs
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam {String} email ContactUs email (optional)
 * @apiParam {String} phone ContactUs phone (optional)
 * @apiParam {String} subject ContactUs subject (optional)
 * @apiParam {String} message ContactUs message (optional)
 * @apiParam {String} request_type ContactUs request_type:
 * "COMPLAINT", "ENQUIRY", "SUGGESTION", (optional)
 * @apiParam {String} request_status ContactUs request_status:
 * "PENDING", "ACTIVE", "CLOSED" (optional)
 * @apiParam {String} remark ContactUs remark (optional)
 * @apiParam {Boolean} has_ticket ContactUs has_ticket (optional)
 * @apiSuccess {Object} ContactUs ContactUs's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 ContactUs not found.
 * @apiError 401 master access only.
 */
router.put("/contact-us/:recordId", [_authorization.checkAuth, _authorization.isValidAdmin], _controller.updateRecord);

/**
 * @api {delete} /api/contact-us/{recordId} Delete contact-us
 * @apiName DeleteContactUs
 * @apiGroup ContactUs
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 ContactUs not found.
 * @apiError 401 master access only.
 */
router.delete("/contact-us/:recordId", [_authorization.checkAuth, _authorization.isValidAdmin], _controller.deleteRecord);

exports.default = router;
//# sourceMappingURL=routes.js.map