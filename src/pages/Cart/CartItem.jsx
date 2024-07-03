import React from 'react'
import './CartItem.scss'

import { TrashIcon } from '@patternfly/react-icons'
import { Icon } from '@patternfly/react-core'
import { addToCart, removeFromCart } from '../../components/redux_api/actions/cartActions'
import { useDispatch } from 'react-redux'

function CartItem({item}) {

  const dispatch = useDispatch();

  const addToItemCart =()=>{
    dispatch(addToCart(item.id,1));
  }

  const reduceFromItemCart =()=>{
    if(item.quantity<=1){
    dispatch(removeFromCart(item.id));
    }
    else{
      dispatch(addToCart(item.id,-1));
    }
  }

  const removeFromItemCart =()=>{
    dispatch(removeFromCart(item.id));
  }
  return (
    <div className='cartitem-main-container'>
        <div className='cartitem-left-container'>
                <img src={item.image} alt="productImage" className='cartitem-item-image'/>
                <div className='cartitem-left-subcontainer'>
                <h2>{item.name}</h2>
                <p>status: {item.status}</p>

                <p>Quantity:  
                    <button className='item-quantity-button' type='button' onClick={reduceFromItemCart}>-</button> 
                    <button disabled>{item.quantity}</button> 
                    <button className='item-quantity-button' type='button' onClick={addToItemCart}>+</button>
                </p>
                <p>Gender: <strong>{item.gender}</strong></p>
                <p>Species: <strong>{item.species}</strong></p>
                <p>Shipping Type: Express</p>
                </div>
        </div>
        <div className='cartitem-right-container'>
          <div style={{fontWeight:600,color:"#B8263D", fontSize:"32px"}}>
            ₿ {item.id}
          </div> 
          <div className='cartitem-trashicon'>
            <Icon onClick={removeFromItemCart}>
              <TrashIcon/>
            </Icon>
          </div>
        </div>
    </div>
  )
}

export default CartItem