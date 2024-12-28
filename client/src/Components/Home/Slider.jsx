// import React, { useState ,useEffect } from 'react'
// import ImageOne from '../../Assets/Images/pexels-cottonbro-10570765.jpg'
// import ImageTwo from '../../Assets/Images/pexels-olly-3839254.jpg'
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
// import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
// function Slider() {
//     let Images = [ImageOne,ImageTwo]
//     let [Current,SetCurrent] = useState(0)
//     let pre = ()=>{
//         Current === 0 ? SetCurrent(Images.length -1) : SetCurrent(Current -1)
//     }
//     let next = ()=>{
//         Current === Images.length-1 ? SetCurrent(0) : SetCurrent(Current+1)
//     }
//     useEffect(() => {
//         const interval = setInterval(() => {
//             next();
//         }, 5000);

//         return () => clearInterval(interval)
//     }, [Current]);
//   return (
//     <div className='flex overflow-hidden relative'>
//         <img className='object-cover h-[580px] md:h-[700px] w-full opacity-80' src={Images[Current]} alt=" one of slider" />
//         <div className='font-tilte absolute inset-0 flex flex-col justify-center items-center mt-28'>
//             <h1 className='font-tile text-primary text-5xl'>Fashion Sale</h1>
//             <h1 className='mt-6 font-medium text-3xl'>Minimal Menz Style</h1>
//             <p className='mt-5 max-w-lg mx-auto text-lg leading-relaxed'>
//                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, sed.
//                     Lorem ipsum dolor sit, amet consectetur adipisicing.
//                 </p>
//             <button className='bg-black text-white px-7 py-2.5 mt-6 hover:border hover:border-black hover:bg-transparent hover:text-black'>Shop Now</button>
//         </div>
//         <div className='absolute top-1/2 left-4 transform -translate-y-1/2 z-10'>
//         <button onClick={pre} className='hidden md:block bg-black text-white p-2 rounded-full'>
//           <FontAwesomeIcon icon={faChevronLeft} />
//         </button>
//       </div>
//       <div className='absolute top-1/2 right-4 transform -translate-y-1/2 z-10'>
//         <button onClick={next} className='hidden md:block bg-black text-white p-2 rounded-full'>
//           <FontAwesomeIcon icon={faChevronRight} />
//         </button>
//       </div>
//     </div>
//   )
// }

// export default Slider