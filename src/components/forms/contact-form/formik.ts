import * as Yup from "yup"

export type TContactInitialValueProp = {
  SingleLine: string
  SingleLine1: string
  Email: string
  PhoneNumber_countrycode: string
  MultipleChoice: string
  MultiLine: string
  Dropdown1: string
  SingleLine2: string // ✅ UTM Source
  SingleLine3: string // ✅ UTM Medium
  SingleLine4: string // ✅ UTM Campaign
  SingleLine5: string // ✅ Referring Page
  SingleLine6: string
}

const contactInitialValue: TContactInitialValueProp = {
  SingleLine: "",
  SingleLine1: "",
  Email: "",
  PhoneNumber_countrycode: "",
  MultipleChoice: "",
  MultiLine: "",
  Dropdown1: "Marketing",
  SingleLine2: "Website Salessss Leads", // ✅ UTM Source default
  SingleLine3: "", // ✅ UTM Medium
  SingleLine4: "", // ✅ UTM Campaign
  SingleLine5: "", // ✅ Referring Page
  SingleLine6: "Talk to Sales",
}

const contactValidation = Yup.object({
  SingleLine: Yup.string().required("Please enter name"),
  SingleLine1: Yup.string().required("Please enter company name"),
  Email: Yup.string()
    .email("Please enter valid email")
    .required("Please enter email"),
  PhoneNumber_countrycode: Yup.string().required("Please enter phone number"),
  MultipleChoice: Yup.array().required("Please select category"),
  MultiLine: Yup.string().max(500, "Text exceeds"),
})

export { contactInitialValue, contactValidation }
