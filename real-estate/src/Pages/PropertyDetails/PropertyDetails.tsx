import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { RealEstateContext } from '../../Context/Context'
import axios from 'axios'



const PropertyDetails: React.FC = () => {
  // From context
  const { isLoading, error, propertyDetails, fetchPropertyDetails } = useContext(RealEstateContext)
  const { ExternalID } = useParams<{ ExternalID: string }>()

  useEffect(() => {
    if (ExternalID) {
      fetchPropertyDetails?.(ExternalID)
    }
  }, [ExternalID, fetchPropertyDetails])

  return (
    <section>
      <div className='container'>
        <div className='bg-black w-[80%] h-[440px] mx-auto rounded-2xl'></div>
      </div>
    </section>
  )
}

export default PropertyDetails