const Product = require('../../Models/AdminModels/AddProduct')
const updateProduct = async (req, res) => {
    try {
        const { name, price, category, discount, description, brand } = req.body;
        const files = req.files.map(file => file.path);

        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        product.name = name;
        product.price = price;
        product.category = category;
        product.discount = discount;
        product.description = description;
        product.brand = brand;
        if (files.length) {
            product.images = files;
        }

        await product.save();
        res.json({ message: 'Product updated successfully', product });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

module.exports = {
    updateProduct
}