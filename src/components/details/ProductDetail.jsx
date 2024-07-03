
import ProductView from './ProductView'
import Products from '../Products/Products';

import './ProductDetail.scss'

import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

import {getProductDetails, getProducts} from "../redux_api/actions/productActions";
import { useEffect } from 'react';

function ProductDetail() {

  const {id} = useParams();
  const dispatch = useDispatch();

  const {product} = useSelector(state=>state.getProductDetails);
  const {products} = useSelector(state=>state.getProducts);

  useEffect(()=>{
    if(product&& id!==product.id){
      dispatch(getProductDetails(id))
      dispatch(getProducts())
    }
  },[dispatch,id,product]);

  return (
    <div>

      <ProductView product={product}/>  

      <div className='product-features'>
        <h2>Features & Details</h2>
        <p>Fantastic Chocolate cake is flooded with love and sweetness. It's a pleasant cake that will definitely satisfy your unique sweet tooth. Also, it makes a wonderful contemplation which will take away the heart of your special one. It is a means of bringing the celebratory joy to a different level. The rich flavour and topping with chocolate will fill the bond with lots of sweetness with your special one. </p>
        <strong style={{color:"#0066CC"}}>Order Now!</strong>

        <p><strong>Toy Species:</strong> {product.species}</p>
        <p><strong>Gender Of Toy:</strong> {product.gender}</p>
        <p><strong>Color Available:</strong> Red, Green, Yellow</p>
        <p><strong>Size Available:</strong> Small, Medium, Large</p>

        <h4>Delivery Details</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit consectetur ipsum, possimus, praesentium minima, vero a maiores deleniti sed porro dolore alias consequatur corporis nisi reprehenderit. Itaque incidunt saepe amet!</p>

        <h4>Care Instruction</h4>
        <p>Don't try to eat</p>
        <p>Keep it away from animals</p>
      </div>

      <div>
      <h2 className='recomended-heading'>Recommended Toys</h2>
      <Products products={products?.results?.slice(13,17)}/>
      </div>
 
    </div>
  )
}

export default ProductDetail