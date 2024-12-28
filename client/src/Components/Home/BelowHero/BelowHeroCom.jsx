
function BelowHeroCom({ data }) {
  return (
    <div className='relative'>
      <img className='mt-3 md:w-[340px]   m:h-96 text-opacity-95 object-cover' src={data.src} alt="Below Hero" />
      <h1 className='absolute bottom-5 w-52 left-1/2 font-bold transform -translate-x-1/2  text-white p-1 text-shadow-xl text-2xl md:text-xl'>{data.Fashion}</h1>
    </div>
  );
}

export default BelowHeroCom;
