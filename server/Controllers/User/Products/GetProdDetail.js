let Product  = require('../../../Models/AdminModels/AddProduct')
const GetProdDetail = async (req,res)=>{
    try {
        let {id} = req.params
        let ProductData = await Product.findById(id)
        return res.status(200).json({product:ProductData})   
    } catch (error) {
        return res.status(500).json({error:error})
    }   
}


module.exports = {
    GetProdDetail
}