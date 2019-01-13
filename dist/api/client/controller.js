"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.login = exports.deleteRecord = exports.updateRecord = exports.createRecord = exports.fetchRecord = undefined;

/**
 * @description fetchRecord() Retrieve  all record(s)
 * @param {Object} req http request object
 * @param {Object} res http request object returns
 */
// eslint-disable-next-line complexity
var fetchRecord = exports.fetchRecord = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var query, _Joi$validate, error, id, offset, limit, fields, fieldsArray, eligibleField, attributes, result, options;

        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        query = req.query;
                        _Joi$validate = _joi2.default.validate(query, _model.schemaFetch), error = _Joi$validate.error;

                        if (!error) {
                            _context.next = 4;
                            break;
                        }

                        return _context.abrupt("return", (0, _response.fail)(res, 422, "Error validating request query. " + error.message));

                    case 4:
                        id = query.id, offset = query.offset, limit = query.limit, fields = query.fields;

                        id = parseInt(id, 10);
                        offset = parseInt(offset, 10);
                        limit = parseInt(limit, 10);
                        fieldsArray = [];

                        if (fields && typeof fields === "string") {
                            fieldsArray = fields.replace(/\s+/g, "").split(",");
                        }
                        eligibleField = Object.keys(_model.schema);

                        eligibleField.push("created_at", "updated_at");
                        attributes = [];
                        result = void 0;

                        fieldsArray.forEach(function (item) {
                            if (eligibleField.includes(item)) attributes.push(item);
                        });
                        options = {};

                        if (attributes.length > 0) options.attributes = attributes;
                        if (offset >= 0) options.offset = offset;
                        if (limit > 0) options.limit = limit;
                        _context.prev = 19;

                        if (!id) {
                            _context.next = 32;
                            break;
                        }

                        if (!(attributes.length > 0)) {
                            _context.next = 27;
                            break;
                        }

                        _context.next = 24;
                        return _model2.default.findOne({ where: { id: id }, attributes: attributes });

                    case 24:
                        result = _context.sent;
                        _context.next = 30;
                        break;

                    case 27:
                        _context.next = 29;
                        return _model2.default.findOne({ where: { id: id } });

                    case 29:
                        result = _context.sent;

                    case 30:
                        _context.next = 35;
                        break;

                    case 32:
                        _context.next = 34;
                        return _model2.default.findAll(options);

                    case 34:
                        result = _context.sent;

                    case 35:
                        if (result) {
                            _context.next = 37;
                            break;
                        }

                        return _context.abrupt("return", (0, _response.notFound)(res, "Error: Bad Request: Model not found"));

                    case 37:
                        logger.info(_constants.STATUS_MSG.SUCCESS.DEFAULT, []);
                        return _context.abrupt("return", (0, _response.success)(res, 201, result, null));

                    case 41:
                        _context.prev = 41;
                        _context.t0 = _context["catch"](19);

                        logger.error(_context.t0);
                        return _context.abrupt("return", (0, _response.fail)(res, 500, "Error retrieving record. " + _context.t0.message));

                    case 45:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this, [[19, 41]]);
    }));

    return function fetchRecord(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var createRecord = exports.createRecord = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var data, _Joi$validate2, error, result;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        data = req.body;
                        _Joi$validate2 = _joi2.default.validate(data, _model.schemaCreate), error = _Joi$validate2.error;

                        if (!error) {
                            _context2.next = 4;
                            break;
                        }

                        return _context2.abrupt("return", (0, _response.fail)(res, 422, "Error validating request data. " + error.message));

                    case 4:
                        _context2.prev = 4;
                        _context2.next = 7;
                        return _model2.default.create(data);

                    case 7:
                        result = _context2.sent;

                        if (result) {
                            _context2.next = 11;
                            break;
                        }

                        logger.info(_constants.STATUS_MSG.SUCCESS.DEFAULT, []);
                        return _context2.abrupt("return", (0, _response.notFound)(res, "Error: Bad Request: Model not found"));

                    case 11:
                        return _context2.abrupt("return", (0, _response.success)(res, 201, result, "Record created successfully!"));

                    case 14:
                        _context2.prev = 14;
                        _context2.t0 = _context2["catch"](4);

                        logger.error(_context2.t0);
                        return _context2.abrupt("return", (0, _response.fail)(res, 500, "Error creating record. " + _context2.t0.message));

                    case 18:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2, this, [[4, 14]]);
    }));

    return function createRecord(_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();

var updateRecord = exports.updateRecord = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
        var data, id, _Joi$validate3, error, model, result;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        data = req.body;
                        id = req.params.recordId;
                        _Joi$validate3 = _joi2.default.validate(data, _model.schemaUpdate), error = _Joi$validate3.error;

                        if (!error) {
                            _context3.next = 5;
                            break;
                        }

                        return _context3.abrupt("return", (0, _response.fail)(res, 422, "Error validating request data. " + error.message));

                    case 5:
                        _context3.prev = 5;
                        _context3.next = 8;
                        return _model2.default.findByPk(id);

                    case 8:
                        model = _context3.sent;

                        if (model) {
                            _context3.next = 11;
                            break;
                        }

                        return _context3.abrupt("return", (0, _response.notFound)(res, "Bad Request: Model not found with id " + id));

                    case 11:
                        _context3.next = 13;
                        return model.update(data);

                    case 13:
                        result = _context3.sent;
                        return _context3.abrupt("return", (0, _response.success)(res, 200, result, "Record updated successfully!"));

                    case 17:
                        _context3.prev = 17;
                        _context3.t0 = _context3["catch"](5);

                        logger.error(_context3.t0);
                        return _context3.abrupt("return", (0, _response.fail)(res, 500, "Error updating record. " + _context3.t0.message));

                    case 21:
                    case "end":
                        return _context3.stop();
                }
            }
        }, _callee3, this, [[5, 17]]);
    }));

    return function updateRecord(_x5, _x6) {
        return _ref3.apply(this, arguments);
    };
}();

