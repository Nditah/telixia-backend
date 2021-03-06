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
 * @api {get} /api/admin?id={recordId} Retrieve one or all records
 * @apiName RetrieveAdmin
 * @apiGroup Admin
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i http://localhost/api/admin?id=2&fields=id,created_at,updated_at
 * @apiExample {curl} Example usage for retieving multiple records:
 *      curl -i http://localhost/api/admin?offset=10&limit=50
 * @apiParam {Number} id Unique id of the record to retrieve (optional)
 * @apiParam {Number} offset Number of records to skip (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} fields Comma-separated list of record's attributes to retrieve (optional)
 * @apiDescription Records of admin distributed across terminals.
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
/**
 * @author 4Decoder
 * @description Admin holds record of all admin with terminals
 */
router.get("/admin", [_authorization.checkAuth, _authorization.isValidAdmin], _controller.fetchRecord);

/**
 * @api {post} /api/admin Create admin
 * @apiName CreateAdmin
 * @apiGroup Admin
 * @apiParam {String} access_token master access token.
 * @apiParam {Integer} id Admin primaryKey
 * @apiParam {Integer} created_by Admin record created by
 * @apiParam {Number} created_by Admin record created by
 * @apiSuccess {Object} Admin Admin's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Admin not found.
 * @apiError 401 master access only.
 */
router.post("/admin", [_authorization.checkAuth, _authorization.isValidAdmin], _controller.createRecord);

/**
 * @api {put} /api/admin/{recordId} Update admin
 * @apiName UpdateAdmin
 * @apiGroup Admin
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam {Number} recordId Admin record id (primaryKey)
 * @apiParam {String} name Admin short name
 * @apiParam {Number} updated_by Admin record modified by
 * @apiSuccess {Object} Admin Admin's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Admin not found.
 * @apiError 401 master access only.
 */
router.put("/admin/:recordId", [_authorization.checkAuth, _authorization.isValidAdmin], _controller.updateRecord);

/**
 * @api {delete} /api/admin/{recordId} Delete admin
 * @apiName DeleteAdmin
 * @apiGroup Admin
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Admin not found.
 * @apiError 401 master access only.
 */
router.delete("/admin/:recordId", [_authorization.checkAuth, _authorization.isValidAdmin], _controller.deleteRecord);

/**
 * @api {post} /api/admin/login Login Admin
 * @apiName LoginAdmin
 * @apiGroup Admin
 * @apiPermission master
 * @apiParam {String} email Admin email address (optional)
 * @apiParam {String} password Admin password (optional)
 * @apiParam {String} office_phone Admin official phone number (optional)
 * @apiParam {String} otp Admin One-Time-Password sent to phone (optional)
 * @apiSuccess (Success 200) 200 Login Successful.
 * @apiError 404 Admin not found.
 */
router.post("/admin/login", _controller.login);

exports.default = router;
//# sourceMappingURL=routes.js.map