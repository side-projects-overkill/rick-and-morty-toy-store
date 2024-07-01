import "./PriceDetails.scss";
import React from "react";
import { Button } from "@patternfly/react-core";
import { Link } from "react-router-dom";
import ApplyCoupon from "../../assets/icons/ApplyCoupon";


function PriceDetails({btnvalue}) {

  const getRoute = (btnvalue) => {
    switch(btnvalue){
      case "checkout":
        return "/personalize-your-cake";
      case "payment":
        return "/payment";
      default:
        return "";
    }
  }

  const route = getRoute(btnvalue);

  return (
    <div className="price-details-main-container">
      <div className="price-detials-apply-coupon-contianer">
        <ApplyCoupon />
        <button className="apply-coupon-heading">Apply coupon</button>
      </div>
      <div className="price-details-info-container">
        <p className="price-details-heading">Price Details</p>
        <div className="price-details-sub-container">
          <div className="price-details-info">
            <p>Cart Total</p>
            <p>
              <b>Rs. 1,000</b>
            </p>
          </div>
          <div className="price-details-info">
            <p>Coupon</p>
            <button className="add-coupon-text">Add Coupon</button>
          </div>
          <div className="price-details-info">
            <p>Order Total</p>
            <p>
              <b>Rs. 1,000</b>
            </p>
          </div>
          <div className="price-details-info">
            <p>Delivery Charge</p>
            <p className="free-text">FREE</p>
          </div>
        </div>
        <div className="price-details-total">
          <p>Total Amount</p>
          <p>Rs. 1,000</p>
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
