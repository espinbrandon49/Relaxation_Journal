const express = require("express");
const db = require("./config/connection");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

//TEST CONNECTION
app.get("/", (req, res) => {
  res.send("Server is running...")
});

db.once('open', () => {
  app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}`));
});