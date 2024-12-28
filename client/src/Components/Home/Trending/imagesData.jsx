import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
function ImageData({data}) {
  return (
    <div className='mt-10 relative group lg:mx-2.5 md:mx-2 cursor-pointer'>
    <img src={data} alt=""  className='lg:h-72 lg:w-64' />
    <div className='bg-white lg:mx-11 md:mx-7 text-black absolute lg:p-2.5 md:p-2 lg:w-40 md:w-24 lg:text-xl md:text-lg justify-around lg:bottom-24 md:bottom-28 flex opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
        <FontAwesomeIcon icon={faCartShopping} />
        <FontAwesomeIcon icon={faHeart} />
        <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
    </div>
    <p className='text-lg m-2 hover:text-primary'>Cashmere Tank + Bag</p>
    <p className='text-lg hover:'>$98.00</p>
    </div>
  )
}

export default ImageData