"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mysql = require("mysql");

var _mysql2 = _interopRequireDefault(_mysql);

var _util = require("util");

var _util2 = _interopRequireDefault(_util);

var _credentials = require("./credentials");

var _credentials2 = _interopRequireDefault(_credentials);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Setup MySQL Connection  Pool
var pool = _mysql2.default.createPool(_credentials2.default);

pool.getConnection(function (err, connection) {
    if (err) {
        if (err.code === "PROTOCOL_CONNECTION_LOST") {
            console.error("Database connection was closed.");
        }
        if (err.code === "ER_CON_COUNT_ERROR") {
            console.error("Database has too many connections.");
        }
        if (err.code === "ECONNREFUSED") {
            console.error("Database connection was refused.");
        }
    }
    if (connection) connection.release();
});

// Promisify for Node.js async/await.
pool.query = _util2.default.promisify(pool.query);

exports.default = pool;
//# sourceMappingURL=database.js.map