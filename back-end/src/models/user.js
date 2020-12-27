const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
    {
        firstName : {
            type : String,
            required : true,
            trim : true,
            min : 3,
            max : 20
        },
        lastName : {
            type : String,
            required : true,
            trim : true,
            min : 3,
            max : 20
        },
        username : {
            type : String,
            required : true,
            trim : true,
            unique : true,
            index : true,
            lowercase : true,
        },
        email : {
            type : String,
            required : true,
            trim : true,
            lowercase : true,
        },
        password:{
            type: String,
            required: true
        },
        role : {
            type: String,
            enum : ['user','admin'],
            default : 'user',
        },
        contactNumber: {
            type : String
        },
        profilePicture : { type: String},

    },{ timestamps : true }
)

userSchema.pre('save',async function (next) {
    try {
        //check 
      if (!this.isModified('password')) return next();
      //generate a salt
      const salt = await bcrypt.genSalt(10);
  
      //generate a pass hash
      const pass = await bcrypt.hash(this.password,salt);
      //re-asign
      this.password = pass;
      next();   
    } catch (error) {
      next(error);
    }
  })


userSchema.methods = {
    isValidPassWord: async function(password) {
        try {
            return await bcrypt.compare(password,this.password);
          } catch (error) {
            throw new Error(error);
          }
    }
}

module.exports = mongoose.model('User',userSchema)