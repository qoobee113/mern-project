const Product = require('./../../models/product');

const createProduct = (req,res,next) =>{
  const {name,price,description,productPicture,category,creatBy} = req.body
  const product = new Product({
    name: name,


  })
}


module.exports={
  createProduct
}