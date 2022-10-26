const express = require("express");
const router = express.Router();

const {
  getMovies,
  getDetailMovies,
} = require("../controller/movies.controller");

router.get("/", getMovies);
router.get("/:id", getDetailMovies);

module.exports = router;
