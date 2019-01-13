"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.schema = exports.schemaUpdate = exports.schemaCreate = exports.schemaFetch = exports.schemaLogin = undefined;

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
                                                            * @property {Number} id Talent primaryKey
                                                            * @property {String} talent type "INDIVIDUAL", "ORGANIZATION"
                                                            * @property {String} title
                                                            * @property {String} surname Talent surname (required)
                                                            * @property {String} other_name Talent other name (required)
                                                            * @property {String} gender Talent gender (required)
                                                            * @property {Date} birth_date Talent date of birth
                                                            * @property {String} phone Talent phone number (required)
                                                            * @property {String} email Talent email address
                                                            * @property {String} password Talent password for accessing the App
                                                            * @property {String} otp Talent one-time-password for accessing the App
                                                            * @property {Number} otp_count Number of times OTP has been used without successful transaction
                                                            * @property {String} contact_person Talent next-of-kin, or contact person
                                                            * @property {String} contact_person_phone Talent next-of-kin, or contact person phone
                                                            * @property {String} product Talent products of services of interest
                                                            * @property {String} photo Talent photo url
                                                            * @property {String} address Talent residential or work address
                                                            * @property {String} country_iso2 Talent country of residence (required)
                                                            * @property {String} packages Talent packages of interest
                                                            * @property {Boolean} is_phone_verified phone verification status
                                                            * @property {Boolean} is_email_verified email verification status
                                                            * @property {String} remark comment about talent
                                                            * @property {Number} created_by (required) id of the staff who created the record
                                                            * @property {Number} updated_by id of the staff who created the record
                                                            * @description Records of all company talents.
                                                            */
var schemaLogin = exports.schemaLogin = {
    email: _joi2.default.string().optional(),
    phone: _joi2.default.string().optional(),
    otp: _joi2.default.string().optional(),
    password: _joi2.default.string().optional()
};

var schemaFetch = exports.schemaFetch = {
    id: _joi2.default.number().optional(),
    offset: _joi2.default.number().optional(),
    limit: _joi2.default.number().optional(),
    fields: _joi2.default.string().optional()
};

var schemaCreate = exports.schemaCreate = {
    talent_type: _joi2.default.string().trim().required(),
    title: _joi2.default.string().optional(),
    surname: _joi2.default.string().required(),
    other_name: _joi2.default.string().required(),
    gender: _joi2.default.string().required(),
    birth_date: _joi2.default.date().optional(),
    phone: _joi2.default.string().required(),
    email: _joi2.default.string().optional(),
    password: _joi2.default.string().optional(),
    otp: _joi2.default.string().optional(),
    otp_count: _joi2.default.number().optional(),
    contact_person: _joi2.default.string().required(),
    contact_person_phone: _joi2.default.string().required(),
    product: _joi2.default.string().optional(),
    photo: _joi2.default.string().optional(),
    address: _joi2.default.string().optional(),
    country_iso2: _joi2.default.string().trim().required(),
    packages: _joi2.default.string().optional(),
    is_phone_verified: _joi2.default.boolean().optional(),
    is_email_verified: _joi2.default.boolean().optional(),
    remark: _joi2.default.string().optional(),
    created_by: _joi2.default.number().required()
};

var schemaUpdate = exports.schemaUpdate = {
    talent_type: _joi2.default.string().trim().optional(),
    title: _joi2.default.string().optional(),
    surname: _joi2.default.string().optional(),
    other_name: _joi2.default.string().optional(),
    gender: _joi2.default.string().optional(),
    birth_date: _joi2.default.date().optional(),
    phone: _joi2.default.string().optional(),
    email: _joi2.default.string().optional(),
    password: _joi2.default.string().optional(),
    otp: _joi2.default.string().optional(),
    otp_count: _joi2.default.number().optional(),
    contact_person: _joi2.default.string().optional(),
    contact_person_phone: _joi2.default.string().optional(),
    product: _joi2.default.string().optional(),
    photo: _joi2.default.string().optional(),
    address: _joi2.default.string().optional(),
    country_iso2: _joi2.default.string().trim().optional(),
    packages: _joi2.default.string().optional(),
    is_phone_verified: _joi2.default.boolean().optional(),
    is_email_verified: _joi2.default.boolean().optional(),
    remark: _joi2.default.string().optional(),
    updated_by: _joi2.default.number().required()
};

var schema = exports.schema = {
    id: { type: Sequelize.INTEGER(11), primaryKey: true, autoIncrement: true },
    talent_type: {
        type: Sequelize.ENUM(_constants.CUSTOMER_TYPE.INDIVIDUAL, _constants.CUSTOMER_TYPE.ORGANIZATION),
        defaultValue: _constants.CUSTOMER_TYPE.INDIVIDUAL,
        allowNull: false
    },
    title: { type: Sequelize.STRING },
    surname: { type: Sequelize.STRING, allowNull: false },
    other_name: { type: Sequelize.STRING, allowNull: false },
    gender: {
        type: Sequelize.ENUM(_constants.GENDER.MALE, _constants.GENDER.FEMALE),
        allowNull: false
    },
    birth_date: { type: Sequelize.DATEONLY },
    phone: { type: Sequelize.STRING, allowNull: false },
    email: { type: Sequelize.STRING },
    password: { type: Sequelize.STRING },
    otp: { type: Sequelize.STRING },
    otp_count: { type: Sequelize.INTEGER(11), allowNull: false, defaultValue: 0 },
    contact_person: { type: Sequelize.STRING, allowNull: false },
    contact_person_phone: { type: Sequelize.STRING, allowNull: false },
    product: { type: Sequelize.STRING },
    photo: { type: Sequelize.STRING },
    address: { type: Sequelize.STRING },
    country_iso2: { type: Sequelize.STRING(2), allowNull: false },
    packages: { type: Sequelize.STRING, defaultValue: false },
    is_phone_verified: { type: Sequelize.BOOLEAN, defaultValue: false },
    is_email_verified: { type: Sequelize.BOOLEAN, defaultValue: false },
    remark: { type: Sequelize.STRING },
    created_by: { type: Sequelize.INTEGER(11), allowNull: false },
    updated_by: { type: Sequelize.INTEGER(11) }
};

var options = {
    timestamps: true,
    paranoid: true,
    underscored: true,
    freezeTableName: true
};
var Talent = _sequelize3.default.define("talent", schema, options);
_sequelize3.default.sync().then(function () {
    return Talent.sync({ force: force }).then(function () {
        return Talent.bulkCreate(_table2.default);
    });
});

exports.default = Talent;
//# sourceMappingURL=model.js.map