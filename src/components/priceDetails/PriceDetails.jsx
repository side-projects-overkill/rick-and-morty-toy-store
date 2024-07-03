import "./PriceDetails.scss";
import { useEffect, useState } from "react";
import { Button, Text, TextVariants } from "@patternfly/react-core";
import { Link } from "react-router-dom";
import ApplyCoupon from "../../assets/icons/ApplyCoupon";
import { useSelector } from "react-redux";

function PriceDetails({ btnvalue }) {
  const [price, setPrice] = useState();
  const { cartItems } = useSelector((state) => state.cart);

  const totalAmount = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.id * item.quantity;
    });
    setPrice(total);
  };

  const getRoute = (btnvalue) => {
    switch (btnvalue) {
      case "Checkout":
        return "/address";
      case "checkout":
        return "/personalize-your-cake";
      case "payment":
        return "/payment";
      default:
        return "";
    }
  };

  const route = getRoute(btnvalue);

  useEffect(() => {
    totalAmount();
  });

  return (
    <div className="price-details-main-container">
      <div className="price-detials-apply-coupon-contianer">
        <ApplyCoupon />
        <button className="apply-coupon-heading">Apply coupon</button>
      </div>
      <div className="price-details-info-container">
        <Text component={TextVariants.h2}>Price Details</Text>
        <div className="price-details-sub-container">
          <div className="price-details-info">
            <Text component={TextVariants.p}>Cart Total</Text>
            <div>
              <Text component={TextVariants.h4}>₿ {price}</Text>
            </div>
          </div>
          <div className="price-details-info">
            <Text component={TextVariants.p}>Coupon</Text>
            <button className="add-coupon-text">Add Coupon</button>
          </div>
          <div className="price-details-info">
            <Text component={TextVariants.p}>Order Total</Text>
            <div>
              <Text component={TextVariants.h4}>₿ {price}</Text>
            </div>
          </div>
          <div className="price-details-info">
            <Text component={TextVariants.p}>Delivery Charge</Text>
            <p className="free-text">FREE</p>
          </div>
        </div>
        <div className="price-details-total">
          <Text component={TextVariants.p}>Total Amount</Text>
          <Text component={TextVariants.p}>₿ {price}</Text>
        </div>
        <Link to={route}>
          <Button variant="primary" ouiaId="Primary" className="checkout-btn">
            Proceed to {btnvalue}
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default PriceDetails;
