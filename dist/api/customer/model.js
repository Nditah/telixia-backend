"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.schemaUpdate = exports.schemaCreate = exports.schemaFetch = exports.schemaLogin = undefined;

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
                                                            * @property {Number} id Customer primaryKey
                                                            * @property {String} customer type "INDIVIDUAL", "ORGANIZATION"
                                                            * @property {String} title
                                                            * @property {String} surname Customer surname (required)
                                                            * @property {String} other_name Customer other name (required)
                                                            * @property {String} gender Customer gender (required)
                                                            * @property {Date} birth_date Customer date of birth
                                                            * @property {String} phone Customer phone number (required)
                                                            * @property {String} email Customer email address
                                                            * @property {String} password Customer password for accessing the App
                                                            * @property {String} otp Customer one-time-password for accessing the App
                                                            * @property {Number} otp_count Number of times OTP has been used without successful transaction
                                                            * @property {String} contact_person Customer next-of-kin, or contact person
                                                            * @property {String} contact_person_phone Customer next-of-kin, or contact person phone
                                                            * @property {String} product Customer products of services of interest
                                                            * @property {String} photo Customer photo url
                                                            * @property {String} address Customer residential or work address
                                                            * @property {String} country_iso2 Customer country of residence (required)
                                                            * @property {Boolean} is_pmt_client assert that client is also a PMT customer
                                                            * @property {Boolean} is_pesl_client assert that client is also a PESL customer
                                                            * @property {Boolean} is_pet_client assert that client is also a PET customer
                                                            * @property {Boolean} is_shop_client assert that client is also a SHOP customer
                                                            * @property {Boolean} is_tenant assert if customer is a depot tenant
                                                            * @property {Boolean} is_phone_verified phone verification status
                                                            * @property {Boolean} is_email_verified email verification status
                                                            * @property {String} remark comment about customer
                                                            * @property {Number} created_by (required) id of the staff who created the record
                                                            * @property {Number} updated_by id of the staff who created the record
                                                            * @description Records of all company customers.
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
    customer_type: _joi2.default.string().trim().required(),
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
    is_pmt_client: _joi2.default.boolean().optional(),
    is_pesl_client: _joi2.default.boolean().optional(),
    is_pet_client: _joi2.default.boolean().optional(),
    is_shop_client: _joi2.default.boolean().optional(),
    is_tenant: _joi2.default.boolean().optional(),
    is_phone_verified: _joi2.default.boolean().optional(),
    is_email_verified: _joi2.default.boolean().optional(),
    remark: _joi2.default.string().optional(),
    created_by: _joi2.default.number().required()
};

var schemaUpdate = exports.schemaUpdate = {
    customer_type: _joi2.default.string().trim().optional(),
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
    is_pmt_client: _joi2.default.boolean().optional(),
    is_pesl_client: _joi2.default.boolean().optional(),
    is_pet_client: _joi2.default.boolean().optional(),
    is_shop_client: _joi2.default.boolean().optional(),
    is_tenant: _joi2.default.boolean().optional(),
    is_phone_verified: _joi2.default.boolean().optional(),
    is_email_verified: _joi2.default.boolean().optional(),
    remark: _joi2.default.string().optional(),
    updated_by: _joi2.default.number().required()
};

var schema = {
    id: { type: Sequelize.INTEGER(11), primaryKey: true, autoIncrement: true },
    customer_type: {
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
    is_pmt_client: { type: Sequelize.BOOLEAN, defaultValue: false },
    is_pesl_client: { type: Sequelize.BOOLEAN, defaultValue: false },
    is_pet_client: { type: Sequelize.BOOLEAN, defaultValue: false },
    is_shop_client: { type: Sequelize.BOOLEAN, defaultValue: false },
    is_tenant: { type: Sequelize.BOOLEAN, defaultValue: false },
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
var Customer = _sequelize3.default.define("customer", schema, options);
_sequelize3.default.sync().then(function () {
    return Customer.sync({ force: force }).then(function () {
        return Customer.bulkCreate(_table2.default);
    });
});

exports.default = Customer;
//# sourceMappingURL=model.js.map