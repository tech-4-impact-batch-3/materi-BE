const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const movies = [{ id: 1, nama: "harry potter" }];

// http://localhost:3000/movies
router.get("/", (req, res) => {
  res.json({
    data: movies,
    message: "moviess",
  });
});

router.get("/subscribe", (req, res) => {
  try {
    const auth = req.headers.authorization; // Bearer tokennn
    const token = auth.split(" ")[1]; // tokennn

    jwt.verify(token, "asdfjsdaklf234234");

    res.json({
      data: movies,
      message: "subscribe moviess",
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
    });
  }
});

module.exports = router;
