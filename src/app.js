import express from "express";
import cors from "cors";
import Routes from "./routes/Plants.routes.js";
const app = express();
app.use(
  cors({
    origin: [
      "https://singular-torrone-c436c2.netlify.app",
      "https://other-allowed-domain.com",
    ],
  })
);

app.use(express.json({ limit: "50mb" }));

app.use("/api/", Routes);

// app.use("/api/", commerceRoutes);

export default app;
