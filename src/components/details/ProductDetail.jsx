
import ProductView from './ProductView'
import { Button } from '@patternfly/react-core' 

function ProductDetail() {
  return (
    <div>

      <ProductView/>  

      <div>
        <h2>Features & Details</h2>
        <p>Fantastic Chocolate cake is flooded with love and sweetness. It's a pleasant cake that will definitely satisfy your unique sweet tooth. Also, it makes a wonderful contemplation which will take away the heart of your special one. It is a means of bringing the celebratory joy to a different level. The rich flavour and topping with chocolate will fill the bond with lots of sweetness with your special one. 
        <span>Order Now!</span></p>

        <p>Toy Species: Human</p>
        <p>Gender Of Toy: Male</p>
        <p>Color Available: Red, Green, Yellow</p>
        <p>Size Available: </p>
      </div>

      <Button variant='primary'> check</Button>
      <button className="pf-v5-c-button pf-m-primary" type="button">Primary</button>
    </div>
  )
}

export default ProductDetail