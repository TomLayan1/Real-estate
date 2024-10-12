import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Property } from '../../Context/Context';

const SearchBox: React.FC = () => {
  const [searchResult, setSearchResult] = useState<Property | null>(null)
  const [searchInput, setSearchInput] = useState<string>('');
  // console.log(searchInput);

  useEffect(() =>  {
    if (searchInput !== '') {
      const handleSearch = async () => {
        const options = {
          method: 'GET',
          url: 'https://bayut.p.rapidapi.com/auto-complete',
          params: {
            query: searchInput,
            hitsPerPage: '25',
            page: '0',
            lang: 'en'
          },
          headers: {
            'x-rapidapi-key': 'ad710ee344msh1bb8adb9b7595c5p184824jsnc5a2b2eba8cb',
            'x-rapidapi-host': 'bayut.p.rapidapi.com'
          }
        };

        try {
          const response = await axios.request(options);
          console.log(response?.data);
        } catch (error) {
          console.error(error);
        }
      }

      handleSearch()
    }
  }, [searchInput])

  return (
    <div className='flex justify-center gap-1 mb-5'>
      <input
      type='search'
      name='searchInput'
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
      placeholder='Search Properties' className='border border-black md:w-[300px] px-2 py-1 text-sm outline-0' />
    </div>
  )
}

export default SearchBox