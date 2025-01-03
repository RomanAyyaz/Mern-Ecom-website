import React ,{ useContext }from 'react'
import Header from '../../Header/Header'
import {useQuery} from '@tanstack/react-query'
import CommonCategoryPage from '../CommonCategoryPage'
import CommonFilter from '../CommonFilter'
import Footer from '../../Footer/Footer'
import { UserContext } from '../../../Context/UserContext'
import BabyProduct from './BabyProduct'
function Baby() {
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
  const {filter} = useContext(UserContext)
  const {data,isLoading,error} = useQuery({
    queryKey:['product',filter],
    queryFn:async ()=>{
      let query = ''
      if(filter.category){
        query+=`?category=${filter.category}`
      }
      if (filter.brand.length > 0) {
        const brandQuery = filter.brand.map((brand) => `brand=${encodeURIComponent(brand)}`).join('&');
        query += query ? `&${brandQuery}` : `?${brandQuery}`;
      }
      let response = await fetch(`${API_BASE_URL}/user/men${query}`,{
        method: 'Get'
      })
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    }
    
  })
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  const AllProducts =data.Products
  return (
    <div>
    <Header/>
    <CommonCategoryPage data={'Baby'}/>
    <div className='lg:flex'>
    <CommonFilter/>
    <div className='flex flex-col lg:flex-row py-8 justify-center items-center
     lg:py-0 lg:justify-center lg:gap-3 lg:items-start lg:flex-wrap'>
    {
      AllProducts && AllProducts.length > 0?AllProducts.map((data,i)=>{
        return(
          <BabyProduct product = {data}/>
        )
      }):"No data is availabe"
    }
    </div>
    </div>
    <Footer/>
</div>
  )
}

export default Baby