import "./Header.scss";
import React from "react";
import Location from "../../assets/icons/Location";
import Help from "../../assets/icons/Help";
import Cart from "../../assets/icons/Cart";
import Account from "../../assets/icons/Account";
import SearchBarIcon from "../../assets/icons/SearchBarIcon";
import {
  TextInputGroup,
  TextInputGroupMain,
  TextInputGroupUtilities,
} from "@patternfly/react-core";

function Header() {
  const [value, setValue] = React.useState("");
  return (
    <div className="header-main-container">
      <div>
        <h1 className="header-heading">Rick and Morty Store</h1>
      </div>
      <div className="header-search-bar">
        <TextInputGroup style={{ width: "100%", height: "40px"}}>
          <TextInputGroupMain
            value={value}
            onChange={(_event, value) => setValue(value)}
            style={{ backgroundColor: "#F4F4F4", }}
            placeholder="Search for Cakes"
          ></TextInputGroupMain>
          <TextInputGroupUtilities className="text-group-utils"> 
            <SearchBarIcon/>
          </TextInputGroupUtilities>
        </TextInputGroup>
      </div>
      <ul className="header-components-container">
        <li>
          <button className="list-item">
            <Location />
            <p className="list-para">Location</p>
          </button>
        </li>
        <li>
          <button className="list-item">
            <Help />
            <p className="list-para">Help</p>
          </button>
        </li>
        <li>
          <button className="list-item">
            <Cart />
            <p className="list-para">Cart</p>
          </button>
        </li>
        <li>
          <button className="list-item">
            <Account />
            <p className="list-para">Account</p>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Header;
