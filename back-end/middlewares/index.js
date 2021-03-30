const JWT = require('jsonwebtoken');
const User = require('../models/user');
const {JWT_Secret} = require('./../config/index');
const multer = require('multer');
const shortid = require('shortid');
const path = require('path');

//Upload File
const storage = multer.diskStorage({
    destination: function (req, file, next) {
        next(null, path.join(path.dirname(__dirname),'uploads'))
      },
    filename: function (req, file, next) {
        next(null, shortid.generate()+ '-'+file.originalname)
      }
})
const upload = multer({
    storage : storage,
    fileFilter : (req,file,next) =>{
        const math =["image/png", "image/jpeg","image/jpg"];
        if (math.indexOf(file.mimetype) === -1) {
           return  next(new Error('Chỉ sử dụng file jpg/jpeg/png'),false);
        }
        next(null,true);
    }
});

//encodeToken user
const encodeToken = (userID) =>{
    return JWT.sign({
        iss: 'PhamPhuc',
        payload: userID,
        iat: new Date().getTime()
       }, JWT_Secret,{
           expiresIn : '1h'
       })
}

//verifyToken 
const verifyToken = (token) =>{
    return JWT.verify(token,JWT_Secret)
}

const authJWT = (req,res,next) => {
    try {
        const token = req.get('token');
        if(!token) next(new Error("Bạn cần đăng nhập!"))
        const tokenValue = token.slice(7);
        req.userID = verifyToken(tokenValue).payload;
        next();
    } catch (error) {
        next(new Error("Token không hợp lệ!"));
    }
}

const authorAdmin = async (req,res,next) => {
    try {
        const user = await User.findOne({_id : req.userID })
        if(!user) return res.status(500).json({message : "Không có người dùng!"});

        if(user.role !== 'admin') return res.status(400).json({message : "Bạn không có quyền truy cập!"});
        req.user = user;
        next();
    } catch (error) {
        next(error);
    }
}
module.exports = {
    encodeToken,verifyToken,authJWT,authorAdmin,upload
}