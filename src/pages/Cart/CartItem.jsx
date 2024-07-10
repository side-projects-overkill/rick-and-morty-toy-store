import { TrashIcon } from "@patternfly/react-icons";
import { Icon, Flex, FlexItem } from "@patternfly/react-core";
import { useCartContext } from "../../contexts/CartContext";
import "./CartItem.scss";

function CartItem({ item }) {
  const { addToCart, removeFromCart } = useCartContext();
  const addToItemCart = () => {
    addToCart(item.id, item, 1);
  };
  const reduceFromItemCart = () => {
    if (item.quantity <= 1) {
      removeFromCart(item.id);
    } else {
      addToCart(item.id, item, -1);
    }
  };

  const removeFromItemCart = () => {
    removeFromCart(item.id);
  };
  return (
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
  );
}

export default CartItem;
