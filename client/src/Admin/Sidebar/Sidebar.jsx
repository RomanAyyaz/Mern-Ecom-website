import React, { useState } from 'react'
import { BiHome ,BiPackage ,BiChevronDown} from 'react-icons/bi';
import { Link } from 'react-router-dom';
//import { FaBars } from 'react-icons/fa';
function Sidebar() {
    let [dashboard, setDashboard] = useState(false)
    let [products, setProducts] = useState(false)
  return (
    <>
    <div className ='md:block h-full md:h-[500px] mt-4 rounded-lg bg-hero w-56 mx-4 shadow-lg'>
        <h1 className='py-3 text-xl font-bold font-title '>Trendy Trunk</h1>
        <div className='flex flex-col  p-2'>
            <div className='flex items-center justify-between px-1 my-2.5 cursor-pointer  hover:text-blue-500' onClick={()=>{
                setDashboard(!dashboard)
            }}>
                <div className='flex items-center'>
                <BiHome className='text-2xl'/>
                <h1 className='px-1 font-medium'>Dashboards</h1>
                </div>
                <div className='mr-3 text-lg'>
                <BiChevronDown />
                </div>
            </div>
            {dashboard ? (
                    <div className='text-start px-8'>
                        <ul>
                            <li className='my-2 hover:cursor-pointer hover:text-blue-500'>Analytics</li>
                            <li className='my-3 hover:cursor-pointer hover:text-blue-500'>Reports</li>
                        </ul>
                    </div>
                ) : null}
            <div className='flex items-center cursor-pointer justify-between px-1 my-2.5  hover:text-blue-500' onClick={()=>{
                setProducts(!products)
            }}>
                <div className='flex items-center'>
                <BiPackage className='text-2xl'/>
                <h1 className='px-1 font-medium'>Products</h1>
                </div>
                <div className='mr-3 text-lg'>
                <BiChevronDown />
                </div>
            </div>
            {products ? (
                    <div className='text-start px-8'>
                        <ul>
                            <Link to= '/order'>
                            <li className=' my-2 hover:cursor-pointer hover:text-blue-500'>Order History</li>
                            </Link>
                            <Link to='/allproducts'>
                            <li className=' my-3 hover:cursor-pointer hover:text-blue-500'>Products</li>
                            </Link>
                            <Link to='/customers'>
                            <li className=' my-3 hover:cursor-pointer hover:text-blue-500'>Customers</li>
                            </Link>
                            <Link to='/addProduct'>
                            <li className=' my-3 hover:cursor-pointer hover:text-blue-500'>Add Product</li>
                            </Link>
                            <li className=' my-3 hover:cursor-pointer hover:text-blue-500'>Reviews</li>
                        </ul>
                    </div>
                ) : null}
        </div>
    </div>
    </>
  )
}

export default Sidebar