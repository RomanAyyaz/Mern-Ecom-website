import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { useQuery } from '@tanstack/react-query'
import Customers from './Customers'
import Navbar from '../Navbar/Navbar'

function Allcustomers() {
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
    const {data} = useQuery({
        queryKey:['customer'],
        queryFn:async()=>{
            let response = await fetch(`${API_BASE_URL}/admin/customer`,{
                method:'GET'
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
        <div className='w-full mt-10'>
            <div className='flex justify-evenly w-full'>
                <h1 className='w-1/4 font-bold'>Customer</h1>
                <h1 className='w-1/4 font-bold'>Status</h1>
                <h1 className='w-1/4 font-bold'>Orders</h1>
                <h1 className='w-1/4 font-bold'>Actions</h1>
            </div>
            <div className=''>
            {
                data && data.Users.length>0 ?
                data.Users.map((values,index)=>{
                    return (
                        <Customers data={values} key={index}/>
                    )
                })
                 :"No Customer Data Availabe"
            }
            </div>
        </div>
        </div>
    </div>
  )
}

export default Allcustomers