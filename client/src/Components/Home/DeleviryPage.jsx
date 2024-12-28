import React from 'react'

function DeleviryPage() {
  return (
    <div className='w-full h-[650px]  flex flex-col items-center md:flex-row md:h-80 md:justify-evenly'>
        <div className='flex flex-col text-start h-44 w-44  mt-3'>
            <img  className='mx-auto h-20 w-20 md:h-24 md:w-24' src="https://img.freepik.com/premium-vector/fast-free-delivery-icon-outline-fast-free-delivery-vector-icon-web-design-isolated-white-background_98396-34294.jpg" alt="" />
            <h1 className='font-bold text-lg text-center '>Fast & Free Delivery</h1>
            <p className='text-neutral-500 text-sm text-center md:mt-1.5'>Free delivery on all order</p>
        </div>
        <div className='flex flex-col text-start h-44 w-44  mt-3' >
            <img className='mx-auto h-20 w-20 md:h-24 md:w-24' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWlYhnFoUNW_HZHOzQqPK2dMHBN6k1I6P2gA&s" alt="" />
            <h1 className='font-bold text-lg text-center'>Secure Payment</h1>
            <p className='text-neutral-500 text-sm text-center md:mt-1.5'>Free delivery on all order</p>
        </div>
        <div className='flex flex-col text-start h-44 w-44  mt-3'>
            <img className='mx-auto h-20 w-20 md:h-24 md:w-24' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoCLoivWw34Bre9v_V1K2oeu3UKHfFPmsuWA&s" alt="" />
            <h1 className='font-bold text-lg text-center'>Money Back</h1>
            <p className='text-neutral-500 text-sm text-center md:mt-1.5'>Free delivery on all order</p>
        </div>
        <div className='flex flex-col text-start h-44 w-44  mt-3'>
            <img className='mx-auto h-20 w-20 md:h-24 md:w-24' src="https://static.vecteezy.com/system/resources/previews/009/317/928/non_2x/availability-icon-logo-illustration-24-7-hours-service-symbol-template-for-graphic-and-web-design-collection-free-vector.jpg" alt="" />
            <h1 className='font-bold text-lg text-center'>Online Support</h1>
            <p className='text-neutral-500 text-sm text-center md:mt-1.5'>Free delivery on all order</p>
        </div>
    </div>
  )
}

export default DeleviryPage