import express from "express";
import dotenv from "dotenv";

import userRoutes from "./routes/user.routes.js";
import mediaRoutes from "./routes/media.routes.js";
import animeRoutes from "./routes/anime.routes.js";

import { connectDB } from "./lib/db.js";

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/api/user", userRoutes);
app.use("/api/anime", animeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);

  connectDB();
});
