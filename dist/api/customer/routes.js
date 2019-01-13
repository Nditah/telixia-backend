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
 * @api {get} /api/customers?id={recordId} Retrieve one or all records
 * @apiName RetrieveCustomer
 * @apiGroup Customer
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i http://localhost/api/customers?id=2&fields=id,created_at,updated_at
 * @apiExample {curl} Example usage for retieving multiple records:
 *      curl -i http://localhost/api/customers?offset=10&limit=50
 * @apiParam {Number} id Unique id of the record to retrieve (optional)
 * @apiParam {Number} offset Number of records to skip (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} fields Comma-separated list of record's attributes to retrieve (optional)
 * @apiDescription Records of consolidated list of customers from PMT, PML, PET, Shop etc
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
/**
 * @author 4Decoder
 * @description Customer holds record of all customers with terminals
 */
router.get("/customers", [_authorization.checkAuth, _authorization.isValidStaff], _controller.fetchRecord);

/**
 * @api {post} /api/customers Create customers
 * @apiName CreateCustomer
 * @apiGroup Customer
 * @apiParam {String} access_token master access token.
 * @apiParam {Number} id Customer primaryKey
 * @apiParam {String} customer type "INDIVIDUAL", "ORGANIZATION"
 * @apiParam {String} title
 * @apiParam {String} surname Customer surname (required)
 * @apiParam {String} other_name Customer other name (required)
 * @apiParam {String} gender Customer gender (required)
 * @apiParam {Date} birth_date Customer date of birth
 * @apiParam {String} phone Customer phone number (required)
 * @apiParam {String} phone2 Customer mobile work or home phone number
 * @apiParam {String} email Customer email address
 * @apiParam {String} password Customer password for accessing the App
 * @apiParam {String} contact_person Customer next-of-kin, or contact person
 * @apiParam {String} contact_person_phone Customer next-of-kin, or contact person phone
 * @apiParam {String} product Customer products of services of interest
 * @apiParam {String} photo Customer photo url
 * @apiParam {String} address Customer residential or work address
 * @apiParam {String} country_iso2 Customer country of residence (required)
 * @apiParam {Boolean} is_pmt_client assert that client is also a PMT customer
 * @apiParam {Boolean} is_pesl_client assert that client is also a PESL customer
 * @apiParam {Boolean} is_pet_client assert that client is also a PET customer
 * @apiParam {Boolean} is_shop_client assert that client is also a SHOP customer
 * @apiParam {Boolean} is_tenant assert if customer is a depot tenant
 * @apiParam {Boolean} is_phone_verified phone verification status
 * @apiParam {Boolean} is_email_verified email verification status
 * @apiParam {String} remark comment about customer
 * @apiParam {Number} created_by (required) id of the staff who created the record
 * @apiParam {Number} updated_by id of the staff who created the record
 * @apiSuccess {Object} Customer Customer's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Customer not found.
 * @apiError 401 master access only.
 */
router.post("/customers", _controller.createRecord);

/**
 * @api {put} /api/customers/{recordId} Update customers
 * @apiName UpdateCustomer
 * @apiGroup Customer
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam {String} access_token master access token.
 * @apiParam {Number} id Customer primaryKey
 * @apiParam {String} customer type "INDIVIDUAL", "ORGANIZATION"
 * @apiParam {String} title
 * @apiParam {String} surname Customer surname (required)
 * @apiParam {String} other_name Customer other name (required)
 * @apiParam {String} gender Customer gender (required)
 * @apiParam {Date} birth_date Customer date of birth
 * @apiParam {String} phone Customer phone number (required)
 * @apiParam {String} phone2 Customer mobile work or home phone number
 * @apiParam {String} email Customer email address
 * @apiParam {String} password Customer password for accessing the App
 * @apiParam {String} contact_person Customer next-of-kin, or contact person
 * @apiParam {String} contact_person_phone Customer next-of-kin, or contact person phone
 * @apiParam {String} product Customer products of services of interest
 * @apiParam {String} photo Customer photo url
 * @apiParam {String} address Customer residential or work address
 * @apiParam {String} country_iso2 Customer country of residence (required)
 * @apiParam {Boolean} is_pmt_client assert that client is also a PMT customer
 * @apiParam {Boolean} is_pesl_client assert that client is also a PESL customer
 * @apiParam {Boolean} is_pet_client assert that client is also a PET customer
 * @apiParam {Boolean} is_shop_client assert that client is also a SHOP customer
 * @apiParam {Boolean} is_tenant assert if customer is a depot tenant
 * @apiParam {Boolean} is_phone_verified phone verification status
 * @apiParam {Boolean} is_email_verified email verification status
 * @apiParam {String} remark comment about customer
 * @apiParam {Number} created_by (required) id of the staff who created the record
 * @apiParam {Number} updated_by id of the staff who created the record
 * @apiSuccess {Object} Customer Customer's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Customer not found.
 * @apiError 401 master access only.
 */
router.put("/customers/:recordId", [_authorization.checkAuth], _controller.updateRecord);

/**
 * @api {delete} /api/customers/{recordId} Delete customers
 * @apiName DeleteCustomer
 * @apiGroup Customer
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Customer not found.
 * @apiError 401 master access only.
 */
router.delete("/customers/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.deleteRecord);

/**
 * @api {post} /api/customers/login Login Customer
 * @apiName LoginCustomer
 * @apiGroup Customer
 * @apiPermission master
 * @apiParam {String} email Customer email address (optional)
 * @apiParam {String} password Customer password (optional)
 * @apiParam {String} phone Customer mobile phone number (optional)
 * @apiParam {String} otp Customer One-Time-Password sent to phone (optional)
 * @apiSuccess (Success 200) 200 Login Successful.
 * @apiError 404 Customer not found.
 */
router.post("/customers/login", _controller.login);

exports.default = router;
//# sourceMappingURL=routes.js.map