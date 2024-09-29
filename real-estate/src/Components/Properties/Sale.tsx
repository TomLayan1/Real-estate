import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { RealEstateContext } from '../../Context/Context'

const Sale = () => {
  // From context
  const { forSaleData, isLoading, error } = useContext(RealEstateContext)
  return (
    <div>Sale</div>
  )
}

export default Sale