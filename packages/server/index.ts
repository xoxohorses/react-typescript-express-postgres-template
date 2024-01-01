import cors from "cors";
import express from "express";

import { sharedFunction } from "../shared/utils.js";
import apiRouter from "./routes/index.js";

const app = express();
const port = 3001;

const corsOptions = {
  origin: "http://localhost:3000",
  methods: ["GET", "PATCH", "POST"],
};

app.use(cors(corsOptions));
app.use(express.json({ type: "application/json" }));

// Modify routes in /routes/index.ts
app.use("/api", apiRouter);

app.get("/", async (req, res) => {
  sharedFunction();
  res.send("Express server working!");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
