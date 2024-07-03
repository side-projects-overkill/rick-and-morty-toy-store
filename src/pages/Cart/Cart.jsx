import { useEffect } from "react";
import locationIcon from "../../assets/images/location.png";

import "./Cart.scss";
import CartItem from "./CartItem";
import ProgressBar from "../../components/progressbar/ProgressBar";
import PriceDetails from "../../components/priceDetails/PriceDetails";
import Products from "../../components/Products/Products";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@patternfly/react-core";
import {  useNavigate } from "react-router-dom";
import { getProducts } from "../../components/redux_api/actions/productActions";

function Cart() {
  const { cartItems } = useSelector((state) => state.cart);

  const { products } = useSelector((state) => state.getProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const navigate = useNavigate();
  return (
    <>
      <ProgressBar />

      <label htmlFor="Pincode-searchbox" className="cart-location-icon">
        <img src={locationIcon} alt="location icon" />
      </label>
      <input
        type="text"
        className="pincode-searchbox"
        id="Pincode-searchbox"
        placeholder="Enter delivery pincode"
      />

      <button className="checkButton">Check</button>
      <div className="cart-item-price-contianer">
        <div>
          {cartItems.length > 0 &&
          cartItems.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}
        </div>
        
        <div className="cart-bottom-right-container">
          <PriceDetails btnvalue="Checkout" />
            <Button variant="primary" ouiaId="Primary" className="shopping-btn" onClick={()=> navigate("/")}>
              Continue Shopping
            </Button>
        </div>
      </div>

      <div className="cart-recommended-section">
        <h2>Recommended Toys</h2>
        <Products products={products?.results?.slice(7, 11)} />
      </div>
    </>
  );
}

export default Cart;
