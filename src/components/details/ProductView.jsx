import {
  Text,
  TextVariants,
  Button,
  Grid,
  GridItem,
} from "@patternfly/react-core";
import "./ProductView.scss";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux_api/actions/cartActions";

function ProductView({ product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = product;

  const addToItemCart = () => {
    dispatch(addToCart(id, 1));
    navigate("/cart");
  };

  const buyNow = () => {
    dispatch(addToCart(id, 1));
    navigate("/address");
  };

  return (
    <Grid className="productinfo-main-container">
      <GridItem className="productinfo-left-container" span={6}>
        <img src={product?.image} alt="larged product img" />
      </GridItem>
      <GridItem className="productinfo-right-container" span={6}>
        <Grid>
          <GridItem>
            <Text component={TextVariants.h2}>{product?.name}</Text>
          </GridItem>
          <GridItem>
            <Text component={TextVariants.p} className="productview-price">
              ₿ {product?.id}
            </Text>
          </GridItem>
          <GridItem>
            <Grid className="productview-toy-species">
              <GridItem span={2}>Toy Species:</GridItem>
              <GridItem span={1}>
                <strong>{product?.species}</strong>
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem>
            <Grid className="productview-toy-gender">
              <GridItem span={2}>Gender Of Toy:</GridItem>
              <GridItem span={1}>
                <strong>{product?.gender}</strong>
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem>
            <Grid className="productview-color-selectbox">
              <GridItem span={2}>Color:</GridItem>
              <GridItem span={2}>
                <input type="radio" name="toycolor" /> <span>Red</span>
              </GridItem>
              <GridItem span={2}>
                <input type="radio" name="toycolor" /> <span>Green</span>
              </GridItem>
              <GridItem span={2}>
                <input type="radio" name="toycolor" /> <span>yellow</span>
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem>
            <Grid className="productview-size-selectbox ">
              <GridItem span={2}>Size:</GridItem>
              <GridItem span={2}>
                <input type="radio" name="toysize" /> <span>Small</span>
              </GridItem>
              <GridItem span={2}>
                <input type="radio" name="toysize" /> <span>Medium</span>
              </GridItem>
              <GridItem span={2}>
                <input type="radio" name="toysize" /> <span>Large</span>
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
        <div className="product-button-group">
          <Button variant="primary" className="buy-now-btn" onClick={buyNow}>
            Buy Now
          </Button>
          <Button className="add-to-cart-btn" onClick={addToItemCart}>
            Add To cart
          </Button>
        </div>
      </GridItem>
    </Grid>
  );
}

export default ProductView;
