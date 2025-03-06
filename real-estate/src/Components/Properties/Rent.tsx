import React, { useContext, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { RealEstateContext } from '../../Context/Context'
import Lottie from 'lottie-web';
import { BsGridFill } from "react-icons/bs";
import { FaBath, FaBed } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import millify from 'millify'
import placeholder from '../../Assets/placeholder.jpg'

const Rent: React.FC = () => {
  // From context
  const { forRentData, isLoading, error } = useContext(RealEstateContext)

  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (container.current) {
      Lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('../../loading.json')
      })
    }

    // Cleanup to prevent multiple animations
     return () => {
        Lottie.destroy();
    };
  }, [])
  
  
  return (
    <section id='for-rent' className='pt-24 pb-7'>
      <div className='container'>
        <div className='mb-20 mx-auto'>
          <h1 className='text-2xl md:text-4xl text-center text-primaryColor font-bold mb-3'>Find Your Perfect Rental Home</h1>
          <p className='text-center text-sm md:text-base w-[65%] mx-auto'>Browse through a curated selection of rental properties designed to fit your lifestyle and budget.</p>
        </div>
        {isLoading && <div className='w-[20%] mx-auto' ref={container}></div>}
        {error && <p className='text-xl text-center'>{error}</p>}
        <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {forRentData?.map(rent => (
            <Link to={`/property/${rent?.externalID}`} key={rent?.externalID} className='shadow-customShado'>
              <div className='bb-black h-[190px]'>
                <img className='w-full h-full rounded-xl'  src={rent?.coverPhoto ? rent.coverPhoto.url : placeholder} alt='house' />
              </div>

              <div className='py-2 text-sm'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-1 mb-2'>
                    {rent.isVerified && <MdVerified className='text-primaryColor text-lg' />}
                    <p className='font-bold'>AED {millify(rent?.price)}/{rent.rentFrequency}</p>
                  </div>
                  <img className='w-[30px]' src={rent?.agency?.logo?.url} alt={rent?.agency?.name} />
                </div>

                <div className='flex items-center gap-3 text-primaryColor mb-2'>
                  <div className='flex items-center gap-1'>
                    <p className='text-black'>{rent?.rooms}</p>
                    <FaBed />
                  </div>
                  |
                  <div className='flex items-center gap-1 text-primaryColor'>
                    <p className='text-black'>{rent?.baths}</p>
                    <FaBath />
                  </div>
                  |
                  <div className='flex items-center gap-1 text-primaryColor'>
                    <p className='text-black'>{millify(rent?.area)} sqft</p>
                    <BsGridFill />
                  </div>
                </div>
                <p className={`${rent.title.length > 30 ? 'text-nowrap text-ellipsis overflow-hidden' : ''}`}>{rent?.title}</p>
              </div>
            </Link >
          ))}
        </div>
      </div>
    </section>
  )
}

export default Rent