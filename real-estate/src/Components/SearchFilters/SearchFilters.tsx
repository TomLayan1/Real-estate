import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { filterData, getFilterValues } from '../../FilterData/FilterData'
import axios from 'axios'
import { Property } from '../../Context/Context';

interface LocationType {
  id: number,
  name: string
}

const SearchFilters: React.FC = () => {

  const navigate= useNavigate();
  const location = useLocation()
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [searchInput, setSearchInput] = useState<string>('');
  const [searchLocation, setSearchLocation] = useState<LocationType | null>(null);
  const [searchResult, setSearchResult] = useState<Property[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

// Function to handle filter changes
  const searchProperties = (filterValues: Record<string, string>) => {
    // Update filter state
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...filterValues,
    }));

    // Get filter query values based on selected filters
    const filterQueryValues = getFilterValues({ ...filters, ...filterValues });

    // Build the new query params
    const searchParams = new URLSearchParams(location.search);

    filterQueryValues.forEach((item) => {
      if (item.value && filterValues[item.name]) {
        searchParams.set(item.name, item.value);
      }
    });

    // Push the new query params to the URL
    navigate({ pathname: location.pathname, search: searchParams.toString()});
  };


  // For the search
  useEffect(() =>  {
    if (searchInput !== '') {
      setIsLoading(true);
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
          setSearchLocation(response?.data?.hits)
          console.log(response?.data?.hits);
        } catch (error) {
          console.error(error);
        }
      }

      handleSearch()
    }
  }, [searchInput])
  

  return(
    <section>
      <div className='p-4 flex flex-wrap justify-center gap-4 mb-5'>
        {filterData.map(filter => (
          <div key={filter.queryName}>
            <select
              className='p-2 text-[14px] outline-none'
              onChange={(e)=>searchProperties({ [filter.queryName]: e.target.value})}>
                <option>{filter.placeholder}</option>
                {filter?.items?.map(item => (
                  <option
                    className='text-[14px] outline-none'
                    key={item.name}
                    value={item.value}>{item.name}</option>
                ))}
              </select>
          </div>
        ))}
      </div>

      <div className='md:w-[300px] mx-auto bg-yellow-500'>
        <input
        type='search'
        name='searchInput'
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder='Search Properties' className='w-full border border-black px-2 py-1 text-sm outline-0' />
        <div className='bg-white'>
        {/* {searchLocation && searchLocation.length ? searchLocation.map(location => (
          <div></div>
        ))} */}
        </div>
      </div>
    </section>
  )
}

export default SearchFilters