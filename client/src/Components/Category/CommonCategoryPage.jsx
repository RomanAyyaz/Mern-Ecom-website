import React from 'react'

function CommonCategoryPage({data}) {
  return (
    <div className='w-full h-80 bg-testimonial flex justify-center items-center flex-col
          lg:h-40                    '>
        <h1 className='text-3xl font-normal pt-20 lg:pt-2'>Category</h1>
        <p className='mt-2.5 text-neutral-500'>Home | {data}</p>
    </div>
  )
}

export default CommonCategoryPage