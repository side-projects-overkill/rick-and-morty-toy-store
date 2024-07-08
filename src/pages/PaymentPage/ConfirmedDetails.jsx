import "./ConfirmedDetails.scss";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Grid, GridItem, Text, TextVariants } from "@patternfly/react-core";
import ApplyCoupon from "../../assets/icons/ApplyCoupon";

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
        <Grid hasGutter>
          <GridItem span={12}>
            <Text component={TextVariants.h2}>Price Details</Text>
          </GridItem>
          <GridItem span={10}>
            <Text component={TextVariants.p}>Cart Total</Text>
          </GridItem>
          <GridItem span={2}>
            <Text component={TextVariants.h4}>₿ {price}</Text>
          </GridItem>
          <GridItem span={8}>
            <Text component={TextVariants.p}>Coupon</Text>
          </GridItem>
          <GridItem span={4}>
            <button className="add-coupon-text">Add Coupon</button>
          </GridItem>
          <GridItem span={10}>
            <Text component={TextVariants.p}>Order Total</Text>
          </GridItem>
          <GridItem span={2}>
            <Text component={TextVariants.h4}>₿ {price}</Text>
          </GridItem>
          <GridItem span={10}>
            <Text component={TextVariants.p}>Delivery Charge</Text>
          </GridItem>
          <GridItem span={2}>
            <p className="free-text">FREE</p>
          </GridItem>
          <GridItem span={10}>
            <Text component={TextVariants.h2}>Total Amount</Text>
          </GridItem>
          <GridItem span={2}>
            <Text component={TextVariants.h2}>₿ {price}</Text>
          </GridItem>
          <GridItem span={12}>
            <div className="confirm-details-bottom-container">
              <p className="details-bottom-heading">
                SENDER DETAILS{" "}
                <span className="details-bottom-span">(Change)</span>
              </p>
              <p>Sarah</p>
              <p>1234567890</p>
            </div>
          </GridItem>
          <GridItem span={12}>
            <div className="confirm-details-bottom-container">
              <p className="details-bottom-heading">
                DELIVERY TIME{" "}
                <span className="details-bottom-span"> (Change) </span>
              </p>
              <p>22/09/2022 4:00PM</p>
            </div>
          </GridItem>
        </Grid>
      </div>
    </div>
  );
}

export default ConfirmedDetails;
