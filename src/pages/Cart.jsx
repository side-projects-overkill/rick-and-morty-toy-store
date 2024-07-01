import React,{useEffect} from 'react'
import locationIcon from '../assets/images/location.png'

import './Cart.scss'
import CartItem from './CartItem'
import { useSelector, useDispatch } from 'react-redux'
import Products from '../components/Products/Products'

import { getProducts } from '../components/redux_api/actions/productActions'


function Cart() {

  const {cartItems} = useSelector(state=>state.cart);

  const {products} = useSelector(state=>state.getProducts);

  const dispatch = useDispatch();


    useEffect(()=>{
        dispatch(getProducts());
    },[dispatch])

  return (
    <>
    <label htmlFor="Pincode-searchbox" className='cart-location-icon'><img src={locationIcon} alt='location icon'/></label>
    <input type="text" className='pincode-searchbox' id='Pincode-searchbox' placeholder='Enter delivery pincode'/>

    <button className='checkButton'>Check</button>
    {cartItems.length>0&&
      cartItems.map((item)=>{
        return(
        <CartItem item={item} key={item.id}/>
        )
      })
    }
    <div className='cart-recommended-section'>
      <h2>Recommended Toys</h2>
      <Products products={products?.results?.slice(7,11)}/>
    </div>
    </>
  )
}

export default Cart