import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { useQuery } from '@tanstack/react-query'
import Products from './Products'
import Navbar from '../Navbar/Navbar'
function AllProducts() {
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
    const {data,isloading,error} = useQuery({
        queryKey:['product'],
        queryFn:async()=>{
            let response = await fetch(`${API_BASE_URL}/admin/allproducts`,{
                method:'GET'
            })
            return response.json()
        }
    })
    if(isloading){
        return <h1>Loading data</h1>
    }
    if(error){
        return <h1>error</h1>
    }
  return (
    <div className=' bg-adminDashborad'>
        <Navbar/>
        <div className='flex'>
        <Sidebar/>
        <div className='text-start w-full flex flex-wrap gap-2 h-auto px-3 bg-white'>
            {data && data.AllProducts.length>0 ? data.AllProducts.map((values,index)=>{
                return (
                    <Products data = {values} key={index}/>
                )
            }) :'No Data Available'}
        </div>
        </div>
    </div>
  )
}

export default AllProducts