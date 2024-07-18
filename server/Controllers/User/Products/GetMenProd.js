const Product = require('../../../Models/AdminModels/AddProduct');

const MenProducts = async (req, res) => {
    const { category ,brand } = req.query;
    try {
        let query = {};
        if (category) {
            query.category = category;
        }
        if (brand) {
            const brandsArray = Array.isArray(brand) ? brand : [brand];
            query.brand = { $in: brandsArray };
        }
        const allProducts = await Product.find(query);
        if (allProducts.length < 0) {
            return res.status(404).json({ message: 'No products found.' });
        }

        return res.status(200).json({ Products: allProducts });
    } catch (error) {
        console.error('Error fetching products:', error); // Log the error for debugging
        return res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    MenProducts,
};
