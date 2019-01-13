/**
 * @description Common Module Routes
 */
import express from "express";

import 	clientRoute from "./client";
import 	contactUsRoute from "./contact-us";
import 	countryRoute from "./country";
import 	imageRoute from "./image";
import 	invoiceRoute from "./invoice";
import 	settingRoute from "./setting";
import 	staffRoute from "./staff";
import 	talentRoute from "./talent";

const router = express.Router();

// Use Routes
router.use(clientRoute);
router.use(contactUsRoute);
router.use(countryRoute);
router.use(imageRoute);
router.use(invoiceRoute);
router.use(settingRoute);
router.use(staffRoute);
router.use(talentRoute);

export default router;
