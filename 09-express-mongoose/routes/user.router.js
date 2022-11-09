const express = require("express");
const router = express.Router();

const {
  getAllUser,
  getUserByID,
  addUser,
  deleteUserByID,
  updateUserByID,
  login,
} = require("../controllers/user.controller");

router.get("/", getAllUser);
router.get("/:id", getUserByID);
router.post("/", addUser);
router.delete("/:id", deleteUserByID);
router.put("/:id", updateUserByID);
router.post("/login", login);

module.exports = router;