var deleteRecord = exports.deleteRecord = function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
        var id, model, result;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        id = req.params.recordId;
                        _context4.prev = 1;
                        _context4.next = 4;
                        return _model2.default.findByPk(id);

                    case 4:
                        model = _context4.sent;

                        if (model) {
                            _context4.next = 7;
                            break;
                        }

                        return _context4.abrupt("return", (0, _response.notFound)(res, "Bad Request: Model not found with id " + id));

                    case 7:
                        _context4.next = 9;
                        return model.destroy();

                    case 9:
                        result = _context4.sent;
                        return _context4.abrupt("return", (0, _response.success)(res, 200, result, "Record deleted successfully!"));

                    case 13:
                        _context4.prev = 13;
                        _context4.t0 = _context4["catch"](1);

                        logger.error(_context4.t0);
                        return _context4.abrupt("return", (0, _response.fail)(res, 500, "Error deleting record. " + _context4.t0.message));

                    case 17:
                    case "end":
                        return _context4.stop();
                }
            }
        }, _callee4, this, [[1, 13]]);
    }));

    return function deleteRecord(_x7, _x8) {
        return _ref4.apply(this, arguments);
    };
}();

var login = exports.login = function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
        var _Joi$validate4, error;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        _Joi$validate4 = _joi2.default.validate(req.body, schemaLogin), error = _Joi$validate4.error;

                        if (!error) {
                            _context5.next = 3;
                            break;
                        }

                        return _context5.abrupt("return", (0, _response.fail)(res, 422, "Error validating request data. " + error.message));

                    case 3:
                        return _context5.abrupt("return", (0, _authenticate.clientAuthenticate)(req.body).then(function (token) {
                            return (0, _response.success)(res, 200, { token: token }, "Login was successful!");
                        }).catch(function (err) {
                            return (0, _response.fail)(res, 500, "Error occurred. " + err.message);
                        }));

                    case 4:
                    case "end":
                        return _context5.stop();
                }
            }
        }, _callee5, this);
    }));

    return function login(_x9, _x10) {
        return _ref5.apply(this, arguments);
    };
}();

var _joi = require("joi");

var _joi2 = _interopRequireDefault(_joi);

var _log4js = require("log4js");

var _log4js2 = _interopRequireDefault(_log4js);

var _model = require("./model");

var _model2 = _interopRequireDefault(_model);

var _response = require("../../lib/response");

var _constants = require("../../constants");

var _authenticate = require("../../services/authenticate");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @author 4Decoder
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @description Client holds record of all cities with terminals
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */


// Logging
var logger = _log4js2.default.getLogger("[client]");
_log4js2.default.configure({
    appenders: { file: { type: "file", filename: "logs/client.log" } },
    categories: { default: { appenders: ["file"], level: "debug" } }
});
//# sourceMappingURL=controller.js.map