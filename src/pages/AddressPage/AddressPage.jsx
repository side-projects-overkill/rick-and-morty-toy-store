import "./AddressPage.scss";
import {
  Form,
  FormGroup,
  TextInput,
  ActionGroup,
  Button,
  Grid,
  GridItem,
} from "@patternfly/react-core";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import deliveryAddressSchema from "./DeliveryAddressSchema";
import ProgressBar from "../../components/progressbar/ProgressBar";
import PriceDetails from "../../components/priceDetails/PriceDetails";
import ActivePill from "../../components/activePill/ActivePill";
import Products from "../../components/Products/Products";
import { useProductContext } from "../../contexts/ProductContext";

function AddressPage() {
  const { products } = useProductContext();

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
                <Grid hasGutter>
                  <GridItem span={12}>
                    <FormGroup
                      label="Recipient Name"
                      id="recipient-name"
                      helpertextinvalid={
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
                        className="recipient-field"
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
                  </GridItem>
                  <GridItem span={12}>
                    <FormGroup
                      label="Recipient Address"
                      id="recipient-address"
                      helpertextinvalid={
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
                      <TextInput
                        id="recipient-address"
                        name="recipientAddress"
                        className="recipient-field"
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
                  </GridItem>
                  <GridItem span={12}>
                    <FormGroup
                      label="Landmark"
                      id="recipient-landmark"
                      helpertextinvalid={
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
                        className="recipient-field"
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
                  </GridItem>
                  <GridItem span={6}>
                    <FormGroup
                      label="Pincode"
                      id="recipient-pincode"
                      helpertextinvalid={
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
                        className="recipient-field"
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
                  </GridItem>
                  <GridItem span={6}>
                    <FormGroup
                      label="City"
                      id="recipient-city"
                      helpertextinvalid={
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
                        className="recipient-field"
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
                  </GridItem>
                  <GridItem span={6}>
                    <FormGroup
                      label="Mobile Number"
                      id="recipient-mobile-number"
                      helpertextinvalid={
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
                        className="recipient-field"
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
                  </GridItem>
                  <GridItem span={6}>
                    <FormGroup
                      label="Alternate Mobile Number"
                      id="alternate-mobile-number"
                      helpertextinvalid={
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
                        className="recipient-field"
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
                  </GridItem>

                  <GridItem span={12}>
                    <FormGroup label="Address Type" id="address-type">
                      <div className="address-type-container">
                        <ActivePill content="Home" isActive={true} />
                        <ActivePill content="Work" isActive={false} />
                        <ActivePill
                          content="Friends & Family"
                          isActive={false}
                        />
                        <ActivePill content="Other" isActive={false} />
                      </div>
                    </FormGroup>
                  </GridItem>

                  <GridItem span={6}>
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
                  </GridItem>
                </Grid>
              </Form>
            )}
          </Formik>
        </div>
        <div className="add-address-bottom-right-container">
          <PriceDetails btnvalue="checkout" />
          <Button
            variant="primary"
            ouiaId="Primary"
            className="shopping-btn"
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </Button>
        </div>
      </div>
      <div className="cart-recommended-section">
        <h2>Recommended Toys</h2>
        <Products products={products?.slice(7, 11)} />
      </div>
    </div>
  );
}

export default AddressPage;
