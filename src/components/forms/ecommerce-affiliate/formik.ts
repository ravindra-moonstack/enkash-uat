import * as Yup from "yup"

export type TEcommerceAffiliateInitialValueProp = {
  SingleLine: string // Full Name
  Email: string // Work Email
  PhoneNumber_countrycode: string // Phone Number
  SingleLine1: string // Company Name
  SingleLine2: string // UTM Source
  SingleLine3: string // UTM Medium
  SingleLine4: string // UTM Campaign
  SingleLine5: string // Referring Page
  SingleLine6: string // Department/Form Name
  MultipleChoice: string[] // Industry/Category
  MultipleChoice1: string[] // Sub-category
}

const ecommerceAffiliateInitialValue: TEcommerceAffiliateInitialValueProp = {
  SingleLine: "",
  Email: "",
  PhoneNumber_countrycode: "",
  SingleLine1: "",
  SingleLine2: "Website Sales Leads",
  SingleLine3: "",
  SingleLine4: "",
  SingleLine5: "",
  SingleLine6: "Ecommerce and Retail Partnerships",
  MultipleChoice: [],
  MultipleChoice1: [],
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
})

export { ecommerceAffiliateInitialValue, ecommerceAffiliateValidation }
