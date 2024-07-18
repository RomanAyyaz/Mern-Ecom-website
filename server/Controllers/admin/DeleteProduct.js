const Product = require('../../Models/AdminModels/AddProduct')
const DeleteProduct = async (req,res)=>{
    let {id}= req.params
    await Product.findByIdAndDelete(id)
    return res.status(200).json({Message:'Product Delete SuccessFully'})
}

module.exports = {
    DeleteProduct
}