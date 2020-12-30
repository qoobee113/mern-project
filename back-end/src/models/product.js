const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  quantity : {
    type: Number,
    required : true
  },
  offer: {
    type: Number
  },
  productPicture: [
    {
      img: {
        type: String
      }
    }
  ],
  reviews:[
    {
      userId :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      } ,
      review : String,   
    }
  ],
  category: {
    type : mongoose.Schema.Types.ObjectId,
    ref: 'Categories',
    required : true
  },
  creatBy :{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required : true
  },
  updateAt : Date
}, { timestamps: true })

module.exports = mongoose.model('Product', productSchema);