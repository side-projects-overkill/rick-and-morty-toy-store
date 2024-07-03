import React from "react";
import { Radio } from "@patternfly/react-core";
import { Button } from "@patternfly/react-core";
import "./CustomerInfo.scss";
import { Link } from "react-router-dom";

function CustomerInfo() {
  return (
    <div className="customer-info-main-container">
      <div className="customer-info-top-container">
        <div className="radio-container">
          <Radio
            id="radio-standalone"
            aria-label="Standalone input"
            name="exampleRadioStandalone"
            isChecked="true"
          />
          <p>Sarah</p>
        </div>
        <p>Name</p>
      </div>
      <hr />
      <div className="customer-info-bottom-container">
        <p className="customer-address">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          pariatur,
        </p>
        <p className="customer-phone-number">Ph no. : 1234567890</p>
        <Link to="/address">
          <Button
            variant="secondary"
            size="sm"
            className="change-address-btn"
            isDanger
          >
            Change Address
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default CustomerInfo;
