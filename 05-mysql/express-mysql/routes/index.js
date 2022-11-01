const express = require('express');
const router = express.Router()

const productRouter = require("./product.router")

router.use("/product", productRouter)
// router.use("/person", personRouter)
// router.use("/fav-product", favProductRouter)

module.exports = router