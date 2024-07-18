const Product = require('../../Models/AdminModels/AddProduct')
const AllProductsGet = async (req,res)=>{
    try {
        let AllProducts = await Product.find()
        return res.status(200).json({AllProducts:AllProducts})
    } catch (error) {
        return res.status(500).json({error:error})
    }
}

module.exports = {
    AllProductsGet
}