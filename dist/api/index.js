"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _admin = require("./admin");

var _admin2 = _interopRequireDefault(_admin);

var _bank = require("./bank");

var _bank2 = _interopRequireDefault(_bank);

var _client = require("./client");

var _client2 = _interopRequireDefault(_client);

var _contactUs = require("./contact-us");

var _contactUs2 = _interopRequireDefault(_contactUs);

var _country = require("./country");

var _country2 = _interopRequireDefault(_country);

var _image = require("./image");

var _image2 = _interopRequireDefault(_image);

var _invoice = require("./invoice");

var _invoice2 = _interopRequireDefault(_invoice);

var _package = require("./package");

var _package2 = _interopRequireDefault(_package);

var _setting = require("./setting");

var _setting2 = _interopRequireDefault(_setting);

var _talent = require("./talent");

var _talent2 = _interopRequireDefault(_talent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

// Use Routes
/**
 * @description Common Module Routes
 */
router.use(_admin2.default);
router.use(_bank2.default);
router.use(_client2.default);
router.use(_contactUs2.default);
router.use(_country2.default);
router.use(_image2.default);
router.use(_invoice2.default);
router.use(_package2.default);
router.use(_setting2.default);
router.use(_talent2.default);

exports.default = router;
//# sourceMappingURL=index.js.map