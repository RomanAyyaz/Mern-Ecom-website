require('dotenv').config();
const express = require('express');
const Router = express.Router();
const stripe = require('stripe')(process.env.STRIPKEY); 
const { UserSignup } = require('../../Controllers/User/UserSignup');
const { otpVerification } = require('../../Controllers/User/Otpverification');
const { UserLogin } = require('../../Controllers/User/UserLogin');
const { MenProducts } = require('../../Controllers/User/Products/GetMenProd');
const { UserCart } = require('../../Controllers/User/Cart/Cart');
const { getCartData } = require('../../Controllers/User/Cart/GetCartData');
const { DeleteProductFromCart } = require('../../Controllers/User/Cart/DeleteProductFromCart');
const { GetProdDetail } = require('../../Controllers/User/Products/GetProdDetail');
const { OrderPost } = require('../../Controllers/Orders/OrderPost');
const {clearAllCart} = require('../../Controllers/User/Cart/ClearAllCart')
// User Signup Route
Router.post('/signup', UserSignup);

// Otp verification
Router.post('/otp', otpVerification);

// User Login Route
Router.post('/signin', UserLogin);

// User Get Request for men products
Router.get('/men', MenProducts);

// Putting products in user Cart
Router.post('/cart', UserCart);

// Get cart data 
Router.get('/cart/:id', getCartData);

// Delete specific product from cart
Router.delete('/cart/productDelete', DeleteProductFromCart);

// Specific product details 
Router.get('/detail/:id', GetProdDetail);

// Orders Routes
Router.post('/order', OrderPost);

//ClearAllCart
Router.delete('/cartDel',clearAllCart)

// Checkout
Router.post('/checkout', async (req, res) => {
    const { Products } = req.body;
    const lineItems = Products.map((product) => {
      const priceInCents = Math.round(parseFloat(product.product.price) * 100);
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: product.product.name
          },
          unit_amount: priceInCents
        },
        quantity: parseInt(product.quantity, 10)
      };
    });
  
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: lineItems,
        mode: 'payment',
        success_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/cancel'
      });
  
      res.json({ id: session.id });
    } catch (error) {
      console.error("Error creating Stripe session:", error);
      res.status(500).json({ error: 'Failed to create Stripe session' });
    }
  });
  

module.exports = Router;
