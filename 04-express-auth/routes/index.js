const express = require("express");
const router = express.Router();

const authRoute = require("./auth.router");
const moviesRoute = require("./movies.router");
const usersRoute = require("./users.router");

router.use("/auth", authRoute);
router.use("/movies", moviesRoute);
router.use("/users", usersRoute);

module.exports = router;
