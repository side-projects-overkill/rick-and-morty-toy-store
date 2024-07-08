import { TrashIcon } from "@patternfly/react-icons";
import { Icon, Flex, FlexItem } from "@patternfly/react-core";
import "./CartItem.scss";

import {
  addToCart,
  removeFromCart,
} from "../../components/redux_api/actions/cartActions";
import { useDispatch } from "react-redux";

function CartItem({ item }) {
  const dispatch = useDispatch();

  const addToItemCart = () => {
    dispatch(addToCart(item.id, 1));
  };

  const reduceFromItemCart = () => {
    if (item.quantity <= 1) {
      dispatch(removeFromCart(item.id));
    } else {
      dispatch(addToCart(item.id, -1));
    }
  };

  const removeFromItemCart = () => {
    dispatch(removeFromCart(item.id));
  };
  return (
    <>
      <Flex className="cartitem-main-container">
        <Flex
          className="cartitem-left-container"
          direction={{ default: "row" }}
          justifyContent={{ default: "justifyContentFlexStart" }}
          alignItems={{ default: "alignItemsFlexStart" }}
        >
          <FlexItem>
            <img
              src={item.image}
              alt="product img"
              className="cartitem-item-image"
            />
          </FlexItem>

          <FlexItem className="cartitem-left-subcontainer">
            <h2>{item.name}</h2>
            <p>status: {item.status}</p>

            <p>
              Quantity:
              <button
                className="item-quantity-button"
                type="button"
                onClick={reduceFromItemCart}
              >
                -
              </button>
              <button disabled>{item.quantity}</button>
              <button
                className="item-quantity-button"
                type="button"
                onClick={addToItemCart}
              >
                +
              </button>
            </p>
            <p>
              Gender: <strong>{item.gender}</strong>
            </p>
            <p>
              Species: <strong>{item.species}</strong>
            </p>
            <p>Shipping Type: Express</p>
          </FlexItem>
        </Flex>
        <Flex
          className="cartitem-right-container"
          direction={{ default: "column" }}
          alignItems={{ default: "alignItemsFlexStart" }}
          justifyContent={{ default: "justifyContentSpaceBetween" }}
          align={{ default: "alignRight" }}
        >
          <FlexItem
            style={{ fontWeight: 600, color: "#B8263D", fontSize: "32px" }}
          >
            ₿ {item.id}
          </FlexItem>
          <FlexItem className="cartitem-trashicon">
            <Icon onClick={removeFromItemCart}>
              <TrashIcon />
            </Icon>
          </FlexItem>
        </Flex>
      </Flex>

      {/* <Grid className="cartitem-main-container">
      <GridItem className="cartitem-left-container" span={8}>
        <Flex direction={{ default: 'row'}} justifyContent={{ default: 'justifyContentFlexStart' }} alignItems={{default: 'alignItemsFlexStart'}}>
          <FlexItem>
            <img
              src={item.image}
              alt="product img"
              className="cartitem-item-image"
            />
          </FlexItem>

          <FlexItem className="cartitem-left-subcontainer">
            <h2>{item.name}</h2>
            <p>status: {item.status}</p>

            <p>
              Quantity:
              <button
                className="item-quantity-button"
                type="button"
                onClick={reduceFromItemCart}
              >
                -
              </button>
              <button disabled>{item.quantity}</button>
              <button
                className="item-quantity-button"
                type="button"
                onClick={addToItemCart}
              >
                +
              </button>
            </p>
            <p>
              Gender: <strong>{item.gender}</strong>
            </p>
            <p>
              Species: <strong>{item.species}</strong>
            </p>
            <p>Shipping Type: Express</p>
          </FlexItem>
        </Flex>
      </GridItem>
      <GridItem className="cartitem-right-container" span={4}>
        <div style={{ fontWeight: 600, color: "#B8263D", fontSize: "32px" }}>
          ₿ {item.id}
        </div>
        <div className="cartitem-trashicon">
          <Icon onClick={removeFromItemCart}>
            <TrashIcon />
          </Icon>
        </div>
      </GridItem>
    </Grid> */}
    </>
  );
}

export default CartItem;
