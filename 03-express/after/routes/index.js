const express = require("express");
const router = express.Router();
const moviesRoute = require("./movies.route");

// localhost:7000
router.get("/", (req, res) => {
  res.send({
    status: "success",
    message: "welcome",
  });
});

// localhost:7000/movies
router.use("/movies", moviesRoute);

module.exports = router;
