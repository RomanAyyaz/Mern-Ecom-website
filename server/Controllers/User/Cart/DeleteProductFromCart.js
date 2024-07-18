const UserModel = require('../../../Models/UserModels/UserCart');

const DeleteProductFromCart = async (req, res) => {
    const { userid, productid } = req.body;
    try {
        const userCart = await UserModel.findOne({ user: userid });
        if (!userCart) {
            return res.status(404).json({ error: "User does not exist" });
        }
        const productExists = userCart.products.some(item => item.product.toString() === productid);

        if (!productExists) {
            return res.status(404).json({ error: "Product not found in cart" });
        }
        userCart.products = userCart.products.filter(item => item.product.toString() !== productid);
        await userCart.save();
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.error(error); 
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    DeleteProductFromCart
};
