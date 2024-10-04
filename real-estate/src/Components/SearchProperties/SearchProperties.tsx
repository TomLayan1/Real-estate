import React from 'react'
import { Link } from 'react-router-dom'
import { BsGridFill } from "react-icons/bs";
import { FaBath, FaBed } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import millify from 'millify'
import placeholder from '../../Assets/placeholder.jpg'
import { Property } from '../../Context/Context'


const SearchProperties: React.FC<Property> = ({ externalID, coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified }) => {


  return (
    <Link to={`/property/${externalID}`} className='shadow-customShado'>
      <div className='bb-black h-[190px]'>
        <img className='w-full h-full rounded-xl'  src={coverPhoto ? coverPhoto.url : placeholder} alt='house' />
      </div>

      <div className='py-2 text-sm'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-1 mb-2'>
            {isVerified && <MdVerified className='text-primaryColor text-lg' />}
            <div className='flex'>
              <p className='font-bold'>AED {millify(price)}</p>
              {rentFrequency &&  <p className='font-bold'>/{rentFrequency}</p>}
            </div>
          </div>
          <img className='w-[30px]' src={agency?.logo?.url} alt={agency?.name} />
        </div>

        <div className='flex items-center gap-3 text-primaryColor mb-2'>
          <div className='flex items-center gap-1'>
            <p className='text-black'>{rooms}</p>
            <FaBed />
          </div>
          |
          <div className='flex items-center gap-1 text-primaryColor'>
            <p className='text-black'>{baths}</p>
            <FaBath />
          </div>
          |
          <div className='flex items-center gap-1 text-primaryColor'>
            <p className='text-black'>{millify(area)} sqft</p>
            <BsGridFill />
          </div>
        </div>
        <p className={`${title.length > 30 ? 'text-nowrap text-ellipsis overflow-hidden' : ''}`}>{title}</p>
      </div>
    </Link>
  )
}

export default SearchProperties