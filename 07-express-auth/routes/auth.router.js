const express = require("express");
const router = express.Router();

const users = [{ id: 1, nama: "dollong", password: 123 }];

// http://localhost:3000/auth/login
router.post("/login", (req, res) => {
   const data = req.body
   console.log(data, 'data');
    
  res.json({
    message: "success login",
    token: "asdf",
  });
});

// http://localhost:3000/auth/register
router.post("/register", (req, res) => {
  res.json({
    message: "success regis",
  });
});

module.exports = router;
