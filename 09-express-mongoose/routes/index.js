const express = require('express');
const router = express.Router()

const userRouter = require('./user.router');
const tugasRouter = require('./tugas.router');

router.use("/user" ,userRouter)
router.use("/tugas", tugasRouter)
// router.use("/aarticle")

module.exports = router
