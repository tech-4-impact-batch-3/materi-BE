const express = require("express");
const router = express.Router();

const movies = [{ id: 1, nama: "harry potter" }];

// http://localhost:3000/movies
router.get("/", (req, res) => {
  res.json({
    data: movies,
    message: "moviess",
  });
});

module.exports = router;
