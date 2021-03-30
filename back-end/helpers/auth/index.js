const {check} = require('express-validator');

module.exports = {
  checkFirstName: check('firstName').notEmpty().withMessage("Bạn cần nhập tên.")
                  .isString().withMessage("Nhập sai định dạng.")
                  .isLength({ min: 2 }).withMessage("Tối thiểu 2 chữ."),
  checkLastName : check('lastName').notEmpty().withMessage("Bạn cần nhập họ.")
                  .isString().withMessage("Nhập sai định dạng.")
                  .isLength({ min: 2 }).withMessage("Tối thiểu 2 chữ."),
  checkMail : check('email').isEmail().withMessage("Nhập sai định dạng").notEmpty().withMessage("Bạn cần nhập Email"),
  checkPass : check('password').isLength({ min: 6 }).withMessage("Tối thiểu 6."),
  checkUsername : check('username').isLength({ min: 5 }).withMessage("Tối thiểu 6.")
}