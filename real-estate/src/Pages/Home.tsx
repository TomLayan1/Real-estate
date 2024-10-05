import React from 'react'
import Hero from '../Components/Hero/Hero'
import Header from '../Components/Header/Header'
import Rent from '../Components/Properties/Rent'
import Sale from '../Components/Properties/Sale'
import Newsletter from '../Components/Newletter/Newsletter'
import Faqs from '../Components/FAQs/Faqs'

const Home: React.FC = () => {
  return (
    <div className='bg-bodyColor scroll-smooth'>
      <Hero />
      <Rent />
      <Sale />
      <Faqs />
      <Newsletter />
    </div>
  )
}

export default Home