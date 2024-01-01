import cors from "cors";
import express from "express";

import { sharedFunction } from "../shared/utils.js";
import { getUsers } from "./routes/user.js";

const app = express();
const port = 3001;

const corsOptions = {
  origin: "http://localhost:3000",
  methods: ["GET", "PATCH", "POST"],
};

app.use(cors(corsOptions));
app.use(express.json({ type: "application/json" }));

app.get("/", async (req, res) => {
  sharedFunction();
  res.send("Express server working!");
});

app.get("/user", async (req, res) => {
  sharedFunction();
  const result = await getUsers();

  if (result.status === "success") {
    console.log({ result });
    res.status(200).json(result.data);
  } else {
    res.status(500).json("Something went wrong!");
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
