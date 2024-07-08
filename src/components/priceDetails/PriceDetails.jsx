import "./PriceDetails.scss";
import { useEffect, useState } from "react";
import {
  Button,
  Text,
  TextVariants,
  Grid,
  GridItem,
} from "@patternfly/react-core";
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
            <Link to={route}>
              <Button
                variant="primary"
                ouiaId="Primary"
                className="checkout-btn"
              >
                Proceed to {btnvalue}
              </Button>
            </Link>
          </GridItem>
        </Grid>
      </div>
    </div>
  );
}

export default PriceDetails;
