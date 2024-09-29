import React from 'react'
import heroImg from '../../Assets/hero-img.jpg'

const Hero: React.FC = () => {
  return (
    <div className='relative w-full h-[655px]'>
      <img className='h-full w-full' src={heroImg} alt='hero' />
      <div></div>
    </div>
  )
}

export default Hero