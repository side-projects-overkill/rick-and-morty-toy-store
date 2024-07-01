import React,{useEffect} from 'react'

import InfoSlider from '../components/Infoslider/InfoSlider';
import Products from '../components/Products/Products';
import CategorySlider from '../components/categoryslider/CategorySlider';

import { getProducts } from '../components/redux_api/actions/productActions';

import {useDispatch, useSelector} from 'react-redux';

function Home() {

    const {products} = useSelector(state=>state.getProducts)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getProducts());
    },[dispatch])

  return (
    <div>
        {
          products&&
          <>
            <InfoSlider products={products?.results?.slice(0,4)}/>
            <CategorySlider products={products?.results?.slice(4,8)}/>
            <div>
              <h2>Want delivery today?</h2>
            </div>
            <Products products={products?.results?.slice(8,12)}/>
            <Products products={products?.results?.slice(15,19)}/>
          </>
        }
    </div>
  )
}

export default Home