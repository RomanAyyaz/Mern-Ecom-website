import React from 'react';
import One from '../../../Assets/Images/1.jpeg';
import Two from '../../../Assets/Images/2.jpeg';
import Three from '../../../Assets/Images/3.jpeg';
import BelowHeroCom from './BelowHeroCom';

function BelowHero() {
  const ImagesSrc = [
    {
      Fashion:"Men's Fashion",
      src:One
    },{
      Fashion:"Women's Fashion",
      src:Two
    },{
      Fashion:"Baby Fashion",
      src:Three
    }
  ];

  return (
    <div className='md:gap-2 lg:gap-0 flex mt-3 md:mx-5 lg:mx-10 px-2 flex-col md:flex-row lg:justify-evenly'>
      {ImagesSrc.map((src, index) => (
        <BelowHeroCom data={src} key={index} />
      ))}
    </div>
  );
}

export default BelowHero;
