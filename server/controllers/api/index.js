const router = require('express').Router();
const entryRoutes = require('./entryRoutes');
const userRoutes = require('./userRoutes');

router.use("/entry", entryRoutes);
router.use("/user", userRoutes);

module.exports = router;