import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authenticationRoutes from "./routes/authentication.routes.js";
import userRoutes from "./routes/user.routes.js";
import mediaRoutes from "./routes/media.routes.js";
import animeRoutes from "./routes/anime.routes.js";
import userMediaRoutes from "./routes/userMedia.routes.js";

import { connectDB } from "./lib/db.js";

dotenv.config();

const app = express();

app.use(express.json());

// Allows you to access to the cookies
app.use(cookieParser());

const PORT = process.env.PORT || 3000;

app.use("/api/auth", authenticationRoutes);
app.use("/api/user", userRoutes);
app.use("/api/anime", animeRoutes);
app.use("/api/userMedia", userMediaRoutes);
app.use("/api/media", mediaRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);

  connectDB();
});
