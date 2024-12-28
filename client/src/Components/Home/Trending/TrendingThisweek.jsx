import React, { useEffect, useState } from 'react'
import One from '../../../Assets/Images/images/1.jpeg'
import Two from '../../../Assets/Images/images/2.jpeg'
import Three from '../../../Assets/Images/images/3.jpeg'
import Four from '../../../Assets/Images/images/4.jpeg'
import Five from '../../../Assets/Images/images/5.jpeg'
import Six from '../../../Assets/Images/images/6.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import ImageData from './imagesData'

function TrendingThisweek() {
    const [Current, SetCurrent] = useState(0)
    const images = [One, Two, Three, Four, Five, Six]
    const images1 = [One, Two, Three, Four]
    const next = () => {
        SetCurrent((prevCurrent) => (prevCurrent + 1) % images.length)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            next()
        }, 5000)

        return () => clearInterval(interval)
    }, [Current])

    return (
        
         <>
         {/* //for laptop  */}
         <div className='hidden md:px-10 md:mt-6  lg:px-20 lg:mt-12  md:flex md:flex-col'>
            <div className='flex items-center justify-between'>
            <h1 className='text-start font-bold md:text-2xl lg:text-3xl'>Trending This Week</h1>
            <ul className='flex lg:mt-6 ml-2 w-60 font-medium text-[16px] justify-between'>
                <li className='text-primary cursor-pointer'>Men</li>
                <li className='cursor-pointer'>Women</li>
                <li className='cursor-pointer'>Baby</li>
                <li className='cursor-pointer'>Fashion</li>
            </ul>
            </div>
            <div className='bg-gray-300 mt-8 h-[1px] w-full'></div>
            <div className='flex'>
                {
                    images1.map((src,i)=>{
                        return (
                            <ImageData data={src} key={i} />
                        )
                    })
                }
            </div>
         </div>
         {/* // for mobile phones */}
         <div className='md:hidden px-2 mt-12 flex flex-col'>
            <h1 className='text-start font-bold text-3xl'>Trending This Week</h1>
            <div className='bg-gray-300 mt-8 h-[1px] w-full'></div>
            {/* for mobile  */}
            <ul className=' md:hidden flex mt-6 ml-2 w-60 font-medium text-[16px] justify-between'>
                <li className='text-primary'>Men</li>
                <li>Women</li>
                <li>Baby</li>
                <li>Fashion</li>
            </ul>
            <div className='mt-8 relative flex flex-col justify-center items-center group'>
                <img src={images[Current]} key={Current} alt="" className='' />
                <div className='bg-white text-black absolute p-2.5 w-40 text-xl justify-around bottom-24 flex opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <FontAwesomeIcon icon={faCartShopping} />
                    <FontAwesomeIcon icon={faHeart} />
                    <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
                </div>
                <p className='text-lg m-2 hover:text-primary'>Cashmere Tank + Bag</p>
                <p className='text-lg hover:'>$98.00</p>
            </div>
        </div>
         </>
    )
}

export default TrendingThisweek
