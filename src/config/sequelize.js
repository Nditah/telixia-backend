import Sequelize from "sequelize";
import credentials from "./credentials";

const sequelize = new Sequelize(credentials.database, credentials.user, credentials.password,
    {
        host: credentials.host,
        dialect: "mysql",
        operatorsAliases: false,
        pool: {
            max: 5,
            min: 1,
            acquire: 30000,
            idle: 10000,
        },
        retry: {
            match: [
                /ETIMEDOUT/,
                /EHOSTUNREACH/,
                /ECONNRESET/,
                /ECONNREFUSED/,
                /ETIMEDOUT/,
                /ESOCKETTIMEDOUT/,
                /EHOSTUNREACH/,
                /EPIPE/,
                /EAI_AGAIN/,
                /SequelizeConnectionError/,
                /SequelizeConnectionRefusedError/,
                /SequelizeHostNotFoundError/,
                /SequelizeHostNotReachableError/,
                /SequelizeInvalidConnectionError/,
                /SequelizeConnectionTimedOutError/,
            ],
            max: 5,
        },
        logging: false,
    });

export default sequelize;
