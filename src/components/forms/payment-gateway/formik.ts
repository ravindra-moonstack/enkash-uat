import * as Yup from "yup"

export type TPaymentInitialValueProp = {
  SingleLine: string
  SingleLine1: string
  Email: string
  PhoneNumber_countrycode: string
  MultiLine: string
  Dropdown: string
  Dropdown1: string

  Dropdown5: string
  Dropdown6: string
  SingleLine2: string // ✅ UTM Source
  SingleLine3: string // ✅ UTM Medium
  SingleLine4: string // ✅ UTM Campaign
  SingleLine5: string // ✅ Referring Page
}

const paymentInitialValue: TPaymentInitialValueProp = {
  SingleLine: "",
  SingleLine1: "",
  Email: "",
  PhoneNumber_countrycode: "",
  MultiLine: "",
  Dropdown: "Landing Page",
  Dropdown1: "Marketing",
  Dropdown5: "",
  Dropdown6: "",
  SingleLine2: "Website Salessss Leads", // ✅ UTM Source default
  SingleLine3: "", // ✅ UTM Medium
  SingleLine4: "", // ✅ UTM Campaign
  SingleLine5: "", // ✅ Referring Page
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
  MultiLine: Yup.string().max(500, "Text exceeds"),
  Dropdown5: Yup.string(),
  Dropdown6: Yup.string(),
})

export { paymentInitialValue, paymentValidation }
