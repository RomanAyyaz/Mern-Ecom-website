import React, { useContext, useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { UserContext } from '../../Context/UserContext';

function CommonFilter() {
  const [CategoryShow, setCategoryShow] = useState(false);
  const [TypeShow, setTypeShow] = useState(false);
  const [SizeShow, setSizeShow] = useState(false);
  const [ColorShow, setColorShow] = useState(false);
  const Category = ['shirt', 'pants', 'jeans', 'underwear', 'Category 5'];
  const Type = ['Type 1', 'Type 2', 'Type 3', 'Type 4', 'Type 5'];
  const Size = ['SM', 'MD', 'LG', 'XL', 'XXL'];
  const Color = ['Red', 'Green', 'Blue', 'Black', 'Orange'];
  const Brands = ['Zara', "levi's", 'Outfitter', 'Breakout'];
  const [selectedType, setSelectedType] = useState('Type');
  const [selectedColor, setSelectedColor] = useState('Color');
  const [selectedSize, setSelectedSize] = useState('Size');

  const { filter, Setfilter } = useContext(UserContext);

  const handleCategorySelect = (item) => {
    Setfilter({ ...filter, category: item });
    setCategoryShow(false);
  };

  const handleBrandSelect = (brand) => {
    let updatedBrand = [...filter.brand];
    if (updatedBrand.includes(brand)) {
      updatedBrand = updatedBrand.filter((b) => b !== brand);
    } else {
      updatedBrand.push(brand);
    }
    Setfilter({ ...filter, brand: updatedBrand });
  };
  return (
    <div className='mx-3.5 w-96 border border-gray-400 h-auto mt-20 flex flex-col px-5 py-5 lg:mt-10 lg:ml-16 lg:w-[355px]'>
      <div>
        {/* Category Section */}
        <div className='my-4 flex justify-between items-center border border-gray-500 py-2 px-3.5 rounded-3xl'>
          <h1>{filter.category || 'Category'}</h1>
          <BiChevronDown className='text-xl text-neutral-600' onClick={() => {
            setCategoryShow(!CategoryShow);
          }} />
        </div>
        {
          CategoryShow && <div className='z-50 text-start mt-[-11px] w-82 border border-gray-300'>
            {
              Category.map((categoryItem, i) => (
                <p className='py-2 px-3.5 block hover:bg-gray-100 mt-1'
                  onClick={() => handleCategorySelect(categoryItem)} key={i}>
                  {categoryItem}
                </p>
              ))
            }
          </div>
        }
        {/* Type Section */}
        <div className='my-4 flex justify-between items-center border border-gray-500 py-2 px-3.5 rounded-3xl'>
          <h1>{selectedType}</h1>
          <BiChevronDown className='text-xl text-neutral-600' onClick={() => {
            setTypeShow(!TypeShow);
          }} />
        </div>
        {
          TypeShow && <div className='inset-0 text-start mt-[-11px] w-82 border border-gray-300'>
            {
              Type.map((typeItem, i) => (
                <p className='py-2 px-3.5 block hover:bg-gray-100 mt-1'
                  onClick={() => {
                    setSelectedType(typeItem);
                    setTypeShow(!TypeShow);
                  }} key={i}>
                  {typeItem}
                </p>
              ))
            }
          </div>
        }
        {/* Size Section */}
        <div className='my-4 flex justify-between items-center border border-gray-500 py-2 px-3.5 rounded-3xl'>
          <h1>{selectedSize}</h1>
          <BiChevronDown className='text-xl text-neutral-600' onClick={() => {
            setSizeShow(!SizeShow);
          }} />
        </div>
        {
          SizeShow && <div className='inset-0 text-start mt-[-11px] w-82 border border-gray-300'>
            {
              Size.map((sizeItem, i) => (
                <p className='py-2 px-3.5 block hover:bg-gray-100 mt-1'
                  onClick={() => {
                    setSelectedSize(sizeItem);
                    setSizeShow(!SizeShow);
                  }} key={i}>
                  {sizeItem}
                </p>
              ))
            }
          </div>
        }
        {/* Color Section */}
        <div className='my-4 flex justify-between items-center border border-gray-500 py-2 px-3.5 rounded-3xl'>
          <h1>{selectedColor}</h1>
          <BiChevronDown className='text-xl text-neutral-600' onClick={() => {
            setColorShow(!ColorShow);
          }} />
        </div>
        {
          ColorShow && <div className='inset-0 text-start mt-[-11px] w-82 border border-gray-300'>
            {
              Color.map((colorItem, i) => (
                <p className='py-2 px-3.5 block hover:bg-gray-100 mt-1'
                  onClick={() => {
                    setSelectedColor(colorItem);
                    setColorShow(!ColorShow);
                  }} key={i}>
                  {colorItem}
                </p>
              ))
            }
          </div>
        }
      </div>
      {/* Filter By Genres Section */}
      <div className="my-6">
        <h1 className='text-start font-medium'>Filter By Genres</h1>
        <div className="flex flex-col space-y-4 mt-6 ml-3">
          <div className="flex items-center my-1">
            <input
              type="checkbox"
              id="checkbox1"
              className="form-checkbox h-5 w-5 rounded-full text-primary checked:bg-primary"
            />
            <label htmlFor="checkbox1" className="ml-2 font-normal text-gray-700">
              History
            </label>
          </div>
          <div className="flex items-center my-1">
            <input
              type="checkbox"
              id="checkbox2"
              className="form-checkbox h-5 w-5 rounded-full text-primary checked:bg-primary"
            />
            <label htmlFor="checkbox2" className="ml-2 font-normal text-gray-700">
              Horror
            </label>
          </div>
          <div className="flex items-center my-1">
            <input
              type="checkbox"
              id="checkbox3"
              className="form-checkbox h-5 w-5 rounded-full text-primary checked:bg-primary"
            />
            <label htmlFor="checkbox3" className="ml-2 text-gray-700">
              Biography
            </label>
          </div>
          <div className="flex items-center my-1">
            <input
              type="checkbox"
              id="checkbox4"
              className="form-checkbox h-5 w-5 rounded-full text-primary checked:bg-primary"
            />
            <label htmlFor="checkbox4" className="ml-2 text-gray-700">
              Science Fiction
            </label>
          </div>
        </div>
      </div>
      {/* Filter By Brands Section */}
      <div className="my-6">
        <h1 className='text-start font-medium'>Filter By Brands</h1>
        <div className="flex flex-col space-y-4 mt-6 ml-3">
          {
            Brands.map((brand, i) => (
              <div className="flex items-center my-1" key={i}>
                <input
                  type="checkbox"
                  id={`brandCheckbox${i}`}
                  className="form-checkbox h-5 w-5 rounded-full text-primary checked:bg-primary"
                  checked={filter.brand.includes(brand)}  // Ensure checkbox state is controlled
                  onChange={() =>{ 
                    handleBrandSelect(brand)

                  }}
                />
                <label htmlFor={`brandCheckbox${i}`} className="ml-2 font-normal text-gray-700">
                  {brand}
                </label>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default CommonFilter;
