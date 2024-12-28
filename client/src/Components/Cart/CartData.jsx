import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { UserContext } from '../../Context/UserContext';

function CartData({ data }) {
  const queryClient = useQueryClient();
  let [counter,setCounter] = useState(Number(data.quantity))
  const { User } = useContext(UserContext);

  const UserData = {
    userid: User._id,
    productid: data.product._id
  };
  const UserData2 = {
    userid: User._id,
    productid: data.product._id,
    quantity:counter
  };
  const ProductQuantityApi = async()=>{
    let response = await fetch('http://localhost:8000/user/cart/productQuantity',{
      method:'PUT',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(UserData2)
    })
    return response.json()
  }
  const ProductQuantityMutations = useMutation({
    mutationFn:ProductQuantityApi,
    onSuccess:()=>{
      queryClient.invalidateQueries('cart');
      console.log('Increse Quantity SuccessFully')
    },
    onError:()=>{
      console.log('Error in increasing quantity')
    }
  })
  const deleteProductApi = async () => {
    let response = await fetch(`http://localhost:8000/user/cart/productDelete`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(UserData)
    });
    return response.json();
  };

  const deleteProductMutation = useMutation({
    mutationFn: deleteProductApi,
    onSuccess: () => {
      queryClient.invalidateQueries('cart');
      console.log('removed from cart');
    },
    onError: () => {
      console.log('error in removing the cart');
    }
  });

  const handleIncreMent = ()=>{
    setCounter(counter+1)  
    ProductQuantityMutations.mutate()
  }
  const handledecreMent = ()=>{
    setCounter(counter-1)  
    ProductQuantityMutations.mutate()
  }
  return (
    <>
      <div className='relative w-full h-auto flex justify-between items-center mt-3 px-3'>
        <div className='w-1/4'>
          <h1>{data.product.name}</h1>
        </div>
        <div className='w-1/4'>
          <h1>{data.product.price}</h1>
        </div>
        <div className='w-1/4 flex items-center justify-center'>
          <button className='bg-gray-200 px-2 py-1' onClick={handledecreMent}>-</button>
          <span className='mx-2'>{counter}</span>
          <button className='bg-gray-200 px-2 py-1' onClick={handleIncreMent}>+</button>
        </div>
        <div className='w-1/4'>
          <h1>{Number(data.product.price)*Number(data.quantity)}</h1>
        </div>
        <FaTrashAlt 
          className='text-red-500 cursor-pointer' 
          onClick={() => deleteProductMutation.mutate(UserData)}
        />
      </div>
      <div className='h-[1px] bg-gray-300 mt-4'></div>
    </>
  );
}

export default CartData;
