import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { Link } from 'react-router-dom'

function Products({data}) {
    const id = data._id
    const QueryClient = useQueryClient()
    let DeleteApi = async (id)=>{
        let response = await fetch (`http://localhost:8000/admin/productdelete/${id}`,{
            method:'DELETE'
        })
        if(!response){
            return Error
        }
    }
    let DeleteMutations = useMutation({
        mutationFn:DeleteApi,
        onSuccess:()=>{
            QueryClient.invalidateQueries('product')
            console.log('Product deleted SuccessFully')
        },
        onError:()=>{
            console.log('error in deleteing the product')
        }
    })
  return (
    <div className='w-80 shadow-2xl my-3 h-[430px]'>
        <img className='h-60 w-72 mx-3' src={`http://localhost:8000${data.images[0]}`} alt="" />
        <h1 className='font-bold mt-1.5 mx-3'>{data.name}</h1>
        <h1 className='font-medium mx-3 mt-1.5'>$ {data.price}</h1>
        <p className='mx-3 mt-1.5 text-ellipsis truncate text-md text-neutral-500'>{data.description}</p>
        <Link to={`/edit/${data._id}`}>
        <button className='mx-3 mt-1.5 bg-green-600 px-5 py-3 rounded-md' >Edit</button>
        </Link>
        <button className='mx-3 mt-1.5 bg-primary p-3 rounded-md mb-2' onClick={()=>{
            DeleteMutations.mutate(id)
        }} >Delete</button>
    </div>
  )
}

export default Products