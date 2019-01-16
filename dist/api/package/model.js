"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.schema = exports.schemaUpdate = exports.schemaCreate = exports.schemaFetch = undefined;

var _joi = require("joi");

var _joi2 = _interopRequireDefault(_joi);

var _sequelize = require("sequelize");

var Sequelize = _interopRequireWildcard(_sequelize);

var _sequelize2 = require("../../config/sequelize");

var _sequelize3 = _interopRequireDefault(_sequelize2);

var _table = require("./table");

var _table2 = _interopRequireDefault(_table);

var _constants = require("../../constants");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var force = _constants.DATABASE.DROP_TABLE_IF_EXIST.TRUE; /**
                                                           * @author 4Dcoder
                                                           * @property {Number} id package primaryKey
                                                           * @property {String} name Package full name (required)
                                                           * @property {String} description Package description (required)
                                                           * @property {Number} duration Package duration (required)
                                                           * @property {Number} cost Package cost (required)
                                                           * @property {Boolean} is_available Package is current availability
                                                           * @description Package model holds record of all packages the company deals with
                                                           */
var schemaFetch = exports.schemaFetch = {
    id: _joi2.default.number().optional(),
    offset: _joi2.default.number().optional(),
    limit: _joi2.default.number().optional(),
    fields: _joi2.default.string().optional()
};

var schemaCreate = exports.schemaCreate = {
    name: _joi2.default.string().required(),
    description: _joi2.default.string().required(),
    duration: _joi2.default.number().optional(),
    cost: _joi2.default.number().optional(),
    is_available: _joi2.default.boolean().optional(),
    created_by: _joi2.default.number().required()
};

var schemaUpdate = exports.schemaUpdate = {
    name: _joi2.default.string().optional(),
    description: _joi2.default.string().optional(),
    duration: _joi2.default.number().optional(),
    cost: _joi2.default.number().optional(),
    is_available: _joi2.default.boolean().optional(),
    updated_by: _joi2.default.number().required()
};

var schema = exports.schema = {
    id: { type: Sequelize.INTEGER(11), primaryKey: true, autoIncrement: true },
    name: { type: Sequelize.STRING, allowNull: false },
    description: { type: Sequelize.STRING, allowNull: false },
    duration: { type: Sequelize.TINYINT(2), comment: "Weeks", allowNull: false, defaultValue: 4 },
    cost: { type: Sequelize.DECIMAL(10, 2), allowNull: false, defaultValue: 20000.00 },
    is_available: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true },
    created_by: { type: Sequelize.INTEGER(11), allowNull: false, defaultValue: 1 },
    updated_by: { type: Sequelize.INTEGER(11) }
};

var options = {
    timestamps: true,
    paranoid: true,
    underscored: true,
    freezeTableName: true
};
var Package = _sequelize3.default.define("package", schema, options);
_sequelize3.default.sync().then(function () {
    return Package.sync({ force: force }).then(function () {
        return Package.bulkCreate(_table2.default);
    });
});

exports.default = Package;
//# sourceMappingURL=model.js.map