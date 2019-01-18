import "babel-polyfill";
import express from "express";
import compression from "compression";
import bodyParser from "body-parser";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import helmet from "helmet";

// import routes
import api from "./api";
import pool from "./config/database";
import sequelize from "./config/sequelize";

dotenv.config();
const port = process.env.PORT || 3000;

const app = express();

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: "10mb" }));
app.use(morgan("dev"));
app.use(cors());
app.use(compression());

const defaultPath = path.join(__dirname, "/public");
app.use(express.static(defaultPath));

app.get("/", (req, res) => {
    console.log("defaultPath ", defaultPath);
    res.render(`${defaultPath}/index.html`);
    // res.sendFile(path.join(defaultPath));
    // res.send(`<h1>Click to View <a href='${defaultPath}'>API Documentation</a></h1>`);
});

// modify request object
app.use((req, res, next) => {
    res.locals.userId = 0;
    res.locals.userType = "anonymous";
    res.locals.role = "";
    next();
});

// Use Routes
app.use("/api", api);

app.use((req, res, next) => {
    const error = new Error("Not found!");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: `Telixia API says ${error.message}`,
        },
    });
    next();
});

// listen for requests
app.listen(port, () => {
    console.log(`\n=======\nServer is listening on port ${port}`);
});

pool.query("SELECT 1 + 1 AS solution", (err, result, fields) => {
    if (err) console.log(`\n=======\nDatabase Error.\n${err.message}`);
    if (result && result[ 0 ].solution === 2) {
        console.log("\n=======\nDatabase is ready!\n=======\n");
    } else {
        console.log(`\n=======\nDatabase is yet not ready!\n${result}`);
    }
});

sequelize
    .authenticate()
    .then(() => {
        console.log("\nConnection has been established successfully.\n");
    })
    .catch((err) => {
        console.error("\nUnable to connect to the database:\n", err.message);
    });

export default app;
