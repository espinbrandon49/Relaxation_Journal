const db = require('../config/connection');
const {Entry} = require('../models');

const entryData = require("./entries.json");

db.once('open', async () => {
  await Entry.deleteMany({});
  await Entry.insertMany(entryData);
  console.log(entryData);
  process.exit(0);
});