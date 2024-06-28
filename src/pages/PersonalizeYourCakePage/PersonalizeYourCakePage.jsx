import React from "react";
import "./PersonalizeYourCakePage.scss";
import {
  Form,
  FormGroup,
  TextInput,
  TextArea,
  Button,
  Flex,
  FlexItem,
  TextInputGroup,
  TextInputGroupMain,
  Checkbox
} from "@patternfly/react-core";
import ProgressBar from "../../components/progressbar/ProgressBar";
import PriceDetails from "../../components/priceDetails/PriceDetails";
import CustomerInfo from "../../components/customerInfo/CustomerInfo";

function PersonalizeYourCakePage() {
  return (
    <div className="personalize-main-container">
      <ProgressBar />
      <div className="personalize-bottom-container">
        <div className="personalize-bottom-left-container">
          <h1 className="personalize-heading">Personailze your cake</h1>
          <Form>
            <FormGroup
              label="Delivery Date & Time"
              isRequired
              fieldId="date-time"
            >
              <TextInput
                isRequired
                type="text"
                id="date-time"
                name="DateAndTime"
              />
            </FormGroup>

            <div className="occasion-container">
              <h1>Occasion</h1>
            </div>

            <FormGroup
              label="Personal Message"
              fieldId="personal-message"
            >
              <TextArea
                isRequired
                id="personal-message"
                name="personalMessage"
              />
            </FormGroup>

            <div className="sender-container">
              <h1 className="sender-text">
                Sender Information Order related communication will also be sent
                on these details.
              </h1>
              <Button
                variant="secondary"
                ouiaId="Primary"
                className="sender-btn"
                isDanger
              >
                Edit
              </Button>
            </div>

            <Flex>
              <FlexItem>
                <FormGroup
                  label="Name"
                  fieldId="name"
                >
                  <TextInputGroup isDisabled>
                    <TextInputGroupMain
                      value="Sarah"
                      type="text"
                      aria-label="Disabled text input group example input"
                    />
                  </TextInputGroup>
                </FormGroup>
              </FlexItem>

              <FlexItem>
              <FormGroup
                  label="Phone Number"
                  fieldId="phone-number"
                >
                  <TextInputGroup isDisabled>
                    <TextInputGroupMain
                      value="Sarah"
                      type="text"
                      aria-label="Disabled text input group example input"
                    />
                  </TextInputGroup>
                </FormGroup>
              </FlexItem>
            </Flex>
            <div className="keep-suprise-container">
              <Checkbox id="standalone-check" name="standlone-check" aria-label="Standalone input" />
              <p>Keep Surprise (Hide Sender Information from Recipient)</p>
            </div>
          </Form>
        </div>
        <div className="personalize-bottom-right-container">
          <CustomerInfo />
          <PriceDetails />
        </div>
      </div>
    </div>
  );
}

export default PersonalizeYourCakePage;
