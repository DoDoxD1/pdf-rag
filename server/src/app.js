import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

const app = express();

// app configurations
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// importing routes

import uploadRouter from "./routes/upload.routes.js";

//routes declaration
app.use("/api/v1/upload", uploadRouter);

export { app };
