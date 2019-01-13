"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _sequelize = require("sequelize");

var _sequelize2 = _interopRequireDefault(_sequelize);

var _credentials = require("./credentials");

var _credentials2 = _interopRequireDefault(_credentials);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sequelize = new _sequelize2.default(_credentials2.default.database, _credentials2.default.user, _credentials2.default.password, {
    host: _credentials2.default.host,
    dialect: "mysql",
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 1,
        acquire: 30000,
        idle: 10000
    },
    retry: {
        match: [/ETIMEDOUT/, /EHOSTUNREACH/, /ECONNRESET/, /ECONNREFUSED/, /ETIMEDOUT/, /ESOCKETTIMEDOUT/, /EHOSTUNREACH/, /EPIPE/, /EAI_AGAIN/, /SequelizeConnectionError/, /SequelizeConnectionRefusedError/, /SequelizeHostNotFoundError/, /SequelizeHostNotReachableError/, /SequelizeInvalidConnectionError/, /SequelizeConnectionTimedOutError/],
        max: 5
    },
    logging: false
});

exports.default = sequelize;
//# sourceMappingURL=sequelize.js.map