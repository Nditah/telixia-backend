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
 * @api {get} /api/countries?id={recordId} Retrieve one or all records
 * @apiName RetrieveCountry
 * @apiGroup Country
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i http://localhost/api/countries?id=2&fields=id,created_at,updated_at
 * @apiExample {curl} Example usage for retieving multiple records:
 *      curl -i http://localhost/api/countries?offset=10&limit=50
 * @apiParam {Number} id Unique id of the record to retrieve (optional)
 * @apiParam {Number} offset Number of records to skip (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} fields Comma-separated list of record's attributes to retrieve (optional)
 * @apiDescription Records countries of operation
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
/**
 * @author 4Decoder
 * @description Country holds record of all countries with terminals
 */
router.get("/countries", _controller.fetchRecord);

/**
 * @api {post} /api/countries Create countries
 * @apiName CreateCountry
 * @apiGroup Country
 * @apiParam {String} access_token master access token.
 * @apiParam {Number} id Country primaryKey
 * @apiParam {String} name Country name
 * @apiParam {String} iso2 Country iso where the state is located
 * @apiParam {String} iso3 Country iso3 (required)
 * @apiParam {String} callingCodes Country callingCodes (required)
 * @apiParam {String} currencies Country currencies (required)
 * @apiParam {String} ioc Country ioc (required)
 * @apiParam {String} languages Country languages (required)
 * @apiParam {String} status Country status (required)
 * @apiParam {Number} created_by Country record created by
 * @apiSuccess {Object} Country Country's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Country not found.
 * @apiError 401 master access only.
 */
router.post("/countries", [_authorization.checkAuth, _authorization.isValidStaff], _controller.createRecord);

/**
 * @api {put} /api/countries/{recordId} Update countries
 * @apiName UpdateCountry
 * @apiGroup Country
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam {Number} recordId Country record id (primaryKey)
 * @apiParam {String} name Country name
 * @apiParam {String} iso2 Country iso where the state is located
 * @apiParam {String} iso3 Country iso3 (required)
 * @apiParam {String} callingCodes Country callingCodes (required)
 * @apiParam {String} currencies Country currencies (required)
 * @apiParam {String} ioc Country ioc (required)
 * @apiParam {String} languages Country languages (required)
 * @apiParam {String} status Country status (required)
 * @apiParam {Number} updated_by Country record modified by
 * @apiSuccess {Object} Country Country's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Country not found.
 * @apiError 401 master access only.
 */
router.put("/countries/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.updateRecord);

/**
 * @api {delete} /api/countries/{recordId} Delete countries
 * @apiName DeleteCountry
 * @apiGroup Country
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Country not found.
 * @apiError 401 master access only.
 */
router.delete("/countries/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.deleteRecord);

exports.default = router;
//# sourceMappingURL=routes.js.map