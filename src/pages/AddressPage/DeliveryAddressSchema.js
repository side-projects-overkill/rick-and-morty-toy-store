import * as Yup from 'yup';
import {number} from 'yup';

let deliveryAddressSchema = Yup.object().shape(({
  recipientName: Yup.string().required("Please enter your name"),
  recipientAddress: Yup.string().required("Please enter the delivery address"),
  recipientLandmark: Yup.string(),
  recipientPincode: number().required("Please enter the pincode").positive().integer(),
  recipientCity: Yup.string().required("Please enter the city"),
  recipientMobile: number().required("Please enter the Mobile Number").positive().integer(),
  recipientAlernateMobile: number().positive().integer()
}))

export default deliveryAddressSchema;