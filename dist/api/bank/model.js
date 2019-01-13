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

var force = _constants.DATABASE.DROP_TABLE_IF_EXIST.FALSE; /**
                                                            * @author 4Dcoder
                                                            * @property {Number} id bank primaryKey
                                                            * @property {String} name Bank full name (required)
                                                            * @property {String} sort_code Bank sort_code (required)
                                                            * @property {String} bank_code Bank bank_code (required)
                                                            * @property {String} country_iso2 Bank country_iso2 (optional)
                                                            * @property {String} contact_person Bank contact_person (optional)
                                                            * @property {String} website Bank website (optional)
                                                            * @description Bank model holds record of all banks the company deals with
                                                            */
var schemaFetch = exports.schemaFetch = {
    id: _joi2.default.number().optional(),
    offset: _joi2.default.number().optional(),
    limit: _joi2.default.number().optional(),
    fields: _joi2.default.string().optional()
};

var schemaCreate = exports.schemaCreate = {
    name: _joi2.default.string().trim().required(),
    sort_code: _joi2.default.string().trim().required(),
    bank_code: _joi2.default.string().required(),
    country_iso2: _joi2.default.string().optional(),
    contact_person: _joi2.default.string().optional(),
    website: _joi2.default.string().optional(),
    created_by: _joi2.default.number().required()
};

var schemaUpdate = exports.schemaUpdate = {
    name: _joi2.default.string().trim().optional(),
    sort_code: _joi2.default.string().trim().optional(),
    bank_code: _joi2.default.string().optional(),
    country_iso2: _joi2.default.string().optional(),
    contact_person: _joi2.default.string().optional(),
    website: _joi2.default.string().optional(),
    updated_by: _joi2.default.number().required()
};

var schema = exports.schema = {
    id: { type: Sequelize.INTEGER(11), primaryKey: true, autoIncrement: true },
    name: { type: Sequelize.STRING, allowNull: false },
    sort_code: { type: Sequelize.STRING(11), allowNull: false },
    bank_code: { type: Sequelize.INTEGER(11), allowNull: false },
    country_iso2: { type: Sequelize.STRING(2), allowNull: false, defaultValue: "ng" },
    contact_person: { type: Sequelize.STRING },
    website: { type: Sequelize.STRING },
    created_by: { type: Sequelize.INTEGER(11), allowNull: false },
    updated_by: { type: Sequelize.INTEGER(11) }
};

var options = {
    timestamps: true,
    paranoid: true,
    underscored: true,
    freezeTableName: true
};
var Bank = _sequelize3.default.define("bank", schema, options);
_sequelize3.default.sync().then(function () {
    return Bank.sync({ force: force }).then(function () {
        return Bank.bulkCreate(_table2.default);
    });
});

exports.default = Bank;
//# sourceMappingURL=model.js.map