import { useState, useEffect, createContext, ReactNode } from 'react'
import axios from 'axios'


interface PropertyDetail {
  externalID: string;
  coverPhoto: {
    url: string;
  };
  price: number;
  rentFrequency: string;
  rooms: string;
  title: string;
  baths: number;
  area: number;
  agency: {
    name: string;
    logo: {
      url: string;
    }
  };
  isVerified: boolean
}

// Define the response structure from the API
interface ApiResponse {
  hits: PropertyDetail[];
  nbHits: number;
  page: number;
  nbPages: number;
  hitsPerPage: number;
}

export interface RealEstateContextType {
  forSaleData: PropertyDetail[] | null
  // setForSaleData:  React.Dispatch<React.SetStateAction<PropertyDetail[] | null>>
  forRentData: PropertyDetail[] | null
  // setForRentData:  React.Dispatch<React.SetStateAction<PropertyDetail[] | null>>
  isLoading: boolean
  error: string
}

export const RealEstateContext = createContext<Partial<RealEstateContextType>>({});

interface RealEstateContextProviderProps {
  children: ReactNode
}

export const RealEstateContextProvider: React.FC<RealEstateContextProviderProps> = ({ children }) => {
  
  const [forSaleData, setForSaleData] = useState<PropertyDetail[] | null>(null)
  const [forRentData, setForRentData] = useState<PropertyDetail[] | null>(null) 
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  // console.log(forSaleData)
  console.log(forRentData)


  // Fetch For sale datas
  useEffect(()=>{
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

  const contextValue: RealEstateContextType = {
    forSaleData,
    forRentData,
    isLoading,
    error,
  }

  return (
    <RealEstateContext.Provider value={contextValue}>
     { children}
    </RealEstateContext.Provider>
  )
}