import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
function Order({ data }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [status, setStatus] = useState(data.status);
  let UpdateOrderApi= async ()=>{
    let response = await fetch(`http://localhost:8000/admin/order/${data._id}`,{
      method:"PUT",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({status})
    })
    return response.json()
  }
  let UpdateOrderMutaions = useMutation({
    mutationFn:UpdateOrderApi,
    onSuccess:()=>{
      console.log('Order Updated SuccessFully')
    },
    onError:()=>{
      console.log('error in order updating')
    }
  })
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    UpdateOrderMutaions.mutate();
    setIsDropdownOpen(false);
  };

  return (
    <div className='flex justify-evenly mb-4'>
      <div className='w-1/5 my-2'>{data.user.name}</div>
      <div className='w-1/5 my-2'>Cashmere Tank</div>
      <div className='w-1/5 my-2'>$ {data.totalPrice}</div>
      <div className='relative w-1/5 my-2 flex justify-center'>
        <div className='w-20'>
          <p
            className={status === 'Processing'?'bg-blue-500 text-white cursor-pointer' :
              status === 'Completed' ? 'bg-green-500 text-white cursor-pointer' :
              'bg-second text-white cursor-pointer'
            }
            onClick={toggleDropdown}
          >
            {status}
          </p>
          {isDropdownOpen && (
            <div className='absolute top-full left-0 mt-1 w-32 bg-white border border-gray-200 rounded shadow-lg z-10'>
              <p
                className='cursor-pointer p-2 hover:bg-gray-200'
                onClick={() => handleStatusChange('Completed')}
              >
                Completed
              </p>
              <p
                className='cursor-pointer p-2 hover:bg-gray-200'
                onClick={() => handleStatusChange('Processing')}
              >
                Processing
              </p>
            </div>
          )}
        </div>
      </div>
      <div className='w-1/5 my-2 flex justify-center'>
        <div className='w-16'>
          <p className='bg-green-500 text-white'>Paid</p>
        </div>
      </div>
    </div>
  );
}

export default Order;
