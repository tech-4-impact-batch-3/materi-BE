const express = require("express");
const router = express.Router();
const moviesRoute = require("./movies.router");

router.get("/", (req, res) => {
  res.send({
    status: "success",
    message: "welcome",
  });
});

router.use("/movies", moviesRoute);

module.exports = router;
