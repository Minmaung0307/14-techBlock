const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello, Ko Min Maung</h1>");
});

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`);
});
