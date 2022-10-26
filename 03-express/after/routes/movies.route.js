const express = require("express");
const router = express.Router();

const {
  getMovies,
  getDetailMovies,
} = require("../controller/movies.controller");

// localhost:7000/movies
router.get("/", getMovies);

// localhost:7000/movies/:id
router.get("/:id", getDetailMovies);

module.exports = router;
