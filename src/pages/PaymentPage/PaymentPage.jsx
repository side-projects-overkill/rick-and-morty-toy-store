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
import { Formik, ErrorMessage } from "formik";
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
                  <FlexItem flex={{ default: "flex_1" }}>
                    <FormGroup
                      fieldId="card-number"
                      helperTextInvalid={
                        touched.cardNumber && errors.cardNumber
                      }
                      validated={
                        touched.cardNumber && errors.cardNumber
                          ? "error"
                          : "default"
                      }
                    >
                      <TextInput
                        type="text"
                        id="card-number"
                        name="cardNumber"
                        placeholder="Card Number"
                        value={values.cardNumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        validated={
                          touched.cardNumber && errors.cardNumber
                            ? "error"
                            : "default"
                        }
                      />
                      <ErrorMessage
                        name="cardNumber"
                        component="div"
                        className="pf-c-form__helper-text pf-m-error"
                      />
                    </FormGroup>
                  </FlexItem>
                  <FlexItem flex={{ default: "flex_1" }}>
                    <FormGroup
                      fieldId="name-on-card"
                      helperTextInvalid={
                        touched.nameOnCard && errors.nameOnCard
                      }
                      validated={
                        touched.nameOnCard && errors.nameOnCard
                          ? "error"
                          : "default"
                      }
                    >
                      <TextInput
                        type="text"
                        id="name-on-card"
                        name="nameOnCard"
                        placeholder="Name on Card"
                        value={values.nameOnCard}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        validated={
                          touched.nameOnCard && errors.nameOnCard
                            ? "error"
                            : "default"
                        }
                      />
                      <ErrorMessage
                        name="nameOnCard"
                        component="div"
                        className="pf-c-form__helper-text pf-m-error"
                      />
                    </FormGroup>
                  </FlexItem>
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
                        <TextInput
                          type="text"
                          id="expiry-date"
                          name="expiryDate"
                          placeholder="MM/YY"
                          value={values.expiryDate}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          validated={
                            touched.expiryDate && errors.expiryDate
                              ? "error"
                              : "default"
                          }
                        />
                        <ErrorMessage
                          name="expiryDate"
                          component="div"
                          className="pf-c-form__helper-text pf-m-error"
                        />
                      </FormGroup>
                    </FlexItem>
                    <FlexItem flex={{ default: "flex_1" }}>
                      <FormGroup
                        fieldId="card-cvv"
                        helperTextInvalid={touched.cardCVV && errors.cardCVV}
                        validated={
                          touched.cardCVV && errors.cardCVV
                            ? "error"
                            : "default"
                        }
                      >
                        <TextInput
                          type="text"
                          id="card-cvv"
                          name="cardCVV"
                          placeholder="CVV"
                          value={values.cardCVV}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          validated={
                            touched.cardCVV && errors.cardCVV
                              ? "error"
                              : "default"
                          }
                        />
                        <ErrorMessage
                          name="cardCVV"
                          component="div"
                          className="pf-c-form__helper-text pf-m-error"
                        />
                      </FormGroup>
                    </FlexItem>
                    <FlexItem>
                      <img src={CreditCardImage} alt="credit-card-image" />
                    </FlexItem>
                  </Flex>
                  <p>* Your card information will not be saved</p>
                  <FlexItem>
                    <Button
                      type="submit"
                      variant="primary"
                      ouiaId="Primary"
                      className="pay-btn"
                    >
                      Pay ₿{price} Now
                    </Button>
                  </FlexItem>
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
