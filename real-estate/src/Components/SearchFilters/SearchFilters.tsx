import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { filterData, getFilterValues } from '../../FilterData/FilterData'

const SearchFilters: React.FC = () => {

  const navigate= useNavigate();
  const location = useLocation()
  const [filters, setFilters] = useState<Record<string, string>>({});

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
  }
  

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
    </section>
  )
}

export default SearchFilters