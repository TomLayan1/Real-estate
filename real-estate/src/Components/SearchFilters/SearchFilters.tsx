import React, { useState, useEffect } from 'react';
import { MdCancel } from 'react-icons/md'
import { filterData, getFilterValues } from '../../FilterData/FilterData'

const SearchFilters: React.FC = () => {

  const [filters, setFilters] = useState<Record<string, string>>({});
  const [filter, setFilter] = useState(filterData);

  // Function to handle filter changes
  const SearchProperties = (filterValues: Record<string, string>) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...filterValues,
    }));

    // Log or send filterValues to where search logic will be implemented
    const filterQueryValues = getFilterValues(filters);
    // console.log(filterQueryValues);
  };

  return(
    <section>
      <div className='p-4 flex flex-wrap justify-center gap-4'>
        {filterData.map(filter => (
          <div key={filter.queryName}>
            <select
              className='p-2 text-[14px] outline-none'
              onChange={(e)=>SearchProperties({ [filter.queryName]: e.target.value})}>
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
      <p>Showing!</p>
    </section>
  )
}

export default SearchFilters