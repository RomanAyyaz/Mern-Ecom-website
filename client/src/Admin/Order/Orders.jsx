import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import { useQuery } from '@tanstack/react-query'
import Order from './Order'
function Orders() {
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
    let {data} = useQuery({
        queryKey:['order'],
        queryFn:async ()=>{
            let response = await fetch(`${API_BASE_URL}/admin/order`,{
                method:"GET"
            })
            return response.json()
        }
    })
    console.log(data)
  return (
    <div>
        <Navbar/>
        <div className='flex'>
            <Sidebar/>
            <div className='w-full'>
            <div className='flex justify-evenly w-full mt-5'>
                <h1 className='w-1/5 font-bold'>Customer Name</h1>
                <h1 className='w-1/5 font-bold'>Product Ordered</h1>
                <h1 className='w-1/5 font-bold'>Total Payment</h1>
                <h1 className='w-1/5 font-bold'>Order Status</h1>
                <h1 className='w-1/5 font-bold'>Payment</h1>
            </div>
            <div>
            {
            data ?
            data.AllOrders.map((values,index)=>{
                return (
                    <Order data = {values}/>
                )
            })
             :"No Data Available"
           }
            </div>
            </div>
        </div>
    </div>
  )
}

export default Orders