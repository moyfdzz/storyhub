import express from "express";
import { addMedia } from "../controllers/userMedia.controller.js";

const router = express.Router();

router.put("/addMedia", addMedia);

export default router;
