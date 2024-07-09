import "./Header.scss";
import { useState } from "react";
import Location from "../../assets/icons/Location";
import Help from "../../assets/icons/Help";
import Cart from "../../assets/icons/Cart";
import Account from "../../assets/icons/Account";
import { useNavigate } from "react-router-dom";
import { SearchInput, Text, TextVariants, Badge } from "@patternfly/react-core";
import { useCartContext } from "../../contexts/CartContext";

function Header() {
  const [value, setValue] = useState("");
  const { cartItems } = useCartContext();
  const navigate = useNavigate();
  const onChange = (value) => {
    setValue(value);
  };

  return (
    <div className="header-main-container">
      <div>
        <Text
          component={TextVariants.h1}
          className="header-heading"
          onClick={() => {
            navigate("/");
          }}
        >
          Rick and Morty Store
        </Text>
      </div>
      <div className="header-search-bar">
        <SearchInput
          placeholder="Search for Cakes"
          value={value}
          onChange={(_event, value) => onChange(value)}
          onClear={() => onChange("")}
          className="header-search"
        />
      </div>
      <ul className="header-components-container">
        <li>
          <button className="list-item">
            <Location />
            <Text component={TextVariants.p} className="list-para">
              Location
            </Text>
          </button>
        </li>
        <li>
          <button className="list-item">
            <Help />
            <Text component={TextVariants.p} className="list-para">
              Help
            </Text>
          </button>
        </li>
        <li>
          <button className="list-item" onClick={() => navigate("/cart")}>
            {cartItems?.length > 0 && (
              <Badge key={1} screenReaderText="Unread Messages">
                {cartItems.length}
              </Badge>
            )}
            <Cart />
            <Text component={TextVariants.p} className="list-para">
              Cart
            </Text>
          </button>
        </li>
        <li>
          <button className="list-item">
            <Account />
            <Text component={TextVariants.p} className="list-para">
              Account
            </Text>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Header;
