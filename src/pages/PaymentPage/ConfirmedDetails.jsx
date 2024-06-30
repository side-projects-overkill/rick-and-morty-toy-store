import "./PaymentPage.scss";
import React from "react";
import ApplyCoupon from "../../assets/icons/ApplyCoupon";
import { Button } from "@patternfly/react-core";

function ConfirmedDetails() {
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
        <div className="">
          <h1>asdf</h1>
        </div>
      </div>
    </div>
  );
}

export default ConfirmedDetails;
