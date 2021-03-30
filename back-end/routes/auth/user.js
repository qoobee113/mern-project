const express = require('express');
const router = express.Router();
const middlewares = require('../../middlewares/index');
const UserController = require('../../controllers/user/userController');
const validator = require('../../helpers/index');



router.post('/signin',validator.validatorSignIn,validator.isErrorValidator,UserController.signin);

router.post('/signup',validator.validatorSignUp,validator.isErrorValidator,UserController.signup);

router.get('/profile',middlewares.authJWT,UserController.profile);

module.exports = router;