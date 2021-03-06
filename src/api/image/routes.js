/**
 * @author Nditah
 * @apiDescription Generic Features: Image routes
 */

import express from "express";
import appRoot from "app-root-path";
import { checkAuth, isValidAdmin } from "../../middleware/authorization";
import { addImageAws, createRecord, fetchRecord, updateRecord, deleteRecord } from "./controller";

const router = express.Router();

/**
 * @api {get} /api/upload to get the form for uploading images
 * @apiName RetrieveUploadForm
 * @apiGroup Image
 * @apiDescription The sample form allows you to test the API by uploading
 * and image and entering the image name that would be saved on db
 */
router.get("/upload", (req, res) => {
    res.sendFile(`${appRoot}/src/upload/index.html`);
});

/**
 * @api {get} /api/images?{query} Retrieve all image-assets
 * @apiName RetrieveImages
 * @apiGroup Image
 * @apiHeader {String} Authorization authorization token
 * @apiDescription image-assets name and url are stored on db. The images themselves
 * are stored on the AWS Bucket. The url points to it.
 * @apiSuccess {Object[]} rows List of image-assets.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/images", fetchRecord);

/**
 * @api {post} /api/images Create image-assets
 * @apiName CreateImage
 * @apiGroup Image
 * @apiHeader {String} Authorization authorization token
 * @apiParam {String} name required image-asset name
 * @apiParam {File} image required image-asset
 * @apiSuccess {Object} image-asset record's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiDescription Images uploaded to this endpoint are stored locally
 * on the backend server. This is only a fall back option when AWS is
 * no longer available.
 */
router.post("/images", [checkAuth, isValidAdmin], createRecord);

/**
 * @api {post} /api/images-aws Create image-assets
 * @apiName CreateImageAws
 * @apiGroup Image
 * @apiHeader {String} Authorization authorization token
 * @apiParam {String} name required image-asset name
 * @apiParam {File} image required image-asset
 * @apiSuccess {Object} image-asset record's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiDescription Images uploaded to this endpoint are stored on AWS.
 */
router.post("/images-aws", [checkAuth, isValidAdmin], addImageAws);

/**
 * @api {put} /api/images/{ImageId} Update image-assets
 * @apiName UpdateImage
 * @apiGroup Image
 * @apiHeader {String} Authorization authorization token
 * @apiParam {String} name required image-asset name
 * @apiParam {String} url required image-asset url on cloud
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.put("/images/:recordId", [checkAuth, isValidAdmin], updateRecord);

/**
 * @api {delete} /api/images/{recordId} Delete image-assets
 * @apiName DeleteImage
 * @apiGroup Image
 * @apiHeader {String} Authorization authorization token
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 image-asset not found.
 */
router.delete("/images/:recordId", [checkAuth, isValidAdmin], deleteRecord);

export default router;
