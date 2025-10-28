import * as Yup from "yup"

export type TSalesInitialValueProp = {
  SingleLine: string
  SingleLine1: string
  Email: string
  PhoneNumber_countrycode: string
  MultipleChoice: string
  Website: string
  MultiLine: string
  Dropdown1: string
  Dropdown3: string
  Dropdown4: string
  Dropdown5: string
  SingleLine2: string // ✅ UTM Source
  SingleLine3: string // ✅ UTM Medium
  SingleLine4: string // ✅ UTM Campaign
  SingleLine5: string // ✅ Referring Page
  SingleLine6: string
}

const salesInitialValue: TSalesInitialValueProp = {
  SingleLine: "",
  SingleLine1: "",
  Email: "",
  PhoneNumber_countrycode: "",
  MultipleChoice: "",
  Website: "",
  MultiLine: "",
  Dropdown1: "Marketing",
  Dropdown3: "First Choice",
  Dropdown4: "First Choice",
  Dropdown5: "",
  SingleLine2: "Website Sales Leads", // ✅ UTM Source default
  SingleLine3: "", // ✅ UTM Medium
  SingleLine4: "", // ✅ UTM Campaign
  SingleLine5: "", // ✅ Referring Page
  SingleLine6: "Talk to Sales",
}

const salesValidation = Yup.object({
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
})
export { salesInitialValue, salesValidation }
