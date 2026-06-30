import * as Yup from "yup"

export type TPpcPaymentInitialValueProp = {
  SingleLine: string
  Email: string
  SingleLine1: string
  PhoneNumber_countrycode: string
  Website: string
  SingleLine7: string
  Dropdown6: string
  MultiLine: string
  Dropdown1: string
  SingleLine2: string // ✅ UTM Source
  SingleLine3: string // ✅ UTM Medium
  SingleLine4: string // ✅ UTM Campaign
  SingleLine5: string // ✅ Referring Page
  SingleLine6: string // ✅ Form Name
}

const ppcPaymentInitialValue: TPpcPaymentInitialValueProp = {
  SingleLine: "",
  Email: "",
  SingleLine1: "",
  PhoneNumber_countrycode: "",
  Website: "",
  SingleLine7: "",
  Dropdown6: "",
  MultiLine: "",
  Dropdown1: "Marketing", // ✅ Channel
  SingleLine2: "Website Sales Lead", // ✅ UTM Source
  SingleLine3: "", // ✅ UTM Medium
  SingleLine4: "", // ✅ UTM Campaign
  SingleLine5: "", // ✅ Referring Page
  SingleLine6: "PPC: Payment Gateway", // ✅ Form Name
}

const ppcPaymentValidation = Yup.object({
  SingleLine: Yup.string().required("Please enter name"),
  Email: Yup.string()
    .email("Please enter valid email")
    .required("Please enter email"),
  SingleLine1: Yup.string().required("Please enter company name"),
  PhoneNumber_countrycode: Yup.string()
    .required("Please enter phone number")
    .max(13)
    .min(10, "Please enter valid mobile number"),
  Website: Yup.string().required("Please enter website or app link"),
  SingleLine7: Yup.string(),
  Dropdown6: Yup.string().required("Please select type of business"),
  MultiLine: Yup.string().max(500, "Text exceeds"),
})

export { ppcPaymentInitialValue, ppcPaymentValidation }
