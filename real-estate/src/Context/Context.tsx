import { createContext, ReactNode, useState, useEffect, useCallback  } from 'react'
import axios from 'axios'
import { Property } from '../Interface/Interface';
import { PropertyDetail } from '../Interface/Interface';

export interface RealEstateContextType {
  forSaleData: Property[] | null;
  forRentData: Property[] | null;
  propertyDetails: PropertyDetail | null;
  isLoading: boolean;
  error: string | null;
  fetchPropertyDetails: (id: string) => Promise<void>
}

export const RealEstateContext = createContext<Partial<RealEstateContextType>>({});

interface RealEstateContextProviderProps {
  children: ReactNode
}

export const RealEstateContextProvider: React.FC<RealEstateContextProviderProps> = ({ children }) => {
  
  const [forSaleData, setForSaleData] = useState<Property[] | null>(null)
  const [forRentData, setForRentData] = useState<Property[] | null>(null)
  const [propertyDetails, setPropertyDetails] = useState<PropertyDetail | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  

  // Fetch For sale datas
  useEffect(()=>{
    setIsLoading(true)
    const fetchSaleData = async() => {

      const options = {
        method: 'GET',
        url: 'https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6',
        headers: {
          'x-rapidapi-key': '0d93fb5ea1msh5470af294a84a62p1b2147jsn2376be21262b',
          'x-rapidapi-host': 'bayut.p.rapidapi.com'
        }
      };

      try{
        const response = await axios.request(options)
        setForSaleData(response?.data?.hits);
      } catch (error: any) {
        setError(error?.message || 'Something went wrong')
      } finally {
        setIsLoading(false)
      }
    }

    fetchSaleData()
  }, [])


  // Fetch for rent datas
  useEffect(() => {
    setIsLoading(true)
    const fetchRentData = async () => {
      const options = {
        method: 'GET',
        url: 'https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6',
        headers: {
          'x-rapidapi-key': '0d93fb5ea1msh5470af294a84a62p1b2147jsn2376be21262b',
          'x-rapidapi-host': 'bayut.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options)
        setForRentData(response?.data?.hits)
      } catch (error: any) {
        setError(error?.message || 'Something went wrong')
      } finally {
        setIsLoading(false)
      }
    }

    fetchRentData()
  }, [])

  
  // Fetch property details
  const fetchPropertyDetails = useCallback( async (id: string) => {
    setIsLoading(true);
    const options = {
      method: 'GET',
      url: 'https://bayut.p.rapidapi.com/properties/detail',
      params: { externalID: id },
      headers: {
        'x-rapidapi-key': '0d93fb5ea1msh5470af294a84a62p1b2147jsn2376be21262b',
        'x-rapidapi-host': 'bayut.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      setPropertyDetails(response.data);
    } catch (error: any) {
      setError(error?.message || 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  }, [])


  const contextValue: RealEstateContextType = {
    forSaleData,
    forRentData,
    propertyDetails,
    isLoading,
    error,
    fetchPropertyDetails
  }

  return (
    <RealEstateContext.Provider value={contextValue}>
     { children}
    </RealEstateContext.Provider>
  )
}