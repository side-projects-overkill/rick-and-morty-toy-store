import "./PriceDetails.scss";
import React from "react";
import { Button } from "@patternfly/react-core";
import ApplyCoupon from "../../assets/icons/ApplyCoupon";

function PriceDetails({btnvalue}) {
  return (
    <div className="price-details-main-container">
      <div className="price-detials-apply-coupon-contianer">
        <ApplyCoupon />
        <a className="apply-coupon-heading">Apply coupon</a>
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
            <a className="add-coupon-text">Add Coupon</a>
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
        <Button variant="primary" ouiaId="Primary" className="checkout-btn">
          Proceed to {btnvalue}
        </Button>
      </div>
    </div>
  );
}

export default PriceDetails;
