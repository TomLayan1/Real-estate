import React, { useState } from 'react'
import { MdOutlineHouseboat } from "react-icons/md";
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface Props {
  setDisplayContact: React.Dispatch<React.SetStateAction<boolean>>
}

const Navbar:React.FC<Props> = ({setDisplayContact}) => {
  // State to tuggle icons
  const [ isTuggle, setIsTuggle] = useState<boolean>(false)
  const [current, setCurrent] = useState<string>('Home')

  interface NavItemsType {
    id: number,
    name: string,
    to: string
  }

  const navItems = [
    {
      id: 1,
      name: 'Home',
      to: '/'
    },
    {
      id: 2,
      name: 'For Rent',
      to: '/search?purpose=for-rent'
    },
    {
      id: 3,
      name: 'For Sale',
      to: '/search?purpose=for-sale'
    },
    {
      id: 4,
      name: 'Search',
      to: '/search'
    }
  ]

  const handleNav = (id:number) => {
    const selectedNav = navItems.find(nav => ( id === nav.id));

    if (selectedNav){
      setCurrent(selectedNav?.name)
    }

    setIsTuggle(false)
  }

  return (
    <div className='w-full fixed z-30 top-4 md:top-3'>
      <div className='w-[92%] md:w-[90%] container mx-auto bg-white px-3 md:px-8 py-3 lg:py-5 rounded-full bg-opacity-95 border border-white'>
        <div className='relative flex items-center justify-between'>
          <Link to={'/'}><div className='flex items-center'>
            <MdOutlineHouseboat style={{ color: '#825b52' }} className='text-3xl' />
            <h1 className='hidden md:block text-2xl'>City Scape</h1>
          </div></Link>

          <nav className={`w-full md:w-auto ${isTuggle ? 'h-[500px]' : 'h-0'} absolute md:static md:h-auto top-14 bg-white md:bg-inherit overflow-hidden ease-linear duration-300 border border-primaryColor md:border-none`}>
            <ul className='h-[250px] md:h-auto py-9 md:py-0 flex flex-col md:flex-row items-center gap-10'>
              {navItems.map(nav => (
                <Link onClick={() => handleNav(nav.id)} className={`${current === nav.name ? 'text-primaryColor' : 'text-black'} text-[15px]`} key={nav.id} to={nav.to}><li>{nav.name}</li></Link>
              ))}
            </ul>
          </nav>

          <div className='flex items-center gap-3'>
            <button className='bg-primaryColor text-sm text-white py-2 px-4 rounded-full' onClick={()=>setDisplayContact(true)}>Contact</button>
            <div onClick={() => setIsTuggle(!isTuggle)} className='w-[8%] md:hidden'>
              {isTuggle ? <FaTimes size={23} /> : <FaBars size={23} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar