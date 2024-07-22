const Cart = require('../../../Models/UserModels/UserCart')
const ProductQuantity = async (req,res)=>{
    try {
        let{userid,productid,quantity} = req.body
        await Cart.findOneAndUpdate({user:userid, 'products.product':productid },
           {$set:{"products.$.quantity": quantity }})   
           return res.status(200).json({message:'Quantity Updated Successfully'})
    } catch (error) {
    return res.status(500).json({error:error})    
    }
}

module.exports = {
    ProductQuantity
}