import React, { useState } from 'react'
import { MdOutlineHouseboat } from "react-icons/md";
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
  // State to tuggle icons
  const [ isTuggle, setIsTuggle] = useState<boolean>(false)


  return (
    <div className='w-full fixed z-30 top-5 md:top-7'>
      <div className='w-[92% md:w-[90%] container mx-auto bg-white px-3 md:px-8 py-3 lg:py-5 rounded-full bg-opacity-60 border border-white'>
        <div className='relative flex items-center justify-between'>
          <div className='flex items-center'>
            <MdOutlineHouseboat style={{ color: '#825b52' }} className='text-3xl' />
            <h1 className='hidden md:block text-2xl'>Realtor</h1>
          </div>

          <nav className={`w-full md:w-auto ${isTuggle ? 'h-[500px]' : 'h-0'} absolute md:static md:h-auto top-14 bg-white md:bg-inherit overflow-hidden ease-linear duration-300`}>
            <ul className='py-9 md:py-0 flex flex-col md:flex-row items-center gap-6'>
              <li className=''>Home</li>
              <li className=''>Types of House</li>
              <li className=''>Properties</li>
              <li className=''></li>
            </ul>
          </nav>

          <div className='flex items-center gap-4'>
            <button className='bg-primaryColor text-sm text-white w-[78px] py-1 md:py-2 rounded-full'>Contact</button>
            <div onClick={() => setIsTuggle(!isTuggle)} className=' md:hidden cursor-pointer'>
              {isTuggle ? <FaTimes size={23} /> : <FaBars size={23} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header