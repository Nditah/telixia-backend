import mysql from "mysql";
import util from "util";
import credentials from "./credentials";

// Setup MySQL Connection  Pool
const pool = mysql.createPool(credentials);

pool.getConnection((err, connection) => {
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
pool.query = util.promisify(pool.query);

export default pool;
