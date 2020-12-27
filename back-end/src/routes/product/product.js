const express = require('express');
const router = express.Router();
const {authorAdmin,authJWT,upload} = require('../../middlewares/index');
const {createProduct} = require('../../controllers/product/productController');


router.post('/create',authJWT,upload.array('productPictures',3),createProduct);

module.exports = router;