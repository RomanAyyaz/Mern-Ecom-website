import React from 'react'
import Header from '../Header/Header'
import Hero from './Hero'
import BelowHero from './BelowHero/BelowHero'
import TrendingThisweek from './Trending/TrendingThisweek'
import CustomerTestimonial from './CustomerTestimonial'
import DeleviryPage from './DeleviryPage'
import Footer from '../Footer/Footer'
function Home() {
  return (
  <div>
  <Header/>
  <Hero/>
  <BelowHero/>
  <TrendingThisweek/>
  <CustomerTestimonial/>
  <DeleviryPage/>
  <Footer/>
  </div>
  )
}

export default Home