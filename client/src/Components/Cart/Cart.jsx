import React, { useContext } from 'react';
import Header from '../Header/Header';
import CommonCategoryPage from '../Category/CommonCategoryPage';
import Footer from '../Footer/Footer';
import CartData from './CartData';
import { useMutation, useQuery } from '@tanstack/react-query';
import { UserContext } from '../../Context/UserContext';
import { loadStripe } from '@stripe/stripe-js';

function Cart() {
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
  const { User, SetUserCartlength } = useContext(UserContext);
  let userid = User._id;

  const { data, isLoading, error } = useQuery({
    queryKey: ['cart', userid],
    queryFn: async () => {
      let response = await fetch(`${API_BASE_URL}/user/cart/${userid}`, {
        method: "GET"
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    }
  });
  //Order Api
  let OrderApi = async ()=>{
    let response = await fetch('http://localhost:8000/user/order',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(UserOrder)
    })
    return response.json()
  }
  let OrderMuations = useMutation({
    mutationFn:OrderApi,
    onSuccess:()=>{
      console.log('Order created SuccessFully')
    },
    onError:()=>{
      console.log('Order failed')
    }
  })
  // ClearAllCart Api
  let clearAllCart = async () => {
    let response = await fetch('http://localhost:8000/user/cartDel', {
      method: 'Delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userid })
    });
    return response.json();
  };

  let clearAllCartMutation = useMutation({
    mutationFn: clearAllCart,
    onSuccess: () => {
      console.log('All Cart Data Cleared');
    },
    onError: () => {
      console.log('There is some error in clearing Cart data');
    }
  });

  if (isLoading) {
    return (
      <div>Loading</div>
    );
  }

  if (error) {
    return (
      <div>Error</div>
    );
  }

  if (!data || !data.cartData) {
    return (
      <div>No data available in cart</div>
    );
  }

  let cartData = data.cartData.length > 0 ? data.cartData[0].products : [];

  let totalPrice = 0;
  if (cartData.length > 0) {
    cartData.forEach((item) => {
      let price = parseFloat(item.product.price)*parseFloat(item.quantity);
      totalPrice += price;
    });
  }

  SetUserCartlength(cartData.length || 0);

  const products = cartData.map(item => ({
    productid: item._id,
    quantity: item.quantity
  }));
  let UserOrder = {
    userid,
    products,
    totalPrice
  };
  // Payment process
  const MakePayment = async () => {
    const Stripe = await loadStripe('pk_test_51PZeY6LIQkbvFG5aLlbdHKqQmz2eZkQQeYs9qwA3hXKaVaZEq2g4NYUGZt3AcSc1XJ3QuxKQnsDfUb2cEyPCch1b00tXaqKGt2');
    const body = {
      Products: cartData
    };
    const headers = {
      'Content-Type': 'application/json'
    };
    const response = await fetch('http://localhost:8000/user/checkout', {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body)
    });
    const session = await response.json();
    const result = Stripe.redirectToCheckout({
      sessionId: session.id
    });
    if (result.error) {
      console.log(result.error);
    } else {
      clearAllCartMutation.mutate();
      OrderMuations.mutate();
    }
  };

  return (
    <div>
      <Header />
      <CommonCategoryPage data={'Cart'} />
      <div className='flex justify-between px-3 mt-5 text-neutral-500'>
        <h1 className='w-1/4'>Product</h1>
        <h1 className='w-1/4'>Price</h1>
        <h1 className='w-1/4'>Quantity</h1>
        <h1 className='w-1/4'>Total</h1>
      </div>
      {
        cartData.length > 0 ? 
        cartData.map((data, i) => {
          return (
            <CartData key={i} data={data} />
          );
        }) 
        : 'No data in cart'
      }
      <div className='mt-3'>
        <h1>SubTotal = {totalPrice}</h1>
      </div>
      <button className='mt-3 bg-primary text-white p-3 rounded-lg' onClick={MakePayment}>
        Order Now
      </button>
      <Footer />
    </div>
  );
}

export default Cart;
