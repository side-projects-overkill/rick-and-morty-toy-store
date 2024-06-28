import React from "react";
import { Radio } from "@patternfly/react-core";
import { Button } from "@patternfly/react-core";
import "./CustomerInfo.scss";

function CustomerInfo() {
  return (
    <div className="customer-info-main-container">
      <div className="customer-info-top-container">
        <div className="radio-contianer">
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
        <Button variant="secondary" size="sm" className="change-address-btn" isDanger>
          Change Address
        </Button>
      </div>
    </div>
  );
}

export default CustomerInfo;
