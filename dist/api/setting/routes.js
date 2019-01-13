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
/**
 * @author 4Decoder
 * @description Setting holds record of all settings with terminals
 */
router.get("/settings", _controller.fetchRecord);

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
router.post("/settings", [_authorization.checkAuth, _authorization.isValidAdmin], _controller.createRecord);

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
router.put("/settings/:recordId", [_authorization.checkAuth, _authorization.isValidAdmin], _controller.updateRecord);

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
router.delete("/settings/:recordId", [_authorization.checkAuth, _authorization.isValidAdmin], _controller.deleteRecord);

exports.default = router;
//# sourceMappingURL=routes.js.map