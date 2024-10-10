import React from 'react'

const SearchBox = () => {
  return (
    <div className='flex items-center justify-center gap-1 mb-5'>
      <input placeholder='Search Properties' className='border border-black md:w-[300px] px-2 py-1 text-sm'  />
      <button className='bg-primaryColor border border-primaryColor text-sm text-white px-3 py-1'>Search</button>
    </div>
  )
}

export default SearchBox