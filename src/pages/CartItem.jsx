import React from 'react'
import './CartItem.scss'

import tempImage from '../assets/images/logo512.png'

function CartItem() {
  return (
    <div className='cartitem-main-container'>
        <div className='cartitem-left-container'>
                <img src={tempImage} alt="" className='cartitem-item-image'/>
        </div>
        <div className='cartitem-middle-container'>
                <h1>Name</h1>
                <p>status: alive</p>

                <p>Quantity:  
                    <button className='item-quantity-button'>-</button> 
                    <button disabled>1</button> 
                    <button className='item-quantity-button'>+</button>
                </p>
                <p>Gender: Male</p>
                <p>Species: Human</p>
        </div>
        <div className='cartitem-right-container'>
            ₿ 25 
        </div>
    </div>
  )
}

export default CartItem