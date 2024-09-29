import { useState, useEffect, createContext, ReactNode } from 'react'
import axios, { AxiosRequestConfig} from 'axios'


interface PropertyDetail {
  id: number;
  purpose: string
  title: string;
  description: string;
  slug: string;
  price: number;
  geography: {
    lat: number;
    lng: number;
  };
  location: [
    {
      id: number
      name: string
    }
  ]
  category: [
    {
      name: string;
    }
  ]
}

// Define the response structure from the API
interface ApiResponse {
  hits: PropertyDetail[]; // hits is an array of PropertyDetail
  nbHits: number;
  page: number;
  nbPages: number;
  hitsPerPage: number;
}

export interface RealEstateContextType {
  data: PropertyDetail[] | null
  setData:  React.Dispatch<React.SetStateAction<PropertyDetail[] | null>>
  isLoading: boolean
  error: string
}

export const RealEstateContext = createContext<Partial<RealEstateContextType>>({});

interface RealEstateContextProviderProps {
  children: ReactNode
}

export const RealEstateContextProvider: React.FC<RealEstateContextProviderProps> = ({ children }) => {
  
  const [data, setData] = useState<PropertyDetail[] | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  console.log(data)


  useEffect(()=>{
    const fetchRequest = async() => {

      const options = {
        method: 'GET',
        url: 'https://bayut.p.rapidapi.com/auto-complete',
        params: {
          query: 'abu dhabi',
          hitsPerPage: '25',
          page: '0',
          lang: 'en'
        },
        headers: {
          'x-rapidapi-key': '0d93fb5ea1msh5470af294a84a62p1b2147jsn2376be21262b',
          'x-rapidapi-host': 'bayut.p.rapidapi.com'
        }
      };

      try{
        const response = await axios.request<ApiResponse>(options)
        // console.log(response.data)
        setData(response.data.hits);
      } catch (error: any) {
        setError(error.message || 'Something went wrong')
      } finally {
        setIsLoading(false)
      }
    }

    fetchRequest()
  }, [])

  const contextValue: RealEstateContextType = {
    data,
    setData,
    isLoading,
    error
  }

  return (
    <RealEstateContext.Provider value={contextValue}>
     { children}
    </RealEstateContext.Provider>
  )
}

// export default { RealEstateContext, RealEstateContextProvider}