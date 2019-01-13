"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.schemaUpdate = exports.schemaCreate = exports.schemaFetch = undefined;

var _joi = require("joi");

var _joi2 = _interopRequireDefault(_joi);

var _sequelize = require("sequelize");

var Sequelize = _interopRequireWildcard(_sequelize);

var _sequelize2 = require("../../config/sequelize");

var _sequelize3 = _interopRequireDefault(_sequelize2);

var _constants = require("../../constants");

var _table = require("./table");

var _table2 = _interopRequireDefault(_table);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var force = _constants.DATABASE.DROP_TABLE_IF_EXIST.FALSE; /**
                                                            * @author 4Dcoder
                                                            * @property {Number} id contact_us primaryKey
                                                            * @property {String} fullname ContactUs fullname (required)
                                                            * @property {String} email ContactUs email (required)
                                                            * @property {String} phone ContactUs phone (required)
                                                            * @property {String} subject ContactUs subject (required)
                                                            * @property {String} message ContactUs message (required)
                                                            * @property {String} request_type ContactUs request_type with values
                                                            * "COMPLAINT", "ENQUIRY", "SUGGESTION", (required)
                                                            * @property {String} request_status ContactUs request_status with values
                                                            *  "PENDING", "ACTIVE", "CLOSED" (prohibited)
                                                            * @property {String} remark ContactUs remark (prohibited)
                                                            * @property {Boolean} has_ticket ContactUs has_ticket (prohibited)
                                                            * @description ContactUs model holds record of all contact_us info from site visitors
                                                            */
var schemaFetch = exports.schemaFetch = {
    id: _joi2.default.number().optional(),
    offset: _joi2.default.number().optional(),
    limit: _joi2.default.number().optional(),
    fields: _joi2.default.string().optional()
};

var schemaCreate = exports.schemaCreate = {
    fullname: _joi2.default.string().required(),
    email: _joi2.default.string().trim().required(),
    phone: _joi2.default.string().trim().required(),
    subject: _joi2.default.string().required(),
    message: _joi2.default.string().required(),
    request_type: _joi2.default.string().trim().valid("COMPLAINT", "ENQUIRY", "SUGGESTION").required()
};

var schemaUpdate = exports.schemaUpdate = {
    request_type: _joi2.default.string().trim().valid("COMPLAINT", "ENQUIRY", "SUGGESTION").optional(),
    request_status: _joi2.default.string().trim().valid("ACTIVE", "CLOSED").optional(),
    remark: _joi2.default.string(),
    has_ticket: _joi2.default.boolean(),
    updated_by: _joi2.default.number().required()
};

var schema = {
    id: { type: Sequelize.INTEGER(11), primaryKey: true, autoIncrement: true },
    fullname: { type: Sequelize.STRING, allowNull: false },
    email: { type: Sequelize.STRING, allowNull: false },
    phone: { type: Sequelize.STRING, allowNull: false },
    subject: { type: Sequelize.STRING, allowNull: false },
    message: { type: Sequelize.STRING, allowNull: false },
    request_type: { type: Sequelize.ENUM("COMPLAINT", "ENQUIRY", "SUGGESTION"), allowNull: false },
    request_status: {
        type: Sequelize.ENUM("PENDING", "ACTIVE", "CLOSED"),
        defaultValue: "PENDING",
        allowNull: false
    },
    remark: { type: Sequelize.STRING },
    has_ticket: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false },
    updated_by: { type: Sequelize.INTEGER(11) }
};

var options = {
    timestamps: true,
    paranoid: true,
    underscored: true,
    freezeTableName: true
};
var ContactUs = _sequelize3.default.define("contact_us", schema, options);
_sequelize3.default.sync().then(function () {
    return ContactUs.sync({ force: force }).then(function () {
        return ContactUs.bulkCreate(_table2.default);
    });
});

exports.default = ContactUs;
//# sourceMappingURL=model.js.map