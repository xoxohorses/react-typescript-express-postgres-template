const express = require("express");
const app = express();
const port = 3001; // use a different port from your React app

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
