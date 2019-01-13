"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

require("babel-polyfill");

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _compression = require("compression");

var _compression2 = _interopRequireDefault(_compression);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require("morgan");

var _morgan2 = _interopRequireDefault(_morgan);

var _dotenv = require("dotenv");

var _dotenv2 = _interopRequireDefault(_dotenv);

var _cors = require("cors");

var _cors2 = _interopRequireDefault(_cors);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _helmet = require("helmet");

var _helmet2 = _interopRequireDefault(_helmet);

var _api = require("./api");

var _api2 = _interopRequireDefault(_api);

var _database = require("./config/database");

var _database2 = _interopRequireDefault(_database);

var _sequelize = require("./config/sequelize");

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

// import routes

var port = process.env.PORT || 3000;

var app = (0, _express2.default)();

app.use((0, _helmet2.default)());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(_bodyParser2.default.json({ limit: "10mb" }));
app.use((0, _morgan2.default)("dev"));
app.use((0, _cors2.default)());
app.use((0, _compression2.default)());

var defaultPath = _path2.default.join(__dirname, "/public");
app.use(_express2.default.static(defaultPath));

app.get("/", function (req, res) {
    console.log("defaultPath ", defaultPath);
    res.render(defaultPath + "/index.html");
    // res.sendFile(path.join(defaultPath));
    // res.send(`<h1>Click to View <a href='${defaultPath}'>API Documentation</a></h1>`);
});

// modify request object
app.use(function (req, res, next) {
    res.locals.userId = 0.0;
    res.locals.userType = "anonymous";
    res.locals.role = "";
    next();
});

// Use Routes
app.use("/api", _api2.default);

app.use(function (req, res, next) {
    var error = new Error("Not found!");
    error.status = 404;
    next(error);
});

app.use(function (error, req, res, next) {
    res.status(error.status || 500);
    res.json({
        error: {
            message: "Telixia API says " + error.message
        }
    });
    next();
});

// listen for requests
app.listen(port, function () {
    console.log("Server is listening on port " + port);
});

_database2.default.query("SELECT 1 + 1 AS solution", function (err, result, fields) {
    if (err) console.log("\n=======\nDatabase Error.\n" + err.message);
    if (result && result[0].solution === 2) {
        console.log("\n=======\nDatabase is ready!\n=======\n");
    } else {
        console.log("\n=======\nDatabase is yet not ready!\n" + result);
    }
});

_sequelize2.default.authenticate().then(function () {
    console.log("\nConnection has been established successfully.\n");
}).catch(function (err) {
    console.error("\nUnable to connect to the database:\n", err.message);
});

exports.default = app;
//# sourceMappingURL=app.js.map