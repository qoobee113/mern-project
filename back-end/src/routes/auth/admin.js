const express = require('express');
const router = express.Router();
const middlewares = require('../../middlewares/index');
const UserController = require('../../controllers/user/userController');
const validator = require('../../helpers/index');


router.post('/signin',validator.validatorSignIn,validator.isErrorValidator,UserController.signin);

router.post('/signup',validator.validatorSignUp,validator.isErrorValidator,middlewares.authJWT,middlewares.authorAdmin,UserController.signupAdmin);

router.get('/profile',middlewares.authJWT,middlewares.authorAdmin,UserController.profile);

module.exports = router;