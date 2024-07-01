import * as Yup from 'yup';

const PaymentFormSchema = Yup.object().shape(({
    cardNumber: Yup.number().required("Please enter your card number").positive().integer(),
    nameOnCard: Yup.string().required("Please enter the card holder name"),
    expiryDate: Yup.number().required("Please enter the expiry date").positive().integer(),
    cardCVV: Yup.number().required("Please enter the CVV number")
}))

export default PaymentFormSchema