let OrderModel = require('../../Models/OrderModels/Order')

const updateOrder = async (req, res) => {
    try {
        let { id } = req.params
        let { status } = req.body
        await OrderModel.findByIdAndUpdate(id, { status: status })
        return res.status(200).json({ message: 'Order updated successfully' })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = {
    updateOrder
}
