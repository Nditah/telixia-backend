"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dotenv = require("dotenv");

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

var getCredentials = function getCredentials() {
    var development = {
        host: "localhost",
        port: 3306,
        user: "sample_user",
        password: "sample_pass",
        database: "sample_db",
        connectionLimit: 15,
        queueLimit: 30,
        acquireTimeout: 1000000
    };

    var production = {
        host: process.env.MYSQL_HOST,
        port: process.env.MYSQL_PORT,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        connectionLimit: 15,
        queueLimit: 30,
        acquireTimeout: 1000000
    };

    switch (process.env.NODE_ENV) {
        case "development":
            return development;

        case "production":
            return production;

        default:
            return development;
    }
};

var credentials = getCredentials();

exports.default = credentials;
//# sourceMappingURL=credentials.js.map