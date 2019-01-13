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
 * @api {get} /api/alerts?id={recordId} Retrieve one or all records
 * @apiName RetrieveAsset
 * @apiGroup Asset
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i http://localhost/api/alerts?id=2&fields=id,created_at,updated_at
 * @apiExample {curl} Example usage for retieving multiple records:
 *      curl -i http://localhost/api/alerts?offset=10&limit=50
 * @apiParam {Number} id Unique id of the record to retrieve (optional)
 * @apiParam {Number} offset Number of records to skip (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} fields Comma-separated list of record's attributes to retrieve (optional)
 * @apiDescription Records  of account headings belonging to one classification
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
/**
 * @author 4Decoder
 * @description Asset holds record of all alerts involving company vehicles
 */
router.get("/alerts", [_authorization.checkAuth, _authorization.isValidStaff], _controller.fetchRecord);

/**
 * @api {post} /api/alerts Create alerts
 * @apiName CreateAsset
 * @apiGroup Asset
 * @apiParam {String} access_token master access token.
 * @apiParam {Number} user_id Asset user  fk
 * @apiParam {String} label Asset label
 * @apiSuccess {Object} Asset Asset's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Asset not found.
 * @apiError 401 master access only.
 */
router.post("/alerts", [_authorization.checkAuth, _authorization.isValidStaff], _controller.createRecord);

/**
 * @api {put} /api/alerts/{recordId} Update alerts
 * @apiName UpdateAsset
 * @apiGroup Asset
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam {Number} user_id Asset user  fk
 * @apiParam {String} label Asset label
 * @apiSuccess {Object} Asset Asset's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Asset not found.
 * @apiError 401 master access only.
 */
router.put("/alerts/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.updateRecord);

/**
 * @api {delete} /api/alerts/{recordId} Delete alerts
 * @apiName DeleteAsset
 * @apiGroup Asset
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Asset not found.
 * @apiError 401 master access only.
 */
router.delete("/alerts/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.deleteRecord);

exports.default = router;
//# sourceMappingURL=routes.js.map