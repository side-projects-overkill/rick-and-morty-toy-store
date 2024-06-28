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
import CreditCardImage from "../../assets/images/credit-card-image.png";
import ProgressBar from "../../components/progressbar/ProgressBar";
import PriceDetails from "../../components/priceDetails/PriceDetails";
import CustomerInfo from "../../components/customerInfo/CustomerInfo";
import "./PaymentPage.scss";

function PaymentPage() {
  return (
    <div className="payment-main-container">
      <ProgressBar />
      <div className="payment-bottom-container">
        <div className="payment-bottom-left-container">
          <div className="payment-method-container">
            <div className="payment-method-credit-item">
              <p>Credit/Debit Card</p>
            </div>
            <hr />
            <div className="payment-method-list-item">
              <p>Netbanking</p>
            </div>
            <hr />
            <div className="payment-method-list-item">
              <p>Paytm</p>
            </div>
            <hr />
            <div className="payment-method-list-item">
              <p>Google Pay</p>
            </div>
            <hr />
            <div className="payment-method-list-item">
              <p>PhonePe</p>
            </div>
            <hr />
            <div className="payment-method-list-item">
              <p>PayPal</p>
            </div>
            <hr />
            <div className="payment-method-list-item">
              <p>PayLater</p>
            </div>
            <hr />
            <div className="payment-method-list-item">
              <p>Cash On Delivery</p>
            </div>
          </div>
          <hr />
          <div className="payment-details-container">
            <Form>
              <FormGroup fieldId="card-number">
                <TextInput
                  isRequired
                  type="text"
                  id="card-number"
                  name="recipientName"
                  placeholder="Card Number"
                />
              </FormGroup>
              <FormGroup fieldId="name-on-card">
                <TextInput
                  isRequired
                  type="text"
                  id="name-on-card"
                  name="name-on-card"
                  placeholder="Name on Card"
                />
              </FormGroup>
              <Flex>
                <FlexItem>
                  <FormGroup fieldId="expiry-date">
                    <TextInput
                      type="text"
                      id="expiry-date"
                      name="expiry-date"
                      placeholder="Expiry Date"
                    />
                  </FormGroup>
                </FlexItem>
                <FlexItem>
                  <FormGroup fieldId="cvv">
                    <TextInput
                      isRequired
                      type="text"
                      id="cvv"
                      name="cvv"
                      placeholder="CVV"
                    />
                  </FormGroup>
                </FlexItem>
                <div className="credit-card-image">
                  <img src={CreditCardImage} alt="credit-card-image" />
                </div>
              </Flex>
              <p>* Your card information will not be saved</p>
            </Form>
            <Button variant="primary" ouiaId="Primary" className="pay-btn">
              Continue Shopping
            </Button>
          </div>
        </div>
        <div className="payment-bottom-right-container">
          <CustomerInfo />
          <PriceDetails />
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
