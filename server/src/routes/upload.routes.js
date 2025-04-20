import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { uploadPDF } from "../controllers/upload.controller.js";

const router = Router();

router.route("/pdf").post(upload.single("pdf"), uploadPDF);

export default router;
