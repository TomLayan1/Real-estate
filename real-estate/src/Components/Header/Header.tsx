import React, { useState } from 'react'
import { MdOutlineHouseboat } from "react-icons/md";
import { FaBars, FaTimes } from 'react-icons/fa';
import { IoSearchSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Header = () => {
  // State to tuggle icons
  const [ isTuggle, setIsTuggle] = useState<boolean>(false)
  const [searchClicked, setSearchClicked] = useState<boolean>(false)

  


  return (
    <div className='w-full fixed z-30 top-4 md:top-3'>
      <div className='w-[92%] md:w-[90%] container mx-auto bg-white px-3 md:px-8 py-3 lg:py-5 rounded-full bg-opacity-85 border border-white'>
        <div className='relative flex items-center justify-between'>
          <Link to={'/'}><div className='flex items-center lg:mr-28'>
            <MdOutlineHouseboat style={{ color: '#825b52' }} className='text-3xl' />
            <h1 className='hidden md:block text-2xl'>Realtor</h1>
          </div></Link>

          <nav className={`w-full md:w-auto ${isTuggle ? 'h-[500px]' : 'h-0'} absolute md:static md:h-auto top-14 bg-white md:bg-inherit overflow-hidden ease-linear duration-300`}>
            <ul className='h-[250px] md:h-auto py-9 md:py-0 flex flex-col md:flex-row items-center gap-10'>
              <Link to={'/'}><li className=''>Home</li></Link>
              <Link to={'/search?purpose=for-rent'}><li className=''>For Rent</li></Link>
              <Link to={'/search?purpose=for-sale'}><li className=''>For Sale</li></Link>
              <Link to={''}><li className=''></li></Link>
            </ul>
          </nav>

          <div className='flex items-center gap-3'>
            <Link to={'/search'}><IoSearchSharp size={20} onClick={()=>setSearchClicked(!searchClicked)} /></Link>
            <button className='bg-primaryColor text-sm text-white py-2 px-4 rounded-full'>Contact</button>
            <div onClick={() => setIsTuggle(!isTuggle)} className='w-[8%] md:hidden'>
              {isTuggle ? <FaTimes size={23} /> : <FaBars size={23} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header