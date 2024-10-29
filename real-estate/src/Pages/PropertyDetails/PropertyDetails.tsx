import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { RealEstateContext } from '../../Context/Context'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { BsGridFill } from "react-icons/bs";
import { FaBath, FaBed } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import millify from 'millify';


const PropertyDetails: React.FC = () => {
  // From context
  const { propertyDetails, fetchPropertyDetails } = useContext(RealEstateContext)

  const { ExternalID } = useParams<{ ExternalID: string }>()

  // Fetch property details based on ExternalID
  useEffect(() => {
    if (ExternalID) {
      fetchPropertyDetails?.(ExternalID)
    }
  }, [ExternalID, fetchPropertyDetails])

  const [index, setIndex] = useState<number>(0)

  const handlePrev = () => {
    if (propertyDetails?.photos && index > 0) {
      setIndex( index - 1)
    }
  }

  const handleNext = () => {
    if (propertyDetails?.photos && index < propertyDetails?.photos?.length - 1) {
      setIndex( index + 1)
    }
  }


  return (
    <section className='py-24'>
      <div className='container w-[90%] mx-auto'>
        {propertyDetails && (
          <>
            <div className='max-w-[790px] max-h-[300px] md:max-h-[400px] mx-auto rounded-2xl flex relative group overflow-hidden mb-8'>
                {propertyDetails?.photos.map(photo => (
                  <img 
                  style={{ transform: `translateX(-${index * 100}%)`}}
                  className='ease-out duration-500'
                  key={photo?.id} src={photo?.url} alt={photo?.title} />
                ))}
              <div className='w-full h-full flex items-center justify-between absolute px-4'>
                <button onClick={handlePrev} className='text-primaryColor bg-white bg-opacity-70 p-1 rounded-full'>
                  <FaChevronLeft size={20} />
                </button>
                <button onClick={handleNext} className='text-primaryColor bg-white bg-opacity-70 p-1 rounded-full'>
                  <FaChevronRight size={20} />
                </button>
              </div>
            </div>
            <div className='lg:max-w-[790px] mx-auto '>
              <div className='mb-3 text-sm'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-1 mb-2'>
                    {propertyDetails?.isVerified && <MdVerified className='text-primaryColor text-lg' />}
                    <div className='flex'>
                      <p className='font-bold'>AED {millify(propertyDetails?.price)}</p>
                      {propertyDetails?.rentFrequency && <p className='font-bold'>/{propertyDetails?.rentFrequency}</p>}
                    </div>
                  </div>
                  <img className='w-[30px]' src={propertyDetails?.agency?.logo?.url} alt={propertyDetails?.agency?.name} />
                </div>

                <div className='flex items-center gap-3 text-primaryColor mb-2'>
                  <div className='flex items-center gap-1'>
                    <p className='text-black'>{propertyDetails?.rooms}</p>
                    <FaBed />
                  </div>
                  |
                  <div className='flex items-center gap-1 text-primaryColor'>
                    <p className='text-black'>{propertyDetails?.baths}</p>
                    <FaBath />
                  </div>
                  |
                  <div className='flex items-center gap-1 text-primaryColor'>
                    <p className='text-black'>{millify(propertyDetails?.area)} sqft</p>
                    <BsGridFill />
                  </div>
                </div>
              </div>

              <div className='text-sm md:text-base'>
                <h4 className='text-lg uppercase font-bold mb-5'>{propertyDetails.title}</h4>
                <p className='tracking-wide leading-8 mb-4'>{propertyDetails?.description}</p>
                <h3 className='font-semibold uppercase tracking-wide mb-3'>Purpose: <span className='font-normal'>{propertyDetails.purpose}</span></h3>
                <h3 className='font-semibold uppercase tracking-wide mb-3'>Facilities</h3>
                <div>
                  {propertyDetails?.amenities.map(amenityGroup => (
                    amenityGroup?.amenities?.map((item, i) => (
                      <p className='mb-2'>{item?.text}</p>
                    ))
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default PropertyDetails