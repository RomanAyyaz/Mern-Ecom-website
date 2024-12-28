import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import {useMutation} from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { UserContext } from '../../../Context/UserContext'
function MenProduct({product}) {
  const {User} = useContext(UserContext)
  let CartData = {
    userid:User._id,
    productid:product._id
  }
  const UserCartApi = async (CartData)=>{
    let response = await fetch('http://localhost:8000/user/cart',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(CartData)
    })
    return response.json()
  }
  const UserCartMutation = useMutation({
    mutationFn:UserCartApi,
    onSuccess:()=>{
      console.log('Product added')
    },
    onError:()=>{
      console.log('Some error occured in adding the product')
    }
  })
  let discountedPrice = (product.discount/100)*product.price
  let  ActualPriceAfterDiscount = Math.floor(product.price - discountedPrice)
  return (
    <Link to = {`/detail/${product._id}`}>
    <div className='mt-10 relative group mx-2.5  cursor-pointer'>
    <img src={`http://localhost:8000${product.images[0]}`} alt=""  className='h-72 w-64' />
    {
      product.discount>0 ?
      <div className='w-10 h-10 bg-primary text-white rounded-full text-sm absolute left-52 top-1'>
       {product.discount}% off
    </div>
       : ""
    }
    <div className='bg-white mx-11 text-black absolute p-2.5 w-40 text-xl justify-around bottom-24 flex opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
        <FontAwesomeIcon icon={faCartShopping}
        onClick={()=>{
          UserCartMutation.mutate(CartData)
        }} 
         />
        <FontAwesomeIcon icon={faHeart} />
        <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
    </div>
    <p className='text-lg m-2 hover:text-primary'>{product.name}</p>
    <div className='flex justify-around items-center w-24 ml-20'>
      {
        product.discount > 0 ? (
          <>
          <p>$ {ActualPriceAfterDiscount}</p>
          <p className='line-through text-neutral-500'>$ {product.price}</p>
          </>
        ) : <p className='text-lg hover:'>$ {product.price}.00</p>
      }
    </div>
    </div>
    </Link>
    
  )
}

export default MenProduct