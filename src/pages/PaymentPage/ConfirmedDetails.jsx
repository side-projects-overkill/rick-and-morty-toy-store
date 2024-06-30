import "./ConfirmedDetails.scss";
import React from "react";
import ApplyCoupon from "../../assets/icons/ApplyCoupon";
import { Button } from "@patternfly/react-core";

function ConfirmedDetails() {
  return (
    <div className="confirm-details-main-container">
      <div className="confirm-detials-apply-coupon-contianer">
        <ApplyCoupon />
        <a className="apply-coupon-heading">Apply coupon</a>
      </div>
      <div className="confirm-details-info-container">
        <p className="confirm-details-heading">Price Details</p>
        <div className="confirm-details-sub-container">
          <div className="confirm-details-info">
            <p>Cart Total</p>
            <p>
              <b>Rs. 1,000</b>
            </p>
          </div>
          <div className="confirm-details-info">
            <p>Coupon</p>
            <a className="add-coupon-text">Add Coupon</a>
          </div>
          <div className="confirm-details-info">
            <p>Order Total</p>
            <p>
              <b>Rs. 1,000</b>
            </p>
          </div>
          <div className="confirm-details-info">
            <p>Delivery Charge</p>
            <p className="free-text">FREE</p>
          </div>
        </div>
        <div className="confirm-details-total">
          <p>Total Amount</p>
          <p>Rs. 1,000</p>
        </div>
        <div className="confirm-details-bottom-container">
          <h1 className="details-bottom-heading">SENDER DETAILS<span className="details-bottom-span"><a>(Change)</a>  </span></h1>
          <p>
            Sarah
            
          </p>
          <p>
            1234567890
          </p>
        </div>
        <div className="confirm-details-bottom-container">
          <h1 className="details-bottom-heading">DELIVERY TIME<span className="details-bottom-span"> <a>(Change)</a> </span></h1>
          <p>
            22/09/2022 4:00PM
          </p>
        </div>
      </div>
    </div>
  );
}

export default ConfirmedDetails;
