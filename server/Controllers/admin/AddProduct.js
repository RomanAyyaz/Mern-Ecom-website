const Product = require('../../Models/AdminModels/AddProduct')
const multer = require('multer')
const path = require('path')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve("./Public/Uploads/"));
    },
    filename: function (req, file, cb) {
      const fileName = `${Date.now()}-${file.originalname}`;
      cb(null, fileName);
    }
  });
  
const upload = multer({ storage: storage });
const AddProduct = async (req,res)=>{
    try {
        let productData = req.body
        let files = req.files
        const ImagesPath = files.map((file) => {
          return `/public/Uploads/${file.filename}`;
      });
        const newProduct = new Product({
            ...productData,
            images:ImagesPath
        })
        await newProduct.save()    
    } catch (error) {
        res.status(500).json({error:error})
    }
    
}


module.exports = {AddProduct,upload}