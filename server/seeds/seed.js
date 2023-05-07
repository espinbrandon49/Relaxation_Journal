const db = require('../config/connection');
const {Entry, User} = require('../models');

const entryData = require("./entries.json");
const userData = require("./users.json");

db.once('open', async () => {
  await Entry.deleteMany({});
  // await User.deleteMany({});
  await Entry.insertMany(entryData);
  // await User.insertMany(userData);
  console.log(entryData);
  // console.log(userData);
  process.exit(0);
});