import * as Yup from "yup"

export type TBankAffiliateInitialValueProp = {
  SingleLine: string
  SingleLine1: string
  Email: string
  PhoneNumber_countrycode: string
  MultipleChoice: string // keep as string if single select, or string[] if multi-select
  Website: string
  MultiLine: string
  Dropdown1: string
  SingleLine2: string // ✅ UTM Source
  SingleLine3: string // ✅ UTM Medium
  SingleLine4: string // ✅ UTM Campaign
  SingleLine5: string // ✅ Referring Page
  SingleLine6: string
}

const bankAffiliateInitialValue: TBankAffiliateInitialValueProp = {
  SingleLine: "",
  SingleLine1: "",
  Email: "",
  PhoneNumber_countrycode: "",
  MultipleChoice: "", // default empty string
  Website: "",
  MultiLine: "",
  Dropdown1: "Marketing",
  SingleLine2: "Website Sales Leads", // ✅ UTM Source default
  SingleLine3: "", // ✅ UTM Medium
  SingleLine4: "", // ✅ UTM Campaign
  SingleLine5: "", // ✅ Referring Page
  SingleLine6: "Bank and Affiliate Partnerships",
}

const bankAffiliateValidation = Yup.object({
  SingleLine: Yup.string().required("Please enter name"),
  SingleLine1: Yup.string().required("Please enter company name"),
  Email: Yup.string()
    .email("Please enter a valid email")
    .required("Please enter email"),
  PhoneNumber_countrycode: Yup.string()
    .required("Please enter phone number")
    .min(10, "Please enter a valid mobile number")
    .max(13, "Please enter a valid mobile number"),
  MultipleChoice: Yup.string().required("Please select category"), // match type with initial value
  Website: Yup.string().url("Please enter a valid URL").notRequired(),
  MultiLine: Yup.string().max(500, "Text exceeds").notRequired(),
})

export { bankAffiliateInitialValue, bankAffiliateValidation }
