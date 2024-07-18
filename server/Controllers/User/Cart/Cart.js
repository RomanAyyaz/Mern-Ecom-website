const CartModel = require('../../../Models/UserModels/UserCart');

const UserCart = async (req, res) => {
    const { userid, productid } = req.body;
    try {
        let cartExists = await CartModel.findOne({ user: userid });

        if (cartExists) {
            cartExists.products.push({
                product: productid
            });
            await cartExists.save();
            return res.status(200).json({ message: 'Product added to existing cart successfully' });
        } else {
            let cartData = new CartModel({
                user: userid,
                products: [
                    {
                        product: productid
                    }
                ]
            });
            await cartData.save();
            return res.status(201).json({ message: 'New cart created and product added successfully' });
        }
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    UserCart
};