import React from 'react'

import tempImage from '../../assets/images/logo512.png'

import './ProductView.scss'

function ProductView() {
  return (
    <div className='prodcutinfo-main-container'>
        <div className='prodcutinfo-left-container'>
          <img src= {tempImage} alt='nothing'/>
        </div>
        <div className='prodcutinfo-right-container'>
          <h3>header</h3>
          <p>review</p>
          <p>₿ ammount</p>

          <div>
            <p>Toy Species: toy</p>
            <p>Gender Of Toy: Male</p>
          </div>

          <div>
            <div>
              Color: <input type="radio" name="toycolor" /> <span>Red</span> <input type="radio" name="toycolor" /> <span>Green</span> <input type="radio" name="toycolor" /> <span>Yellow</span>
            </div>

            <div>
              Size: <input type="radio" name="toycolor" /> <span>Large</span> <input type="radio" name="toycolor" /> <span>Medium</span> <input type="radio" name="toycolor" /> <span>Large</span>
            </div>
          </div>

          <div>
            <button >Buy Now</button>
            <button >Add To cart</button>
          </div>

        </div>
    </div>
  )
}

export default ProductView