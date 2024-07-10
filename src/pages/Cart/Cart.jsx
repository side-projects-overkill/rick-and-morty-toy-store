import { useNavigate } from "react-router-dom";
import { Button, TextVariants, Text } from "@patternfly/react-core";
import locationIcon from "../../assets/images/location.png";
import CartItem from "./CartItem";
import ProgressBar from "../../components/progressbar/ProgressBar";
import PriceDetails from "../../components/priceDetails/PriceDetails";
import Products from "../../components/Products/Products";
import { useCartContext } from "../../contexts/CartContext";
import { useProductContext } from "../../contexts/ProductContext";
import "./Cart.scss";

function Cart() {
  const { products } = useProductContext();
  const { cartItems } = useCartContext();
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
          <Button
            variant="primary"
            ouiaId="Primary"
            className="shopping-btn"
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </Button>
        </div>
      </div>
      <div className="cart-recommended-section">
        <Text component={TextVariants.h2}>Recommended Toys</Text>
        <Products products={products?.slice(7, 11)} />
      </div>
    </>
  );
}

export default Cart;
