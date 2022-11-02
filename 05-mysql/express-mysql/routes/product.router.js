const express = require('express');
const router = express.Router()

const { getAllProduct, getProductByID } = require('../controllers/product.controller');

router.get("/", getAllProduct)
router.get("/:id", getProductByID)


module.exports = router