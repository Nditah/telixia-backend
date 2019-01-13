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
 * @api {get} /api/admins?id={recordId} Retrieve one or all records
 * @apiName RetrieveAdmin
 * @apiGroup Admin
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i http://localhost/api/admins?id=2&fields=id,created_at,updated_at
 * @apiExample {curl} Example usage for retieving multiple records:
 *      curl -i http://localhost/api/admins?offset=10&limit=50
 * @apiParam {Number} id Unique id of the record to retrieve (optional)
 * @apiParam {Number} offset Number of records to skip (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} fields Comma-separated list of record's attributes to retrieve (optional)
 * @apiDescription Records of admins distributed across terminals.
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
/**
 * @author 4Decoder
 * @description Admin holds record of all admins with terminals
 */
router.get("/admins", [_authorization.checkAuth, _authorization.isValidAdmin], _controller.fetchRecord);

/**
 * @api {post} /api/admins Create admins
 * @apiName CreateAdmin
 * @apiGroup Admin
 * @apiParam {String} access_token master access token.
 * @apiParam {String} title Admin title (optional)
 * @apiParam {String} surname Admin  surname (required)
 * @apiParam {String} other_name Admin  other_name (required)
 * @apiParam {String} gender Admin  gender (required)
 * @apiParam {Date} birth_date Admin  birth_date (required)
 * @apiParam {String} marital_status Admin  marital_status (required)
 * @apiParam {String} phone_office Admin  phone_office (required)
 * @apiParam {String} phone_personal Admin  phone_personal (required)
 * @apiParam {String} address Admin  address (required)
 * @apiParam {String} country_iso2 Admin  country_iso2 (required)
 * @apiParam {String} email Admin  email (required)
 * @apiParam {String} password Admin  password (required)
 * @apiParam {String} otp Admin  otp (required)
 * @apiParam {Integer} otp_count Admin  otp_count (required)
 * @apiParam {String} kin Admin  kin (required)
 * @apiParam {String} kin_phone Admin  kin_phone (required)
 * @apiParam {String} kin_address Admin  kin_address (required)
 * @apiParam {String} job_responsibility Admin  job_responsibility (required)
 * @apiParam {String} job_title Admin  job_title (required)
 * @apiParam {String} highest_qualification Admin  highest_qualification (optional)
 * @apiParam {String} highest_institution Admin  highest_institution (optional)
 * @apiParam {String} employment_status Admin  employment_status (required)
 * @apiParam {Date} employment_date Admin  employment_date (required)
 * @apiParam {Integer} monthly_tax Admin  monthly_tax (optional)
 * @apiParam {Integer} monthly_salary Admin  monthly_salary (required)
 * @apiParam {Integer} bank_id Admin  bank_id (required)
 * @apiParam {String} bank_account_number Admin  bank_account_number (required)
 * @apiParam {String} bank_account_name Admin  bank_account_name (required)
 * @apiParam {Boolean} is_salary_payable Admin  is_salary_payable (optional)
 * @apiParam {Boolean} is_document_complete Admin  is_document_complete (optional)
 * @apiParam {Integer} superior_id Admin  superior_id (optional)
 * @apiParam {String} remark Admin  remark (optional)
 * @apiParam {String} photo Admin  photo (optional)  
 * @apiParam {Date} last_login_date Admin  last_login_date (optional)
 * @apiParam {String} last_login_ip Admin  last_login_ip (optional)
 * @apiSuccess {Object} Admin Admin's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Admin not found.
 * @apiError 401 master access only.
 */
router.post("/admins", [_authorization.checkAuth, _authorization.isValidAdmin], _controller.createRecord);

/**
 * @api {put} /api/admins/{recordId} Update admins
 * @apiName UpdateAdmin
 * @apiGroup Admin
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam {Number} recordId Admin record id (primaryKey)
 * @apiParam {String} title Admin title (optional)
 * @apiParam {String} surname Admin  surname (optional)
 * @apiParam {String} other_name Admin  other_name (optional)
 * @apiParam {String} gender Admin  gender (optional)
 * @apiParam {Date} birth_date Admin  birth_date (optional)
 * @apiParam {String} marital_status Admin  marital_status (optional)
 * @apiParam {String} phone_office Admin  phone_office (optional)
 * @apiParam {String} phone_personal Admin  phone_personal (optional)
 * @apiParam {String} address Admin  address (optional)
 * @apiParam {String} country_iso2 Admin  country_iso2 (optional)
 * @apiParam {String} email Admin  email (optional)
 * @apiParam {String} password Admin  password (optional)
 * @apiParam {String} otp Admin  otp (optional)
 * @apiParam {Integer} otp_count Admin  otp_count (optional)
 * @apiParam {String} kin Admin  kin (optional)
 * @apiParam {String} kin_phone Admin  kin_phone (optional)
 * @apiParam {String} kin_address Admin  kin_address (optional)
 * @apiParam {String} job_responsibility Admin  job_responsibility (optional)
 * @apiParam {String} job_title Admin  job_title (optional)
 * @apiParam {String} highest_qualification Admin  highest_qualification (optional)
 * @apiParam {String} highest_institution Admin  highest_institution (optional)
 * @apiParam {String} employment_status Admin  employment_status (optional)
 * @apiParam {Date} employment_date Admin  employment_date (optional)
 * @apiParam {Integer} monthly_tax Admin  monthly_tax (optional)
 * @apiParam {Integer} monthly_salary Admin  monthly_salary (optional)
 * @apiParam {Integer} bank_id Admin  bank_id (optional)
 * @apiParam {String} bank_account_number Admin  bank_account_number (optional)
 * @apiParam {String} bank_account_name Admin  bank_account_name (optional)
 * @apiParam {Boolean} is_salary_payable Admin  is_salary_payable (optional)
 * @apiParam {Boolean} is_document_complete Admin  is_document_complete (optional)
 * @apiParam {Integer} superior_id Admin  superior_id (optional)
 * @apiParam {String} remark Admin  remark (optional)
 * @apiParam {String} photo Admin  photo (optional)  
 * @apiParam {Date} last_login_date Admin  last_login_date (optional)
 * @apiParam {String} last_login_ip Admin  last_login_ip (optional)
 * @apiSuccess {Object} Admin Admin's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Admin not found.
 * @apiError 401 master access only.
 */
router.put("/admins/:recordId", [_authorization.checkAuth, _authorization.isValidAdmin], _controller.updateRecord);

/**
 * @api {delete} /api/admins/{recordId} Delete admins
 * @apiName DeleteAdmin
 * @apiGroup Admin
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Admin not found.
 * @apiError 401 master access only.
 */
router.delete("/admins/:recordId", [_authorization.checkAuth, _authorization.isValidAdmin], _controller.deleteRecord);

/**
 * @api {post} /api/admins/login Login Admin
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
router.post("/admins/login", _controller.login);

exports.default = router;
//# sourceMappingURL=routes.js.map