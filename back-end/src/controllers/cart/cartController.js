const Cart = require('./../../models/cart');


const addItemToCart = async (req,res,next) =>{
  try {
    const cartOld = await Cart.findOne({user : req.userID});
    const {product} = req.body.cartItems;
    if(cartOld){
      //if exits -> update
      const isitemAdded = cartOld.cartItems.find( (item) =>{
        return String(item.product) === product;
      } );
      //if itemadd exits
      if(isitemAdded)
      {
        isitemAdded.quantity += req.body.cartItems.quantity;
        await cartOld.save();

        return res.status(200).json({cart : cartOld})
      }
      cartOld.cartItems.push(req.body.cartItems);
      await cartOld.save();
      return res.status(200).json({cart : cartOld})
    }
   // add cart if not exits
    const cart= new Cart({
      user : req.userID,
      cartItems : [req.body.cartItems]
    });
    await cart.save();
    return res.status(201).json({cart});
  } catch (error) {
    next(error)
  }
}


module.exports={
  addItemToCart
}