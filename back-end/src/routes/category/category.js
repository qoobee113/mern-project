const express = require('express');
const router = express.Router();
const {authorAdmin,authJWT} = require('../../middlewares/index');
const {createCategory,getAllCategories} = require('../../controllers/category/categoryController');


router.get('/getall',authJWT,authorAdmin,getAllCategories)
.post('/create',authJWT,authorAdmin,createCategory);

module.exports = router;