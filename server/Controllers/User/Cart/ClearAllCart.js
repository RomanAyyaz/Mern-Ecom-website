const Cart = require('../../../Models/UserModels/UserCart')

const clearAllCart = async (req,res)=>{
    try {
        let {userid} = req.body
        let user = await Cart.findOne({user:userid})
        let Cart_id = user.id
        await Cart.findByIdAndDelete({_id:Cart_id})
        return res.status(200).json({message:'Cart data delete'})  
    } catch (error) {
        return res.status(500).json({message:error})
    } 
}

module.exports = {
    clearAllCart
}