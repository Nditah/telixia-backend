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

var _constants = require("../../constants");

var _table = require("./table");

var _table2 = _interopRequireDefault(_table);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var force = _constants.DATABASE.DROP_TABLE_IF_EXIST.FALSE; /**
                                                            * @author 4Decoder
                                                            * @property {Number} id Setting primaryKey
                                                            * @property {String} name Setting varaible name
                                                            * @property {String} category Setting category of domains affected
                                                            * @property {String} value Setting value value
                                                            * @property {String} description Setting description
                                                            * @description Setting holds record of all cities with terminals
                                                            */
var schemaFetch = exports.schemaFetch = {
    id: _joi2.default.number().optional(),
    offset: _joi2.default.number().optional(),
    limit: _joi2.default.number().optional(),
    fields: _joi2.default.string().optional()
};

var schemaCreate = exports.schemaCreate = {
    name: _joi2.default.string().trim().required(),
    value: _joi2.default.string().trim().required(),
    category: _joi2.default.string().optional(),
    description: _joi2.default.string().required()
};

var schemaUpdate = exports.schemaUpdate = {
    name: _joi2.default.string().trim().optional(),
    value: _joi2.default.string().trim().optional(),
    category: _joi2.default.string().optional(),
    description: _joi2.default.string().optional(),
    updated_by: _joi2.default.number().required()
};

var schema = exports.schema = {
    id: { type: Sequelize.INTEGER(11), primaryKey: true, autoIncrement: true },
    name: { type: Sequelize.STRING, allowNull: false },
    value: { type: Sequelize.STRING, allowNull: false },
    category: { type: Sequelize.STRING },
    description: { type: Sequelize.STRING, allowNull: false },
    updated_by: { type: Sequelize.INTEGER(11) }
};

var options = {
    timestamps: true,
    paranoid: true,
    underscored: true,
    freezeTableName: true
};
var Setting = _sequelize3.default.define("setting", schema, options);
_sequelize3.default.sync().then(function () {
    return Setting.sync({ force: force }).then(function () {
        return Setting.bulkCreate(_table2.default);
    });
});

exports.default = Setting;
//# sourceMappingURL=model.js.map