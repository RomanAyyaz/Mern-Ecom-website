const mongose = require('mongoose')
const {Schema} = mongose

const UserCart = new mongose.Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    products:[
        {
            product:{
                type:Schema.Types.ObjectId,
                ref:'Product',
                required:true
            },
            quantity:{
                type:String,
                default:'1'
            }
        }
    ]
})

const Cart = mongose.model('Cart',UserCart)

module.exports = Cart