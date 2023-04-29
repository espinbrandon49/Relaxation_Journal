const router = require('express').Router();
const entryRoutes = require('./entryRoutes');

router.use("/entry", entryRoutes);

module.exports = router;