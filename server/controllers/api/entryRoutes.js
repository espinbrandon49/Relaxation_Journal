const router = require('express').Router();
const { Entry } = require("../../models");

router.get('/journal', async (req, res) => {
  Entry.find().populate("postedBy").then((result) => {
    res.send(result)
  })
});

router.post('/journal', (req, res) => {
  const entry = req.body.tempEntry;
  try {
    Entry.create({ ...entry })
    res.json("added entry")
  } catch (error) {
    console.log(error);
    res.status(500).json(error)
  }
});

module.exports = router;