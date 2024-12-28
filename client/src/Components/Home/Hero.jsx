import React from 'react'
//import Imageone from '../../Assets/Images/pexels-pixmike-413195.jpg'
import ImageTwo from '../../Assets/Images/pexels1.jpg'
function Hero() {
  return (
    <div className='relative'>
        <img className='max-w-full h-[600px] md:w-full object-cover' src={ImageTwo} alt="" />
        <div className='bg-hero text-start pl-6 text-black h-96 w-[330px] top-36 left-3 absolute
            md:w-[500px]  md:h-[400px] md:left-10  md:top-20'>
            <h1 className='text-3xl font-title font-medium text-neutral-700 mt-8
             md:text-4xl'>70% SALE OFF</h1>
            <h1 className='font-title font-bold text-5xl leading-[60px] md:text-6xl md:py-2.5
            md:leading-[65px] '>CLOTHES AT COST</h1>
            <p className='leading-8 py-2 md:py-1 font-normal'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, placeat inventore voluptatibus aliquid animi dolorem.</p>
            <button className='bg-primary py-3 px-5 text-white font-title font-medium mt-3'>Discover More</button>
        </div>
    </div>
  )
}

export default Hero