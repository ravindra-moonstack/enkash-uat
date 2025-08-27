import * as Yup from "yup"

export type TPaymentInitialValueProp = {
  SingleLine: string
  SingleLine1: string
  Email: string
  PhoneNumber_countrycode: string
  MultipleChoice: string
  Website: string
  MultiLine: string
  Dropdown5: string
  Dropdown6: string
}

const paymentInitialValue: TPaymentInitialValueProp = {
  SingleLine: "",
  SingleLine1: "",
  Email: "",
  PhoneNumber_countrycode: "",
  MultipleChoice: "",
  Website: "",
  MultiLine: "",
  Dropdown5: "",
  Dropdown6: "",
}

const paymentValidation = Yup.object({
  SingleLine: Yup.string().required("Please enter name"),
  SingleLine1: Yup.string().required("Please enter company name"),
  Email: Yup.string()
    .email("Please enter valid email")
    .required("Please enter email"),
  PhoneNumber_countrycode: Yup.string()
    .required("Please enter phone number")
    .max(13)
    .min(10, "Please enter valid mobile number"),
  MultipleChoice: Yup.array().required("Please select category"),
  Website: Yup.string().url("Please enter valid url"),
  MultiLine: Yup.string().max(500, "Text exceeds"),
  Dropdown5: Yup.string(),
  Dropdown6: Yup.string(),
})

export { paymentInitialValue, paymentValidation }
