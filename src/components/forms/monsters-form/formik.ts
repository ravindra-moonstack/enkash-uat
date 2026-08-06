import * as Yup from "yup"

export type TMonstersFormInitialValueProp = {
  SingleLine: string
  Email: string
  SingleLine1: string
  PhoneNumber_countrycode: string
  Website: string
  SingleLine7: string
  Dropdown6: string
  MultiLine: string
  Dropdown1: string
  SingleLine2: string // UTM Source
  SingleLine3: string // UTM Medium
  SingleLine4: string // UTM Campaign
  SingleLine5: string // Referring Page
  SingleLine6: string // Form
}

const monstersFormInitialValue: TMonstersFormInitialValueProp = {
  SingleLine: "",
  Email: "",
  SingleLine1: "",
  PhoneNumber_countrycode: "",
  Website: "",
  SingleLine7: "",
  Dropdown6: "",
  MultiLine: "",
  Dropdown1: "Marketing",
  SingleLine2: "Website Sales Lead",
  SingleLine3: "",
  SingleLine4: "",
  SingleLine5: "",
  SingleLine6: "PPC: Payment Gateway",
}

const monstersFormValidation = Yup.object({
  SingleLine: Yup.string().required("Please enter name"),
  SingleLine1: Yup.string().required("Please enter company name"),
  Email: Yup.string()
    .email("Please enter a valid email")
    .required("Please enter email"),
  PhoneNumber_countrycode: Yup.string()
    .required("Please enter phone number")
    .min(10, "Please enter a valid mobile number")
    .max(13, "Please enter a valid mobile number"),
  Dropdown6: Yup.string().required("Please select type of business"),
  Website: Yup.string().url("Please enter a valid URL").notRequired(),
  SingleLine7: Yup.string().notRequired(),
  MultiLine: Yup.string().max(500, "Text exceeds").notRequired(),
})

export { monstersFormInitialValue, monstersFormValidation }
