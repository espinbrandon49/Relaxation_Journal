const router = require('express').Router();
const { Entry } = require("../../models");

router.get('/journal', async (req, res) => {
  Entry.find().then((result) => {
    res.send(result)
  })
});

module.exports = router;