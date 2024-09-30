import React, { useState } from 'react'
import { MdOutlineHouseboat } from "react-icons/md";
import { FaBars, FaTimes } from 'react-icons/fa';
import { IoSearchSharp } from "react-icons/io5";

const Header = () => {
  // State to tuggle icons
  const [ isTuggle, setIsTuggle] = useState<boolean>(false)
  const [searchClicked, setSearchClicked] = useState<boolean>(false)

  


  return (
    <div className='w-full fixed z-30 top-5 md:top-7'>
      <div className='w-[92%] md:w-[90%] container mx-auto bg-white px-3 md:px-8 py-3 lg:py-5 rounded-full bg-opacity-85 border border-white'>
        <div className='relative flex items-center justify-between'>
          <div className='flex items-center lg:mr-60'>
            <MdOutlineHouseboat style={{ color: '#825b52' }} className='text-3xl' />
            <h1 className='hidden md:block text-2xl'>Realtor</h1>
          </div>

          <nav className={`w-full lg:w-auto ${isTuggle ? 'h-[500px]' : 'h-0'} absolute lg:static lg:h-auto top-14 bg-white lg:bg-inherit overflow-hidden ease-linear duration-300`}>
            <ul className='h-[250px] lg:h-auto lg:w-[350px] py-9 lg:py-0 flex flex-col lg:flex-row items-center justify-between'>
              <li className=''>Home</li>
              <li className=''>For Rent</li>
              <li className=''>For Sale</li>
              <li className=''></li>
            </ul>
          </nav>

          <div className='w-[300px] md:w-[370px] flex items-center justify-between'>
            <div className='w-[60%] h-[100%] flex justify-end relative'>
              <div className={`${searchClicked ? 'w-full' : 'w-[15%]'} border-[2px] border-black h-[34px] rounded-full flex items-center justify-evenly ease-linear duration-200`}>
                <input className={`${searchClicked ? 'block' : 'hidden'} w-[83%] h-full rounded-2xl px-2 py-2 bg-inheri outline-none text-sm`} />
                <div className={`${searchClicked ? 'w-[15%]' : 'w-full'} flex justify-center rounded-xl`}>
                  <IoSearchSharp size={20} onClick={()=>setSearchClicked(!searchClicked)} />
                </div>
              </div>
            </div>
            <button className='bg-primaryColor text-sm text-white w-[25%] py-1 md:py-2 rounded-full'>Contact</button>
            <div onClick={() => setIsTuggle(!isTuggle)} className='w-[8%] lg:hidden cursor-pointer'>
              {isTuggle ? <FaTimes size={23} /> : <FaBars size={23} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header