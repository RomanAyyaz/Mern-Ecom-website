import React from 'react'

function CustomerTestimonial() {
  return (
    <div className='bg-testimonial w-full h-[450px] mt-10 flex flex-col lg:mt-28 lg:h-[500px]'>
        <h1 className='font-title font bold text-3xl pt-20 lg:text-4xl'>Customer Testimonial</h1>
        <p className='text-wrap text-neutral-500 text-lg p-6 lg:w-[570px] lg:my-10 lg:ml-[370px] lg:text-xl lg:font-medium
        lg:p-0 lg:leading-loose
        '>EveryBody is Different thats why we offer style for everyone. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, nobis!</p>
        <div className='flex justify-center item-center'>
            <img className='h-28 w-28 rounded-full lg:h-20 lg:w-20' src="https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg" alt="" />
            <div className='text-start py-2.5 px-5 flex flex-col justify-center items-center lg:ml-2'>
                <p className='text-2xl font-bold lg:text-lg '>Petty Cruiser</p>
                <p className='text-neutral-600 text-lg font-bold mt-1.5 lg:text-base'>Web Developer</p>
            </div>
        </div>
    </div>
  )
}

export default CustomerTestimonial