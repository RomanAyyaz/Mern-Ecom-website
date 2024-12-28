import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';
import {useMutation, useQueryClient} from '@tanstack/react-query'
function Customers({data}) {
    let id = data._id
    const QueryClient = useQueryClient()
    const UserDeleteApi = async()=>{
        let response = await fetch(`http://localhost:8000/admin/customer/${id}`,{
            method:"DELETE"
        })
        return response.json()
    }
    const UserDeleteMutations = useMutation({
        mutationFn:UserDeleteApi,
        onSuccess:()=>{
            QueryClient.invalidateQueries('customer')
            console.log('User Deleted Successfully')
        },
        onError:()=>{
            console.log('error in deleting ')
        }
    })
  return (
    <div className='flex justify-evenly my-2 hover:cursor-pointer'>
        <div className='w-1/4'>
        <h1>{data.name}</h1>
        </div>
        <div className='w-1/4 flex justify-center '>
        <div className='w-16'>
        <p className='bg-green-500 text-white'>Verified</p>
        </div>
        </div>
        <div className='w-1/4'>
        <h1>3</h1>
        </div>
        <div className='w-1/4 flex justify-center text-primary' onClick={()=>{
            UserDeleteMutations.mutate()
        }}>
        <FaTrashAlt/>
        </div>
   </div>
  )
}

export default Customers