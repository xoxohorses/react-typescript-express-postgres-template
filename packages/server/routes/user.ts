import { Router } from "express";

import * as db from "../db/index.js";

const router = Router();

router.get("/", async (req, res) => {
  const text = "SELECT * FROM users";

  const result = await db.query({ text });

  if (result.status === "success") {
    console.log({ result });
    res.status(200).json(result.data?.rows);
  } else {
    res.status(500).json("Something went wrong!");
  }
});

export default router;
