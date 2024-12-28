import React from 'react';
import { FaDollarSign } from 'react-icons/fa';
import { MdAttachMoney, MdProductionQuantityLimits, MdPeople } from 'react-icons/md'
function FrontPage() {
  return (
    <div className='mt-10 flex flex-col gap-4 mx-12'>
      <div className='flex gap-4'>
        <div className='text-second flex shadow-2xl w-[420px] h-28 px-8 items-center'>
          <div className='bg-second w-16 h-16 rounded-full flex justify-center items-center'>
            <FaDollarSign className='text-white text-2xl' />
          </div>
          <div className='mx-3'>
            <h1 className='font-bold text-2xl'>250K</h1>
            <p className='text-black text-sm'>Sales</p>
          </div>
        </div>
        <div className='text-third flex shadow-2xl w-[420px] h-28 px-8 items-center'>
          <div className='bg-third w-16 h-16 rounded-full flex justify-center items-center'>
            <MdPeople className='text-white text-2xl' />
          </div>
          <div className='mx-3'>
            <h1 className='font-bold text-2xl'>25K</h1>
            <p className='text-black text-sm'>Customers</p>
          </div>
        </div>
      </div>
      <div className='flex gap-4'>
        <div className='text-fourth flex shadow-2xl w-[420px] h-28 px-8 items-center'>
          <div className='bg-fourth w-16 h-16 rounded-full flex justify-center items-center'>
            <MdProductionQuantityLimits className='text-white text-2xl' />
          </div>
          <div className='mx-3'>
            <h1 className='font-bold text-2xl'>2K</h1>
            <p className='text-black text-sm'>Product</p>
          </div>
        </div>
        <div className='text-fifth flex shadow-2xl w-[420px] h-28 px-8 items-center'>
          <div className='bg-fifth w-16 h-16 rounded-full flex justify-center items-center'>
            <MdAttachMoney className='text-white text-2xl' />
          </div>
          <div className='mx-3'>
            <h1 className='font-bold text-2xl'>200K</h1>
            <p className='text-black text-sm'>Revenue</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
