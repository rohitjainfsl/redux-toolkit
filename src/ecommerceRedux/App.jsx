import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux/'
import {getInitialData, addToCart} from './slices/ecommerceSlice'
import './style.css'
import { Link } from 'react-router-dom'


function App() {

    const dispatch = useDispatch()

    const stateVars = useSelector((state) => {return state.ecom})

    useEffect(() => {
        dispatch(getInitialData())
    }, [])

    console.log(stateVars.cart)

    function handleAddToCart(e, product){
      e.preventDefault()
      dispatch(addToCart(product))
    }
    
  return (
    <div className='products'>
      {
        stateVars.data.map((prod, index) => {
          return (
            <div key={index} className='product'>
              <Link to={`product/${prod.id}`}><img src={prod.image} alt="Image" /></Link>
              <h3>{prod.title}</h3>
              <a href="" onClick={(e) => handleAddToCart(e, prod)}>Add To Cart</a>
            </div>
          )
        })
      }
    </div>
  )
}

export default App