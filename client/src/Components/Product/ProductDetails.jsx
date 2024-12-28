import React from 'react'
import Header from '../Header/Header'
import CommonCategoryPage from '../Category/CommonCategoryPage'
import Footer from '../Footer/Footer'
import {useQuery} from "@tanstack/react-query"
import { useParams } from 'react-router-dom'
function ProductDetails() {
    let {id} = useParams()
    const {data,isLoading,error} = useQuery({
        queryKey:['product'],
        queryFn:async()=>{
            let response = await fetch(`http://localhost:8000/user/detail/${id}`,{
                method:'GET'
            })
            return response.json()
        }
    })
    if(isLoading){
        return <div>
            Data Loading
        </div>
    }
    if(error){
        return {error}
    }
    console.log('Product data is',data)
  return (
    <div>
       <Header/>
       <CommonCategoryPage data ='Product Details'/>
       <div className='lg:px-20'>
        <div className='w-full bg-primary my-10 px-3 py-4 text-start lg:px-20 lg:flex'>
            <div>
            <img src={`http://localhost:8000${data.product.images[0]}`} alt="" />
            </div>
            <div className='lg:ml-20 lg:mt-10'>
            <h1 className='text-white text-2xl mt-1 lg:text-4xl'>The Range Of Dragons</h1>
            <p className='text-white text-sm mt-1 lg:text-lg'>By Evan Winter</p>
            <p className='text-white text-3xl mt-5'>$ {data.product.price}</p>
            <button className='bg-white text-black p-3 rounded-3xl mt-3 lg:mt-6 lg:px-6 lg:py-3'>Add To Cart</button>
            </div>
            
        </div>
        <div className='text-start px-3'>
            <h1 className='text-primary font-bold w-1/4'>Description</h1>
            <p>{data.product.description}</p>
        </div>
       </div>
       <Footer/>
    </div>
  )
}

export default ProductDetails