import React from 'react'
import locationIcon from '../assets/images/location.png'

import './Cart.scss'
import CartItem from './CartItem'


function Cart() {
  return (
    <>
    <input type="text" className='pincode-searchbox' id='Pincode-searchbox'/>
    <label htmlFor="Pincode-searchbox" className='cart-location-icon'><img src={locationIcon}/></label>
    <label htmlFor="Pincode-searchbox" className='cart-searchbox-placehoder'>Enter delivery pincode</label>

    <button className='checkButton'>Check</button>

    <CartItem/>
    
    </>
  )
}

export default Cart