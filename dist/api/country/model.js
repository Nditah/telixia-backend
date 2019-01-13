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
                                                            * @author 4Decoder
                                                            * @property {Number} id Country primaryKey
                                                            * @property {String} name Country name
                                                            * @property {String} iso2 Country iso where the state is located
                                                            * @property {String} iso3 Country iso3 (required)
                                                            * @property {String} callingCodes Country callingCodes (required)
                                                            * @property {String} currencies Country currencies (required)
                                                            * @property {String} ioc Country ioc (required)
                                                            * @property {String} languages Country languages (required)
                                                            * @property {String} status Country status (required)
                                                            * @property {Number} created_by Country record created by
                                                            * @property {Number} updated_by Country record modified by
                                                            * @description Country holds record of all cities with terminal_list
                                                            */
var schemaFetch = exports.schemaFetch = {
    id: _joi2.default.number().optional(),
    offset: _joi2.default.number().optional(),
    limit: _joi2.default.number().optional(),
    fields: _joi2.default.string().optional()
};

var schemaCreate = exports.schemaCreate = {
    name: _joi2.default.string().trim().required(),
    iso2: _joi2.default.string().trim().required(),
    iso3: _joi2.default.string().trim().required(),
    callingCodes: _joi2.default.string().required(),
    currencies: _joi2.default.string().required(),
    ioc: _joi2.default.string().trim().required(),
    languages: _joi2.default.string().required(),
    status: _joi2.default.string().trim().required(),
    created_by: _joi2.default.number().required()
};

var schemaUpdate = exports.schemaUpdate = {
    name: _joi2.default.string().trim().optional(),
    iso2: _joi2.default.string().trim().optional(),
    iso3: _joi2.default.string().trim().optional(),
    callingCodes: _joi2.default.string().optional(),
    currencies: _joi2.default.string().optional(),
    ioc: _joi2.default.string().trim().optional(),
    languages: _joi2.default.string().optional(),
    status: _joi2.default.string().trim().optional(),
    updated_by: _joi2.default.number().required()
};

var schema = {
    id: { type: Sequelize.INTEGER(11), primaryKey: true, autoIncrement: true },
    name: { type: Sequelize.STRING },
    iso2: { type: Sequelize.STRING },
    iso3: { type: Sequelize.STRING },
    callingCodes: { type: Sequelize.STRING },
    currencies: { type: Sequelize.STRING },
    ioc: { type: Sequelize.STRING },
    languages: { type: Sequelize.STRING },
    status: { type: Sequelize.STRING },
    created_by: { type: Sequelize.INTEGER(11), defaultValue: 1 },
    updated_by: { type: Sequelize.INTEGER(11) }
};

var options = {
    timestamps: true,
    paranoid: true,
    underscored: true,
    freezeTableName: true
};
var Country = _sequelize3.default.define("country", schema, options);
_sequelize3.default.sync().then(function () {
    return Country.sync({ force: force }).then(function () {
        return Country.bulkCreate(_table2.default);
    });
});

exports.default = Country;
//# sourceMappingURL=model.js.map