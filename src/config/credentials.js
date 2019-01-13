import dotenv from "dotenv";

dotenv.config();

const getCredentials = () => {
    const development = {
        host: "localhost",
        port: 3306,
        user: "nditahco_user",
        password: "getsPass1234",
        database: "nditahco_db",
        connectionLimit: 15,
        queueLimit: 30,
        acquireTimeout: 1000000,
    };

    const production = {
        host: process.env.MYSQL_HOST,
        port: process.env.MYSQL_PORT,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        connectionLimit: 15,
        queueLimit: 30,
        acquireTimeout: 1000000,
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

const credentials = getCredentials();

export default credentials;
