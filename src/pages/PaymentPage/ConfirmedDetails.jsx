import "./ConfirmedDetails.scss";
import { useState, useEffect } from "react";
import ApplyCoupon from "../../assets/icons/ApplyCoupon";
import { useSelector } from "react-redux";

function ConfirmedDetails() {
  const [price, setPrice] = useState();

  const { cartItems } = useSelector((state) => state.cart);

  const totalAmount = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.id * item.quantity;
    });
    setPrice(total);
  };

  useEffect(() => {
    totalAmount();
  });

  return (
    <div className="confirm-details-main-container">
      <div className="confirm-detials-apply-coupon-contianer">
        <ApplyCoupon />
        <button className="apply-coupon-heading">Apply coupon</button>
      </div>
      <div className="confirm-details-info-container">
        <p className="confirm-details-heading">Price Details</p>
        <div className="confirm-details-sub-container">
          <div className="confirm-details-info">
            <p>Cart Total</p>
            <p>
              <b>₿ {price}</b>
            </p>
          </div>
          <div className="confirm-details-info">
            <p>Coupon</p>
            <button className="add-coupon-text">Add Coupon</button>
          </div>
          <div className="confirm-details-info">
            <p>Order Total</p>
            <p>
              <b>₿ {price}</b>
            </p>
          </div>
          <div className="confirm-details-info">
            <p>Delivery Charge</p>
            <p className="free-text">FREE</p>
          </div>
        </div>
        <div className="confirm-details-total">
          <p>Total Amount</p>
          <p>₿ {price}</p>
        </div>
        <div className="confirm-details-bottom-container">
          <p className="details-bottom-heading">
            SENDER DETAILS <span className="details-bottom-span">(Change)</span>
          </p>
          <p>Sarah</p>
          <p>1234567890</p>
        </div>
        <div className="confirm-details-bottom-container">
          <p className="details-bottom-heading">
            DELIVERY TIME{" "}
            <span className="details-bottom-span"> (Change) </span>
          </p>
          <p>22/09/2022 4:00PM</p>
        </div>
      </div>
    </div>
  );
}

export default ConfirmedDetails;
