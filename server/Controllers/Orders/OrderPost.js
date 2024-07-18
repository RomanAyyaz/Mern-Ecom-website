const OrderModel = require('../../Models/OrderModels/Order');
const OrderPost = async (req, res) => {
    try {
        let { userid, products, totalPrice } = req.body;

        let orders = new OrderModel({
            user: userid,
            product: products,
            totalPrice: totalPrice
        });

        await orders.save();
        return res.status(201).json({ message: 'Order created Successfully', order: orders });
    } catch (error) {
        console.error('Error saving order:', error);
        return res.status(400).json({ error: error.message });
    }
};

module.exports = {
    OrderPost
};
