import React from 'react'

const Hero: React.FC = () => {
  return (
    <div className='relative w-full h-[750px] md:h-[655px] hero-bx'>
      <div className='absolute w-full h-full bg-heroBg flex items-center'>
        <div className='container'>
          <h1 className='text-4xl md:text-5xl font-extrabold text-center text-white mb-6 md:mb-6'>Find Your Dream Home Today</h1>
          <p className='text-lg text-center text-white md:w-[90%] lg:w-[60%] mx-auto'>Explore the finest properties, tailored to your lifestyle. Whether buying, renting, or investing, discover your perfect space with us.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero