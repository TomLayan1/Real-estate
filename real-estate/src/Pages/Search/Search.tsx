import React, { useState, useRef, useEffect, } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Lottie from 'lottie-web';
import { IoFilterOutline } from "react-icons/io5";
import SearchFilters from '../../Components/SearchFilters/SearchFilters';
import SearchProperties from '../../Components/SearchProperties/SearchProperties';
import { Property } from '../../Context/Context';


const Search: React.FC = () => {

  const [searchFilter, setSearchFilter] = useState<boolean>(false)
  const [properties, setProperties] = useState<Property[] | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  // Lottie setup
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (container.current) {
      Lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('../../loading.json')
      })
    }

    // Cleanup to prevent multiple animations
    return () => {
      Lottie.destroy();
    };
  }, [])

  // React Router to access the query parameters
  const location = useLocation();
  // Parses the query string into an easy-to-access format
  const queryParams = new URLSearchParams(location.search);
  // Retrieves the value of the purpose query parameter
  const purpose = queryParams.get('purpose');

// Fetch properties when component mounts
  useEffect(() => {
    const fetchProperties = async () => {
      const rentFrequency = queryParams.get('rentFrequency') || 'yearly';
      const minPrice = queryParams.get('minPrice') || '0';
      const maxPrice = queryParams.get('maxPrice') || '1000000';
      const roomsMin = queryParams.get('roomsMin') || '0';
      const bathsMin = queryParams.get('bathsMin') || '0';
      const sort = queryParams.get('sort') || 'price-desc';
      const areaMax = queryParams.get('areaMax') || '35000';
      const locationExternalIDs = queryParams.get('locationExternalIDs') || '5002';
      const categoryExternalID = queryParams.get('categoryExternalID') || '4';

      const url = `https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`;

      try {
        const response = await axios.get(url, {
          headers: {
            'x-rapidapi-key': 'bdc91f2172msh2523b27cde8fc29p15d1a9jsn31754167cb56',
            'x-rapidapi-host': 'bayut.p.rapidapi.com'
          }
        });
        setProperties(response.data.hits || []);
      } catch (error) {
        console.error('Error fetching properties:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProperties();

    // location.search re-fetch when query parameters change
  }, [location.search]);



  return(
    <section className='bg-bodyColor pt-28 pb-14'>
      <Header />
      <div className='container w-[87%] mx-auto'>
        <div onClick={()=>setSearchFilter(!searchFilter)} className='flex items-center justify-center mb-5'>
            <div className='flex items-center gap-4 cursor-pointer'>
            <p className='text- font-bold'>Search Property By Filter</p>
            <IoFilterOutline size={20} />
          </div>
        </div>
        {searchFilter && <SearchFilters />}

        <h1 className='text-2xl text-primaryColor font-bold mb-8'>Properties {purpose}</h1>

        <div>
          {isLoading ? (
            <div className='w-[20%] mx-auto' ref={container}></div>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
              {properties && properties.length > 0 ? (
                properties.map((property) => (
                  <SearchProperties
                    key={property?.externalID}
                    externalID={property?.externalID}
                    coverPhoto={property?.coverPhoto}
                    price={property?.price}
                    rentFrequency={property?.rentFrequency}
                    rooms={property?.rooms}
                    title={property?.title}
                    baths={property?.baths}
                    area={property?.area}
                    agency={property?.agency}
                    isVerified={property?.isVerified}
                  />
                ))
              ) : (
                <div>
                  <p>No result found</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Search