import * as Yup from "yup"

export type TBillPaymentInitialValueProp = {
  SingleLine: string
  SingleLine1: string
  Email: string
  PhoneNumber_countrycode: string
  MultipleChoice: string[]
  Website: string
  MultiLine: string
  Dropdown1: string
  Dropdown5: string
  SingleLine2: string // ✅ UTM Source
  SingleLine3: string // ✅ UTM Medium
  SingleLine4: string // ✅ UTM Campaign
  SingleLine5: string // ✅ Referring Page
  SingleLine6: string
}

const billPaymentInitialValue: TBillPaymentInitialValueProp = {
  SingleLine: "",
  SingleLine1: "",
  Email: "",
  PhoneNumber_countrycode: "",
  MultipleChoice: [],
  Website: "",
  MultiLine: "",
  Dropdown1: "Marketing",
  Dropdown5: "",
  SingleLine2: "Website Sales Lead",
  SingleLine3: "",
  SingleLine4: "",
  SingleLine5: "",
  SingleLine6: "PPC",
}

const billPaymentValidation = Yup.object({
  SingleLine: Yup.string().required("Please enter name"),
  SingleLine1: Yup.string().required("Please enter company name"),
  Email: Yup.string()
    .email("Please enter valid email")
    .required("Please enter email"),
  PhoneNumber_countrycode: Yup.string()
    .required("Please enter phone number")
    .max(13)
    .min(10, "Please enter valid mobile number"),
  MultipleChoice: Yup.array()
    .of(Yup.string())
    .min(1, "Please select at least one bill type")
    .required("Please select bill types"),
  Website: Yup.string(),
  MultiLine: Yup.string().max(500, "Text exceeds"),
})

export { billPaymentInitialValue, billPaymentValidation }
