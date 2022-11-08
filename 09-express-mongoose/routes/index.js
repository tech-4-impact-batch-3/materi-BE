const express = require('express');
const router = express.Router()

const userRouter = require('./user.router');

router.use("/user", userRouter)
// router.use("/psikolog")
// router.use("/aarticle")

module.exports = router
