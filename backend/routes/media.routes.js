import express from "express";
import { getMedia } from "../controllers/media.controller.js";

const router = express.Router();

router.post("/getMedia", getMedia);

export default router;
