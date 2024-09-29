import React from 'react'
import Hero from '../Components/Hero/Hero'
import Header from '../Components/Header/Header'
import Rent from '../Components/Properties/Rent'
import Sale from '../Components/Properties/Sale'

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Rent />
      <Sale />
    </div>
  )
}

export default Home