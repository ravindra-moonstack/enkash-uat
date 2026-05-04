import * as Yup from "yup"

export type TEcommerceAffiliateInitialValueProp = {
  SingleLine: string // Full Name
  Email: string // Work Email
  PhoneNumber_countrycode: string // Phone Number
  SingleLine1: string // Company Name
  Dropdown5: string // Monthly Merchant Volume
  Dropdown6: string // Line of Business
  MultiLine: string // Comments
  Dropdown1: string // Channel
  SingleLine2: string // UTM Source
  SingleLine3: string // UTM Medium
  SingleLine4: string // UTM Campaign
  SingleLine5: string // Referring Page
  SingleLine6: string // Department/Form Name
}

const ecommerceAffiliateInitialValue: TEcommerceAffiliateInitialValueProp = {
  SingleLine: "",
  Email: "",
  PhoneNumber_countrycode: "",
  SingleLine1: "",
  Dropdown5: "-Select-",
  Dropdown6: "-Select-",
  MultiLine: "",
  Dropdown1: "Marketing",
  SingleLine2: "Website Sales Leads",
  SingleLine3: "",
  SingleLine4: "",
  SingleLine5: "",
  SingleLine6: "Website - Payment Gateway",
}

const ecommerceAffiliateValidation = Yup.object({
  SingleLine: Yup.string().required("Please enter full name"),
  Email: Yup.string()
    .email("Please enter a valid email")
    .required("Please enter work email"),
  PhoneNumber_countrycode: Yup.string()
    .required("Please enter phone number")
    .min(10, "Please enter a valid mobile number")
    .max(13, "Please enter a valid mobile number"),
  SingleLine1: Yup.string().required("Please enter company name"),
  Dropdown5: Yup.string().notOneOf(
    ["-Select-"],
    "Please select merchant volume"
  ),
  Dropdown6: Yup.string().notOneOf(
    ["-Select-"],
    "Please select line of business"
  ),
})

export { ecommerceAffiliateInitialValue, ecommerceAffiliateValidation }
