import React, { useContext, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { RealEstateContext } from '../../Context/Context'
import Lottie from 'lottie-web';
import { BsGridFill } from "react-icons/bs";
import { FaBath, FaBed } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import millify from 'millify';
import placeholder from '../../Assets/placeholder.jpg';

const Sale: React.FC = () => {
  // From context
  const { forSaleData, isLoading, error } = useContext(RealEstateContext)

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
    <section id='for-sale' className='pt-20 pb-14'>
      <div className='container'>
        <div className='mb-20 mx-auto'>
          <h1 className='text-2xl md:text-4xl text-center text-primaryColor font-bold mb-3'>Discover Your Ideal Home for Sale</h1>
          <p className='text-center text-sm md:text-base md:w-[65%] mx-auto'>Explore a carefully curated collection of properties designed to suit your lifestyle and budget. Start your journey to your dream home today!</p>
        </div>
        {isLoading && <div className='w-[20%] mx-auto' ref={container}></div>}
        {error && <p className='text-xl text-center'>{error}</p>  }
        <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {forSaleData?.map(sale => (
            <Link to={`/property/${sale?.externalID}`} key={sale?.externalID} className='shadow-customShado'>
              <div className='bb-black h-[190px]'>
                <img className='w-full h-full rounded-xl'  src={sale?.coverPhoto ? sale.coverPhoto.url : placeholder} alt='house' />
              </div>

              <div className='py-2 text-sm'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-1 mb-2'>
                    {sale.isVerified && <MdVerified className='text-primaryColor text-lg' />}
                    <p className='font-bold'>AED {millify(sale?.price)}</p>
                  </div>
                  <img className='w-[30px]' src={sale?.agency?.logo?.url} alt={sale?.agency?.name} />
                </div>

                <div className='flex items-center gap-3 text-primaryColor mb-2'>
                  <div className='flex items-center gap-1'>
                    <p className='text-black'>{sale?.rooms}</p>
                    <FaBed />
                  </div>
                  |
                  <div className='flex items-center gap-1 text-primaryColor'>
                    <p className='text-black'>{sale?.baths}</p>
                    <FaBath />
                  </div>
                  |
                  <div className='flex items-center gap-1 text-primaryColor'>
                    <p className='text-black'>{millify(sale?.area)} sqft</p>
                    <BsGridFill />
                  </div>
                </div>
                <p className={`${sale.title.length > 30 ? 'text-nowrap text-ellipsis overflow-hidden' : ''}`}>{sale?.title}</p>
              </div>
            </Link >
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sale