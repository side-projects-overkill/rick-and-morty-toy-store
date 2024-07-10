import * as Yup from "yup";

const PaymentFormSchema = Yup.object().shape({
  cardNumber: Yup.string()
    .required("Please enter your card number")
    .matches(/^[0-9]{12}$/, "Card number must be 12 digits"),
  nameOnCard: Yup.string()
    .required("Please enter the card holder name")
    .matches(/^[a-zA-Z\s]*$/, "Name must only contain letters and spaces"),
  expiryDate: Yup.string()
    .required("Please enter the expiry date")
    .matches(
      /^(0[1-9]|1[0-2])\/?([0-9]{2})$/,
      "Expiry date must be in MM/YY format"
    ),
  cardCVV: Yup.string()
    .required("Please enter the CVV number")
    .matches(/^[0-9]{3}$/, "CVV must be 3  digits"),
});

export default PaymentFormSchema;
