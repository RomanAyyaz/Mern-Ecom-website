const Order = require('../../Models/OrderModels/Order')
const GetOrders = async(req,res)=>{
    try {
        let AllOrders = await Order.find().populate('user')
        return res.status(200).json({AllOrders:AllOrders})
    } catch (error) {
        return res.status(500).json({error:error})
    }
}
module.exports = {
    GetOrders
}