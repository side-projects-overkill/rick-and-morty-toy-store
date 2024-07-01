import React from 'react'

import './InfoSlider.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'


function InfoSlider(products) {
  return (
    <>
    {products && <Carousel 
    centerMode="true"
    showArrows="true"
    showThumbs={false}
    centerSlidePercentage={100}
    >
      {products?.products?.map((product)=>{
        return(
        <div className='infoslider-main-container' key={product.id}>
          <div className='infoslider-left-container'> 
              <div>
                <h1 className='infoslider-heading'>Rick and Morty Shop</h1>
              </div>
              <div className='infoslider-product-info'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis soluta eum neque aliquam quas eligendi repellat id culpa accusamus, minus laudantium explicabo nostrum iste delectus molestias, harum, illo quo at!</div>
          </div>
          <div className='infoslider-right-container'>
            <img src={product.image} alt="nothing"/>
          </div>
      </div>)
    })}

    </Carousel>
}
    </>
  )
}

export default InfoSlider