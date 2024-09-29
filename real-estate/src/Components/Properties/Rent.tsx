import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { RealEstateContext } from '../../Context/Context'
import { BsGridFill } from "react-icons/bs";
import { FaBath, FaBed } from "react-icons/fa";
import { GoVerified } from "react-icons/go";

const Rent = () => {
  // From context
  const { forSaleData, isLoading, error } = useContext(RealEstateContext)
  return (
    <div>Rent</div>
  )
}

export default Rent