import React from 'react'
import './CategorySlider.scss'


function CategorySlider(products) {
  return (
    <div className='categoryslider-main-container'>
      {
        products && products?.products?.map((product)=>{
          return(
          <div key={product.id}>
            <img src={product.image} alt="hi"/>
            <p>{product?.species}</p>
          </div>
        )
        })
      }
    </div>
  )
}

export default CategorySlider