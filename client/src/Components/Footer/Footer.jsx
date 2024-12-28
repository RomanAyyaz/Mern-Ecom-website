import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStore,
} from "@fortawesome/free-solid-svg-icons";
function Footer() {
  return (
    <div className='bg-footer mt-8 w-full h-auto text-white py-8 lg:px-12 lg:pt-16 lg:mt-8'>
        <div className='text-start flex flex-col lg:flex-row px-3 lg:justify-between'>
            <div>
            <h1 className='font-bold text-2xl'>Subscribe Newsletter</h1>
            <p className='text-[15px] my-3'>Subscribe newsletter to get 5% discount on all products</p>
            </div>
            <div className='flex flex-col lg:flex-row lg:justify-evenly lg:w-[600px]'>
            <input className='bg-white p-5 mt-1.5 text-black lg:w-[400px] lg:p-3' type="text" name="" id="" placeholder='Enter Your Email' />
            <button className='mt-3.5 p-5 text-white bg-primary  lg:mt-1.5'>Subscribe</button>
            </div>
            {/* <div className='hidden lg:block'></div> */}
        </div>
        <div className='mt-6 w-full h-[1px] bg-gray-500'></div>
        <div className='lg:flex lg:mx-10 lg:my-10'>
        <div className='my-6 px-3 flex items-center  lg:items-start'>
        <div className="h-16 w-16 lg:w-12 lg:h-12 text-3xl flex justify-center items-center text-white bg-primary rounded-full">
            <FontAwesomeIcon icon={faStore} />
          </div>
          <h1 className='font-bold text-3xl ml-3'>Trendy <span className='font-normal'>Trunk</span></h1>
        </div>
        <div className='text-start lg:ml-16'>
            <h1 className='text-xl px-1'>Shop Men</h1>
            <ul className='px-3 py-4'>
                <li className='hover:text-primary cursor-pointer lg:my-3 my-2 text-lg text-neutral-400'>Summer</li>
                <li className='hover:text-primary cursor-pointer lg:my-3 my-2 text-lg text-neutral-400'>Winter</li>
                <li className='hover:text-primary cursor-pointer lg:my-3 my-2 text-lg text-neutral-400'>Formal</li>
                <li className='hover:text-primary cursor-pointer lg:my-3 my-2 text-lg text-neutral-400'>Casual</li>
                <li className='hover:text-primary cursor-pointer lg:my-3 my-2 text-lg text-neutral-400'>Fashion</li>
            </ul>
        </div>
        <div className='text-start lg:mx-16'>
            <h1 className='text-xl px-1'>Shop Women</h1>
            <ul className='px-3 py-4'>
                <li className='hover:text-primary  cursor-pointer lg:my-3   my-2 text-lg text-neutral-400'>Summer</li>
                <li className='hover:text-primary  cursor-pointer lg:my-3  my-2 text-lg text-neutral-400'>Winter</li>
                <li className='hover:text-primary  cursor-pointer lg:my-3  my-2 text-lg text-neutral-400'>Formal</li>
                <li className='hover:text-primary  cursor-pointer lg:my-3  my-2 text-lg text-neutral-400'>Casual</li>
                <li className='hover:text-primary  cursor-pointer lg:my-3  my-2 text-lg text-neutral-400'>Fashion</li>
            </ul>
        </div>
        <div className='text-start'>
            <h1 className='text-xl px-1'>Shop Baby</h1>
            <ul className='px-3 py-4'>
                <li className='hover:text-primary cursor-pointer lg:my-3 my-2 text-lg text-neutral-400'>Summer</li>
                <li className='hover:text-primary cursor-pointer lg:my-3 my-2 text-lg text-neutral-400'>Winter</li>
                <li className='hover:text-primary cursor-pointer lg:my-3 my-2 text-lg text-neutral-400'>Formal</li>
                <li className='hover:text-primary cursor-pointer lg:my-3 my-2 text-lg text-neutral-400'>Casual</li>
                <li className='hover:text-primary cursor-pointer lg:my-3 my-2 text-lg text-neutral-400'>Fashion</li>
            </ul>
        </div>
        <div className='hidden lg:block text-start lg:mx-16'>
            <h1 className='text-xl px-1'>Fashion</h1>
            <ul className='px-3 py-4'>
                <li className='hover:text-primary cursor-pointer lg:my-3 my-2 text-lg text-neutral-400'>Summer</li>
                <li className='hover:text-primary cursor-pointer lg:my-3 my-2 text-lg text-neutral-400'>Winter</li>
                <li className='hover:text-primary cursor-pointer lg:my-3 my-2 text-lg text-neutral-400'>Formal</li>
                <li className='hover:text-primary cursor-pointer lg:my-3 my-2 text-lg text-neutral-400'>Casual</li>
                <li className='hover:text-primary cursor-pointer lg:my-3 my-2 text-lg text-neutral-400'>Fashion</li>
            </ul>
        </div>
        </div>  
        <div className='w-full h-[1px] bg-gray-500'></div>
        <div className='mt-3 text-center'>
            CopyRights @2024 All rights Reserved
        </div>
    </div>
  )
}

export default Footer