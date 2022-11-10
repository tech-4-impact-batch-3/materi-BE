const express = require("express");
const router = express.Router();

router.get("/movies", (req, res) => {
  res.json({
    message: "success get movies",
  });
});

module.exports = router;
