const express = require('express');
const router = express.Router();
const {authorAdmin,authJWT} = require('../../middlewares/index');
const {addItemToCart} = require('./../../controllers/cart/cartController');



router.post('/add-to-cart',authJWT,addItemToCart);

module.exports = router;