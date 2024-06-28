import "./AddressPage.scss";
import React from "react";
import {
  Form,
  FormGroup,
  TextInput,
  TextArea,
  ActionGroup,
  Button,
  Flex,
  FlexItem,
} from "@patternfly/react-core";
import ProgressBar from "../../components/progressbar/ProgressBar";
import PriceDetails from "../../components/priceDetails/PriceDetails";

function AddressPage() {
  return (
    <div className="add-address-main-container">
      <ProgressBar />
      <div className="add-address-bottom-container">
        <div className="add-address-bottom-left-container">
          <h1 className="add-address-heading">Add Delivery Address</h1>
          <Form>
            <FormGroup
              label="Recipient Name"
              fieldId="fier"
            >
              <TextInput
                type="text"
                id="recipient-name"
                name="recipientName"
              />
            </FormGroup>
            <FormGroup
              label="Recipient Address"
              fieldId="recipient-address"
            >
              <TextArea
                id="recipient-address"
                name="recipientAddress"
              />
            </FormGroup>
            <FormGroup label="Landmark" fieldId="recipient-landmark">
              <TextInput  type="text" id="recipient-landmark" name="recipient-landmark" />
            </FormGroup>
            <Flex>
              <FlexItem>
                <FormGroup label="Pincode" fieldId="recipient-pincode">
                  <TextInput
                  
                    type="text"
                    id="recipient-pincode"
                    name="recipient-pincode"
                  />
                </FormGroup>
              </FlexItem>
              <FlexItem>
                <FormGroup label="City" fieldId="recipient-city">
                  <TextInput type="text" id="recipient-city" name="recipient-city" />
                </FormGroup>
              </FlexItem>
            </Flex>
            <Flex>
              <FlexItem>
                <FormGroup
                  label="Mobile Number"
                
                  fieldId="recipient-mobile-number"
                >
                  <TextInput
                  
                    type="tel"
                    id="recipient-mobile-number"
                    name="recipient-mobile-number"
                  />
                </FormGroup>
              </FlexItem>
              <FlexItem>
                <FormGroup
                  label="Alternate Mobile Number"
                  fieldId="alternate-mobile-number"
                >
                  <TextInput
                    type="tel"
                    id="alternate-mobile-number"
                    name="alternateMobileNumber"
                  />
                </FormGroup>
              </FlexItem>
            </Flex>
            <ActionGroup>
              <Button variant="primary">Save</Button>
              <Button variant="secondary" isDanger>Cancel</Button>
            </ActionGroup>
          </Form>
        </div>
        <div className="add-address-bottom-right-container">
          <PriceDetails />
        </div>
      </div>
    </div>
  );
}

export default AddressPage;
