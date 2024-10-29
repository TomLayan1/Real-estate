import React from 'react';
import { PiEnvelope } from "react-icons/pi";
const Newsletter: React.FC = () => {



  return (
    <section className='newsletter-bx h-[360px] relative'>
      <div className='absolute pt-[50px] top-0 bottom-0 left-0 right-0 w-full h-full bg-heroBg overflow-hidden'>
        <div className='container'>
          <div className='w-full md:w-[60%] lg:w-[40%] mx-auto mb-28 md:mb-16'>
            <h3 className='text-xl md:text-2xl text-center font-bold text-white leading-relaxed tracking-wide mb-10'>Subscribe now for exclusive property insight and deals!</h3>
            <form className='w-[95%] mx-auto bg-white flex items-center gap-4 rounded-full py-1 pl-5 pr-1'>
              <PiEnvelope size={27} className='text-primaryColor text-lg' />
              <input type='text' placeholder='Enter your Email' className='w-[70%] py-2 px-2 text-sm' />
              <button type='submit' className='w-[100px] py-2 bg-primaryColor text-white text-sm rounded-full'>Submit</button>
            </form>
          </div>
          <h1 className='text-7xl md:text-9xl font-extrabold text-gray-400 text-opacity-35 tracking-widest text-center'>City Scape</h1>
        </div>
      </div>
    </section>
  )
}

export default Newsletter