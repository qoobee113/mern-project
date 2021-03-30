const User = require('../../models/user');
const { JWT_Secret } = require('../../config/index');
const { encodeToken } = require('../../middlewares/index');
const { findOne } = require('../../models/user');
const { validationResult } = require('express-validator');

const signup = async (req, res, next) => {
    try {
        const { firstName, lastName, email, password, username } = req.body;
        const foundUser = await User.findOne({ username });
        if (foundUser) {
            return res.status(403).json({
                error: {
                    message: "Username đã tồn tại!"
                }
            })
        }
        const newUser = new User({ firstName, lastName, email,password, username });
        newUser.password = password;
        console.log(newUser);
        await newUser.save();

        const token = encodeToken(newUser._id);
        res.setHeader('token', token);

        return res.status(201).json({ message: "Đăng ký thành công!" })
    } catch (error) {
        next(error);
    }

}

const signupAdmin = async (req, res, next) => {
    try {
        const { firstName, lastName, email, password, username } = req.body;
        const foundUser = await User.findOne({ username });
        if (foundUser) {
            return res.status(403).json({
                error: {
                    message: "Username đã tồn tại!"
                }
            })
        }
        const newUser = new User({ firstName, lastName, password,email, username, role: 'admin' });

        await newUser.save();

        const token = encodeToken(newUser._id);
        res.setHeader('token', token);

        return res.status(201).json({ message: "Đăng ký thành công!" })
    } catch (error) {
        next(error);
    }

}

const signin = async (req, res, next) => {
    try {
        const { password, username } = req.body;

        const user = await User.findOne({ username });
        if (!user) return res.status(400).json({ message: "Người dùng không tồn tại!" })

        const isCorrectPass = await user.isValidPassWord(password);
        if (!isCorrectPass) return res.status(400).json({ message: "Sai tài khoản hoặc mật khẩu!" })

        const token = encodeToken(user._id);
        res.setHeader('token', token);

        return res.status(201).json({ message: "Đăng nhập thành công!" })
    } catch (error) {
        next(error);
    }

}

const profile = async (req, res, next) => {
    try {
        const user = await User.findOne({_id : req.userID});
        const { firstName,lastName ,email,username} = user;
        res.status(200).json({ user: req.user || {firstName,lastName ,email,username} });
    } catch (error) {
        next(error)
    }
}
module.exports = {
    signup,
    signin,
    profile,
    signupAdmin
}