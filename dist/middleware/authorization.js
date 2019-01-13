"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.checkAuth = checkAuth;
exports.isValidStaff = isValidStaff;
exports.isValidTrainee = isValidTrainee;
exports.isValidCustomer = isValidCustomer;

var _jsonwebtoken = require("jsonwebtoken");

var _constants = require("../constants");

var _response = require("../lib/response");

var _helpers = require("../lib/helpers");

// Retrieve token from request header
function getToken(req) {
    if (req.headers.authorization && req.headers.authorization.split(" ")[0] === "Bearer") {
        return req.headers.authorization.split(" ")[1];
    }if (req.query && (0, _helpers.hasProp)(req.query, "token")) {
        return req.query.token;
    }
    return null;
}

function checkAuth(req, res, next) {
    var token = getToken(req);
    if (!token) return (0, _response.fail)(res, 403, "No token found in request header!");
    return (0, _jsonwebtoken.verify)(token, _constants.JWT.jwtSecret, function (err, decoded) {
        if (err) return (0, _response.fail)(res, 500, "Failed to authenticate token.!");
        req.user = { userType: decoded.userType, id: decoded.id, email: decoded.email };
        return next();
    });
}

function isValidStaff(req, res, next) {
    var _req$user = req.user,
        userType = _req$user.userType,
        id = _req$user.id,
        email = _req$user.email;

    if (userType !== "staff") return (0, _response.fail)(res, 403, "Invalid Staff credentials!");
    if (req.method === "POST") {
        req.body.created_by = id;
    } else if (req.method === "PUT") {
        req.body.updated_by = id;
    }
    console.log("\nValidating Staff: ", userType, id, email);
    return next();
}

function isValidTrainee(req, res, next) {
    var _req$user2 = req.user,
        userType = _req$user2.userType,
        id = _req$user2.id,
        email = _req$user2.email;

    if (userType !== "trainee") return (0, _response.fail)(res, 403, "Invalid Trainee credentials!");
    if (req.method === "POST") {
        req.body.created_by = id;
    } else if (req.method === "PUT") {
        req.body.updated_by = id;
    }
    console.log("\nValidating Trainee: ", userType, id, email);
    return next();
}

function isValidCustomer(req, res, next) {
    var _req$user3 = req.user,
        userType = _req$user3.userType,
        id = _req$user3.id,
        email = _req$user3.email;

    if (userType !== "customer") return (0, _response.fail)(res, 403, "Invalid Customer credentials!");
    if (req.method === "POST") {
        req.body.created_by = id;
    } else if (req.method === "PUT") {
        req.body.updated_by = id;
    }
    console.log("\nValidating Customer: ", userType, id, email);
    return next();
}
//# sourceMappingURL=authorization.js.map