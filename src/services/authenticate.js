import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import * as Sequelize from "sequelize";
import Admin from "../api/admin/model";
import Talent from "../api/talent/model";
import Client from "../api/client/model";
import { JWT } from "../constants";

const { Op } = Sequelize;

export function adminAuthenticate(params) {
    // return next();
    const { email, phone_office: phone, otp, password } = params;
    return Admin.findOne({
        where: {
            [ Op.or ]: [{ email }, { phone_office: phone }],
        },
        raw: true,
    })
    // eslint-disable-next-line complexity
        .then((user) => {
            if (!user) { throw new Error("Authentication failed. User not found."); }
            if (!(bcryptjs.compareSync(password || "", user.password)
            || bcryptjs.compareSync(otp || "", user.otp))) {
                throw new Error("Authentication failed. Wrong password or otp.");
            }
            const payload = {
                id: user.id,
                userType: "admin",
                email: user.email,
                phone_office: user.phone_office,
                office_id: user.office_id,
                time: new Date(),
            };

            const token = jwt.sign(payload, JWT.jwtSecret, {
                expiresIn: JWT.tokenExpireTime,
            });
            return token;
        });
}

export function talentAuthenticate(params) {
    // return next();
    const { email, phone_office: phone, otp, password } = params;
    return Talent.findOne({
        where: {
            [ Op.or ]: [{ email }, { phone_office: phone }],
        },
        raw: true,
    })
    // eslint-disable-next-line complexity
        .then((user) => {
            if (!user) { throw new Error("Authentication failed. talent not found."); }
            if (!(bcryptjs.compareSync(password || "", user.password)
            || bcryptjs.compareSync(otp || "", user.otp))) {
                throw new Error("Authentication failed. Wrong password or otp.");
            }
            const payload = {
                id: user.id,
                userType: "talent",
                email: user.email,
                phone_office: user.phone_office,
                vehicle_id: user.vehicle_id,
                time: new Date(),
            };

            const token = jwt.sign(payload, JWT.jwtSecret, {
                expiresIn: JWT.tokenExpireTime,
            });
            return token;
        });
}

export function clientAuthenticate(params) {
    // return next();
    const { email, phone, otp, password } = params;
    return Client.findOne({
        where: {
            [ Op.or ]: [{ email }, { phone }],
        },
        raw: true,
    })
    // eslint-disable-next-line complexity
        .then((user) => {
            if (!user) { throw new Error("Authentication failed. Client not found."); }
            if (!(bcryptjs.compareSync(password || "", user.password)
            || bcryptjs.compareSync(otp || "", user.otp))) {
                throw new Error("Authentication failed. Wrong password or otp.");
            }
            const payload = {
                id: user.id,
                userType: "client",
                email: user.email,
                phone: user.phone,
                time: new Date(),
            };

            const token = jwt.sign(payload, JWT.jwtSecret, {
                expiresIn: JWT.tokenExpireTime,
            });
            return token;
        });
}
