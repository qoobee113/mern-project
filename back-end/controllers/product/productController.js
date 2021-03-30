const Product = require('./../../models/product');
const slugify = require('slugify');

const createProduct = async (req,res,next) =>{
  try {
    const {name,price,description,category,quantity} = req.body
    let productPictures = [];
    if(req.files.length > 0){
      productPictures = req.files.map( item =>{
        return { img : item.filename}
      })
    }
    const product = new Product({
      name: name,
      slug : slugify(name,{locale : 'vi'}),
      price,
      description,
      quantity,
      productPicture : productPictures,
      category,
      creatBy : req.userID
    })
    await product.save();
    return res.status(201).json({product});
  } catch (error) {
    next(error);
  }


}


module.exports={
  createProduct
}