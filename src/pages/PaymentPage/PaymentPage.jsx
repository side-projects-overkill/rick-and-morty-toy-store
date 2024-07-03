import { useState, useEffect } from "react";
import {
  Form,
  FormGroup,
  TextInput,
  Button,
  Flex,
  FlexItem,
} from "@patternfly/react-core";
import CreditCardImage from "../../assets/images/credit-card-image.png";
import { Formik, Field } from "formik";
import PaymentFormSchema from "./PaymentFormSchema";
import ProgressBar from "../../components/progressbar/ProgressBar";
import ConfirmedDetails from "./ConfirmedDetails";
import CustomerInfo from "../../components/customerInfo/CustomerInfo";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./PaymentPage.scss";

function PaymentPage() {
  const [price, setPrice] = useState();
  const navigate = useNavigate();

  const { cartItems } = useSelector((state) => state.cart);

  const totalAmount = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.id * item.quantity;
    });
    setPrice(total);
  };

  useEffect(() => {
    totalAmount();
  });

  const paymentOptions = [
    "Credit/Debit Card",
    "Netbanking",
    "Paytm",
    "Google Pay",
    "PhonePe",
    "PayPal",
    "PayLater",
    "Cash On Delivery",
  ];

  return (
    <div className="payment-main-container">
      <ProgressBar />
      <div className="payment-bottom-container">
        <div className="payment-bottom-left-container">
          <div className="payment-method-container">
            {paymentOptions.map((option) => {
              return (
                <>
                  <div className="payment-method-list-item">
                    <p>{option}</p>
                  </div>
                  <hr />
                </>
              );
            })}
          </div>
          <hr />
          <div className="payment-details-container">
            <Formik
              initialValues={{
                cardNumber: "",
                nameOnCard: "",
                expiryDate: "",
                cardCVV: "",
              }}
              validationSchema={PaymentFormSchema}
              onSubmit={(values, { setSubmitting }) => {
                console.log(values);
                setSubmitting(false);
                navigate("/payment-confirm");
              }}
            >
              {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                errors,
              }) => (
                <Form onSubmit={handleSubmit}>
                  <FormGroup
                    fieldId="card-number"
                    helperTextInvalid={touched.cardNumber && errors.cardNumber}
                    validated={touched.cardNumber ? "error" : "default"}
                  >
                    <Field name="cardNumber">
                      {({ field }) => (
                        <TextInput
                          {...field}
                          isRequired
                          type="text"
                          id="card-number"
                          placeholder="Card Number"
                          validated={
                            touched.cardNumber && errors.cardNumber
                              ? "error"
                              : "default"
                          }
                        />
                      )}
                    </Field>
                  </FormGroup>
                  <FormGroup
                    fieldId="name-on-card"
                    helperTextInvalid={touched.nameOnCard && errors.nameOnCard}
                    validated={
                      touched.nameOnCard && errors.nameOnCard
                        ? "error"
                        : "default"
                    }
                  >
                    <Field name="nameOnCard">
                      {({ field }) => (
                        <TextInput
                          {...field}
                          isRequired
                          type="text"
                          id="name-on-card"
                          placeholder="Name on Card"
                          validated={
                            touched.nameOnCard && errors.nameOnCard
                              ? "error"
                              : "default"
                          }
                        />
                      )}
                    </Field>
                  </FormGroup>
                  <Flex>
                    <FlexItem flex={{ default: "flex_1" }}>
                      <FormGroup
                        fieldId="expiry-date"
                        helperTextInvalid={
                          touched.expiryDate && errors.expiryDate
                        }
                        validated={
                          touched.expiryDate && errors.expiryDate
                            ? "error"
                            : "default"
                        }
                      >
                        <Field name="expiryDate">
                          {({ field }) => (
                            <TextInput
                              {...field}
                              type="number"
                              id="expiry-date"
                              placeholder="Expiry Date"
                              validated={
                                touched.expiryDate && errors.expiryDate
                                  ? "error"
                                  : "default"
                              }
                            />
                          )}
                        </Field>
                      </FormGroup>
                    </FlexItem>
                    <FlexItem flex={{ default: "flex_1" }}>
                      <FormGroup
                        fieldId="cvv"
                        helperTextInvalid={touched.cardCVV && errors.cardCVV}
                        validated={
                          touched.cardCVV && errors.cardCVV
                            ? "error"
                            : "default"
                        }
                      >
                        <Field name="cardCVV">
                          {({ field }) => (
                            <TextInput
                              {...field}
                              isRequired
                              type="text"
                              id="cvv"
                              placeholder="CVV"
                              validated={
                                touched.cardCVV && errors.cardCVV
                                  ? "error"
                                  : "default"
                              }
                            />
                          )}
                        </Field>
                      </FormGroup>
                    </FlexItem>
                    <FlexItem>
                      <img src={CreditCardImage} alt="credit-card-image" />
                    </FlexItem>
                  </Flex>
                  <p>* Your card information will not be saved</p>
                  <Button
                    type="submit"
                    variant="primary"
                    ouiaId="Primary"
                    className="pay-btn"
                  >
                    Pay ₿{price} Now
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <div className="payment-bottom-right-container">
          <CustomerInfo />
          <ConfirmedDetails />
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
