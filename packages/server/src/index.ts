import express from "express";

const app = express();
const port = 3001;

app.use(express.json({ type: "application/json" }));

app.get("/", (req, res) => {
  res.send("Express server working!");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
