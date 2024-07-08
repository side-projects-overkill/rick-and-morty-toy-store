import { useState, useEffect } from "react";
import { Form, FormGroup, TextInput, Button } from "@patternfly/react-core";
import { Formik, ErrorMessage } from "formik";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Grid, GridItem } from "@patternfly/react-core";
import CreditCardImage from "../../assets/images/credit-card-image.png";
import PaymentFormSchema from "./PaymentFormSchema";
import ProgressBar from "../../components/progressbar/ProgressBar";
import ConfirmedDetails from "./ConfirmedDetails";
import CustomerInfo from "../../components/customerInfo/CustomerInfo";
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
            {paymentOptions.map((option, index) => {
              return (
                <div key={index}>
                  <div className="payment-method-list-item">
                    <p>{option}</p>
                  </div>
                  <hr />
                </div>
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
                  <Grid hasGutter>
                    <GridItem span={12}>
                      <FormGroup
                        fieldId="card-number"
                        helpertextinvalid={
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
                          className="payment-input"
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
                    </GridItem>
                    <GridItem span={12}>
                      <FormGroup
                        fieldId="name-on-card"
                        helpertextinvalid={
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
                          className="payment-input"
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
                    </GridItem>
                    <GridItem span={5}>
                      <FormGroup
                        fieldId="expiry-date"
                        helpertextinvalid={
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
                          className="payment-input"
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
                    </GridItem>
                    <GridItem span={6}>
                      <FormGroup
                        fieldId="card-cvv"
                        helpertextinvalid={touched.cardCVV && errors.cardCVV}
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
                          className="payment-input"
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
                    </GridItem>
                    <GridItem span={1}>
                      <img src={CreditCardImage} alt="credit-card-image" />
                    </GridItem>
                    <p>* Your card information will not be saved</p>
                    <GridItem span={12}>
                      <Button
                        type="submit"
                        variant="primary"
                        ouiaId="Primary"
                        className="pay-btn"
                      >
                        Pay ₿{price} Now
                      </Button>
                    </GridItem>
                  </Grid>
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
