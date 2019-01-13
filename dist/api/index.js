"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _contactUs = require("./contact-us");

var _contactUs2 = _interopRequireDefault(_contactUs);

var _country = require("./country");

var _country2 = _interopRequireDefault(_country);

var _customer = require("./customer");

var _customer2 = _interopRequireDefault(_customer);

var _image = require("./image");

var _image2 = _interopRequireDefault(_image);

var _setting = require("./setting");

var _setting2 = _interopRequireDefault(_setting);

var _staff = require("./staff");

var _staff2 = _interopRequireDefault(_staff);

var _transaction = require("./transaction");

var _transaction2 = _interopRequireDefault(_transaction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @description Common Module Routes
 */
var router = _express2.default.Router();

// Use Routes
router.use(_contactUs2.default);
router.use(_country2.default);
router.use(_customer2.default);
router.use(_image2.default);
router.use(_setting2.default);
router.use(_staff2.default);
router.use(_transaction2.default);

exports.default = router;
//# sourceMappingURL=index.js.map