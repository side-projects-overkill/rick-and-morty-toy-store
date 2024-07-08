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
  Checkbox,
} from "@patternfly/react-core";
import { useSelector } from "react-redux";
import ProgressBar from "../../components/progressbar/ProgressBar";
import PriceDetails from "../../components/priceDetails/PriceDetails";
import CustomerInfo from "../../components/customerInfo/CustomerInfo";
import ActivePill from "../../components/activePill/ActivePill";
import Products from "../../components/Products/Products";

function PersonalizeYourCakePage() {
  const { products } = useSelector((state) => state.getProducts);
  return (
    <div className="personalize-main-container">
      <ProgressBar />
      <div className="personalize-bottom-container">
        <div className="personalize-bottom-left-container">
          <h1 className="personalize-heading">Personailze your Product</h1>
          <Form>
            <FormGroup
              label="Delivery Date & Time"
              isRequired
              fieldId="date-time"
            >
              <TextInput
                isRequired
                type="date"
                id="date-time"
                name="DateAndTime"
                className="personalize-input"
              />
            </FormGroup>

            <FormGroup label="Occasion" fieldId="fier">
              <div className="occasion-type">
                <ActivePill content="Birthday" isActive={true}/>
                <ActivePill content="Anniversary" isActive={false}/>
                <ActivePill content="Other" isActive={false}/>
              </div>
            </FormGroup>

            <FormGroup label="Personal Message" fieldId="personal-message">
              <TextArea
                isRequired
                id="personal-message"
                name="personalMessage"
                className="personalize-input"
              />
            </FormGroup>

            <div className="sender-container">
              <p className="sender-text">
                Sender Information Order related communication will also be sent
                on these details.
              </p>
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
              <FlexItem flex={{ default: "flex_1" }}>
                <FormGroup label="Name" fieldId="name">
                  <TextInputGroup isDisabled>
                    <TextInputGroupMain
                      value="Sarah"
                      type="text"
                      aria-label="Disabled text input group example input"
                    />
                  </TextInputGroup>
                </FormGroup>
              </FlexItem>

              <FlexItem flex={{ default: "flex_1" }}>
                <FormGroup label="Phone Number" fieldId="phone-number">
                  <TextInputGroup isDisabled>
                    <TextInputGroupMain
                      value="1234567890"
                      type="text"
                      aria-label="Disabled text input group example input"
                    />
                  </TextInputGroup>
                </FormGroup>
              </FlexItem>
            </Flex>
            <div className="keep-suprise-container">
              <Checkbox
                id="standalone-check"
                name="standlone-check"
                aria-label="Standalone input"
              />
              <p>Keep Surprise (Hide Sender Information from Recipient)</p>
            </div>
          </Form>
        </div>
        <div className="personalize-bottom-right-container">
          <CustomerInfo />
          <PriceDetails btnvalue="payment" />
        </div>
      </div>
      <div className="cart-recommended-section">
        <h2>Recommended Toys</h2>
        <Products products={products?.results?.slice(7, 11)} />
      </div>
    </div>
  );
}

export default PersonalizeYourCakePage;
