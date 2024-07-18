const Cart = require('../../../Models/UserModels/UserCart')
const getCartData = async (req,res)=>{
    const userid = req.params.id
    try {
        const cartData = await Cart.find({ user: userid }).populate('products.product');
        res.status(200).json({cartData:cartData});
    } catch (error) {
        console.log(error,'in cart data getting')
        res.status(500).json({error:error})
    }
}

module.exports = {
    getCartData
}