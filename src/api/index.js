/**
 * @description Common Module Routes
 */
import express from "express";

import adminRoute from "./admin";
import bankRoute from "./bank";
import clientRoute from "./client";
import contactUsRoute from "./contact-us";
import countryRoute from "./country";
import imageRoute from "./image";
import invoiceRoute from "./invoice";
import packageRoute from "./package";
import settingRoute from "./setting";
import talentRoute from "./talent";

const router = express.Router();

// Use Routes
router.use(adminRoute);
router.use(bankRoute);
router.use(clientRoute);
router.use(contactUsRoute);
router.use(countryRoute);
router.use(imageRoute);
router.use(invoiceRoute);
router.use(packageRoute);
router.use(settingRoute);
router.use(talentRoute);

export default router;
