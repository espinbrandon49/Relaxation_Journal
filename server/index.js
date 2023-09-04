const express = require("express");
const controllers = require("./controllers")
require("dotenv").config();
const db = require("./config/connection");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

/**
 * instructions to deploy onrender 
 * https://www.youtube.com/watch?v=MTPb4smwpU8 
 * when u switch from localhost to live https, make sure u
 * are requesting from the backend in your client directory requests
 * 
 */

app.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.send("API is running..");
});

app.use(controllers);

db.once('open', () => {
  app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}`));
});