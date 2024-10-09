import express from "express";
import { getAnimeByTitle } from "../controllers/anime.controller.js";

const router = express.Router();

router.get("/search/:title", getAnimeByTitle);

export default router;
