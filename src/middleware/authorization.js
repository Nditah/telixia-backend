import { verify } from "jsonwebtoken";
import { JWT } from "../constants";
import { fail } from "../lib/response";
import { hasProp } from "../lib/helpers";

// Retrieve token from request header
function getToken(req) {
    if (req.headers.authorization && req.headers.authorization.split(" ")[ 0 ] === "Bearer") {
        return req.headers.authorization.split(" ")[ 1 ];
    } if (req.query && hasProp(req.query, "token")) {
        return req.query.token;
    }
    return null;
}

export function checkAuth(req, res, next) {
    const token = getToken(req);
    if (!token) return fail(res, 403, "No token found in request header!");
    return verify(token, JWT.jwtSecret, (err, decoded) => {
        if (err) return fail(res, 500, "Failed to authenticate token.!");
        req.user = { userType: decoded.userType, id: decoded.id, email: decoded.email };
        return next();
    });
}

export function isValidAdmin(req, res, next) {
    const { userType, id, email } = req.user;
    if (userType !== "admin") return fail(res, 403, "Invalid Admin credentials!");
    if (req.method === "POST") {
        req.body.created_by = id;
    } else if (req.method === "PUT") {
        req.body.updated_by = id;
    }
    console.log("\nValidating Admin: ", userType, id, email);
    return next();
}

export function isValidTrainee(req, res, next) {
    const { userType, id, email } = req.user;
    if (userType !== "trainee") return fail(res, 403, "Invalid Trainee credentials!");
    if (req.method === "POST") {
        req.body.created_by = id;
    } else if (req.method === "PUT") {
        req.body.updated_by = id;
    }
    console.log("\nValidating Trainee: ", userType, id, email);
    return next();
}

export function isValidCustomer(req, res, next) {
    const { userType, id, email } = req.user;
    if (userType !== "customer") return fail(res, 403, "Invalid Customer credentials!");
    if (req.method === "POST") {
        req.body.created_by = id;
    } else if (req.method === "PUT") {
        req.body.updated_by = id;
    }
    console.log("\nValidating Customer: ", userType, id, email);
    return next();
}
