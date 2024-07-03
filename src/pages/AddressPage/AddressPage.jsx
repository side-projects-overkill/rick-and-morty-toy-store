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
import { useSelector } from "react-redux";
import { Formik} from "formik";
import { Link } from "react-router-dom";
import {  useNavigate } from "react-router-dom";
import deliveryAddressSchema from "./DeliveryAddressSchema";
import ProgressBar from "../../components/progressbar/ProgressBar";
import PriceDetails from "../../components/priceDetails/PriceDetails";
import ActivePill from "../../components/activePill/ActivePill";
import InactivePill from "../../components/inactivePill/InactivePill";
import Products from "../../components/Products/Products"

function AddressPage() {
  const { products } = useSelector((state) => state.getProducts);

  const navigate = useNavigate();

  return (
    <div className="add-address-main-container">
      <ProgressBar />
      <div className="add-address-bottom-container">
        <div className="add-address-bottom-left-container">
          <h1 className="add-address-heading">Add Delivery Address</h1>
          <Formik
            initialValues={{
              recipientName: "",
              recipientAddress: "",
              recipientLandmark: "",
              recipientPincode: "",
              recipientCity: "",
              recipientMobile: "",
              recipientAlternateMobile: "",
            }}
            validationSchema={deliveryAddressSchema}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
              setSubmitting(false);
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
                  label="Recipient Name"
                  fieldId="recipient-name"
                  helperTextInvalid={
                    errors.recipientName &&
                    touched.recipientName &&
                    errors.recipientName
                  }
                  validated={
                    errors.recipientName && touched.recipientName
                      ? "error"
                      : "default"
                  }
                >
                  <TextInput
                    type="text"
                    id="recipient-name"
                    name="recipientName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.recipientName}
                    validated={
                      errors.recipientName && touched.recipientName
                        ? "error"
                        : "default"
                    }
                  />
                </FormGroup>

                <FormGroup
                  label="Recipient Address"
                  fieldId="recipient-address"
                  helperTextInvalid={
                    errors.recipientAddress &&
                    touched.recipientAddress &&
                    errors.recipientAddress
                  }
                  validated={
                    errors.recipientAddress && touched.recipientAddress
                      ? "error"
                      : "default"
                  }
                >
                  <TextArea
                    id="recipient-address"
                    name="recipientAddress"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.recipientAddress}
                    validated={
                      errors.recipientAddress && touched.recipientAddress
                        ? "error"
                        : "default"
                    }
                  />
                </FormGroup>

                <FormGroup
                  label="Landmark"
                  fieldId="recipient-landmark"
                  helperTextInvalid={
                    errors.recipientLandmark &&
                    touched.recipientLandmark &&
                    errors.recipientLandmark
                  }
                  validated={
                    errors.recipientLandmark && touched.recipientLandmark
                      ? "error"
                      : "default"
                  }
                >
                  <TextInput
                    type="text"
                    id="recipient-landmark"
                    name="recipientLandmark"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.recipientLandmark}
                    validated={
                      errors.recipientLandmark && touched.recipientLandmark
                        ? "error"
                        : "default"
                    }
                  />
                </FormGroup>

                <Flex>
                  <FlexItem flex={{ default: "flex_1" }}>
                    <FormGroup
                      label="Pincode"
                      fieldId="recipient-pincode"
                      helperTextInvalid={
                        errors.recipientPincode &&
                        touched.recipientPincode &&
                        errors.recipientPincode
                      }
                      validated={
                        errors.recipientPincode && touched.recipientPincode
                          ? "error"
                          : "default"
                      }
                    >
                      <TextInput
                        type="tel"
                        id="recipient-pincode"
                        name="recipientPincode"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.recipientPincode}
                        validated={
                          errors.recipientPincode && touched.recipientPincode
                            ? "error"
                            : "default"
                        }
                      />
                    </FormGroup>
                  </FlexItem>
                  <FlexItem flex={{ default: "flex_1" }}>
                    <FormGroup
                      label="City"
                      fieldId="recipient-city"
                      helperTextInvalid={
                        errors.recipientCity &&
                        touched.recipientCity &&
                        errors.recipientCity
                      }
                      validated={
                        errors.recipientCity && touched.recipientCity
                          ? "error"
                          : "default"
                      }
                    >
                      <TextInput
                        type="text"
                        id="recipient-city"
                        name="recipientCity"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.recipientCity}
                        validated={
                          errors.recipientCity && touched.recipientCity
                            ? "error"
                            : "default"
                        }
                      />
                    </FormGroup>
                  </FlexItem>
                </Flex>

                <Flex>
                  <FlexItem flex={{ default: "flex_1" }}>
                    <FormGroup
                      label="Mobile Number"
                      fieldId="recipient-mobile-number"
                      helperTextInvalid={
                        errors.recipientMobile &&
                        touched.recipientMobile &&
                        errors.recipientMobile
                      }
                      validated={
                        errors.recipientMobile && touched.recipientMobile
                          ? "error"
                          : "default"
                      }
                    >
                      <TextInput
                        type="tel"
                        id="recipient-mobile-number"
                        name="recipientMobile"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.recipientMobile}
                        validated={
                          errors.recipientMobile && touched.recipientMobile
                            ? "error"
                            : "default"
                        }
                      />
                    </FormGroup>
                  </FlexItem>
                  <FlexItem flex={{ default: "flex_1" }}>
                    <FormGroup
                      label="Alternate Mobile Number"
                      fieldId="alternate-mobile-number"
                      helperTextInvalid={
                        errors.recipientAlternateMobile &&
                        touched.recipientAlternateMobile &&
                        errors.recipientAlternateMobile
                      }
                      validated={
                        errors.recipientAlternateMobile &&
                        touched.recipientAlternateMobile
                          ? "error"
                          : "default"
                      }
                    >
                      <TextInput
                        type="tel"
                        id="alternate-mobile-number"
                        name="recipientAlternateMobile"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.recipientAlternateMobile}
                        validated={
                          errors.recipientAlternateMobile &&
                          touched.recipientAlternateMobile
                            ? "error"
                            : "default"
                        }
                      />
                    </FormGroup>
                  </FlexItem>
                </Flex>

                <FormGroup label="Address Type" fieldId="address-type">
                  <div className="address-type-container">
                    <ActivePill content="Home" />
                    <InactivePill content="Work" />
                    <InactivePill content="Friends & Family" />
                    <InactivePill content="Other" />
                  </div>
                </FormGroup>

                <ActionGroup>
                  <Button variant="danger" type="submit" isDisabled={false}>
                    Save
                  </Button>
                  <Link to="/cart">
                    <Button variant="secondary" isDanger>
                      Cancel
                    </Button>
                  </Link>
                </ActionGroup>
              </Form>
            )}
          </Formik>
        </div>
        <div className="add-address-bottom-right-container">
          <PriceDetails btnvalue="checkout" />
          <Button variant="primary" ouiaId="Primary" className="shopping-btn" onClick={()=> navigate("/")}>
            Continue Shopping
          </Button>
        </div>
      </div>
      <div className="cart-recommended-section">
        <h2>Recommended Toys</h2>
        <Products products={products?.results?.slice(7, 11)} />
      </div>
    </div>
  );
}

export default AddressPage;
