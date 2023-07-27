import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleData } from './slices/ecommerceSlice'


function SingleProduct() {
    const {id} = useParams()

    const dispatch = useDispatch()

    const singleData = useSelector((state) => {return state.ecom.singleData})

    useEffect(() => {
        dispatch(getSingleData(id))
    }, [])


  return (
    <>
       { (singleData) ? 
            <div className='single-product'>
                <img src={singleData.image} alt="Single Product" />
                <h2>{singleData.title}</h2>
                <Link to="">Add To Cart</Link>
            </div>
        : ''}
    </>
  )
}

export default SingleProduct