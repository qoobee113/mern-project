const { validationResult } = require('express-validator');
const {checkFirstName,checkLastName,checkPass,checkMail,checkUsername} = require('./auth/index');
module.exports ={
  validatorSignIn : [checkUsername,checkPass],
  validatorSignUp : [checkFirstName,checkLastName,checkMail,checkPass,checkUsername],
  isErrorValidator : function(req,res,next){
    const err = validationResult(req);
    const objErr = {};
    if(err.array().length > 0){
      const errList = err.array().map(err => {
        objErr[err.param] = err.msg;
      })
      return res.status(400).json({
        error : objErr
      })
    }
    next();
  }
}