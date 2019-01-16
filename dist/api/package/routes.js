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
/**
 * @author 4Decoder
 * @description Package holds record of all packages with terminals
 */
router.get("/packages", _controller.fetchRecord);

/**
 * @api {post} /api/packages Create packages
 * @apiName CreatePackage
 * @apiGroup Package
 * @apiParam {String} access_token master access token.
 * @apiParam {String} name Package full name (required)
 * @apiParam {String} description Package description (required)
 * @apiParam {Number} duration Package duration (required)
 * @apiParam {Number} cost Package cost (required)
 * @apiParam {Boolean} is_available Package is current availability
 * @apiSuccess {Object} Package Package's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Package not found.
 * @apiError 401 master access only.
 */
router.post("/packages", [_authorization.checkAuth, _authorization.isValidAdmin], _controller.createRecord);

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
 * @apiParam {Boolean} is_available Package is current availability
 * @apiSuccess {Object} Package Package's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Package not found.
 * @apiError 401 master access only.
 */
router.put("/packages/:recordId", [_authorization.checkAuth, _authorization.isValidAdmin], _controller.updateRecord);

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
router.delete("/packages/:recordId", [_authorization.checkAuth, _authorization.isValidAdmin], _controller.deleteRecord);

exports.default = router;
//# sourceMappingURL=routes.js.map