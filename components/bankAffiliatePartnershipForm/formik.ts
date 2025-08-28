import * as Yup from "yup"

export type TBankAffiliateInitialValueProp = {
  SingleLine: string
  SingleLine1: string
  Email: string
  PhoneNumber_countrycode: string
  MultipleChoice: string
  Website: string
  MultiLine: string
  Dropdown: string
  Dropdown1: string
  Dropdown2: string
  Dropdown3: string
  Dropdown4: string
}

const bankAffiliateInitialValue: TBankAffiliateInitialValueProp = {
  SingleLine: "",
  SingleLine1: "",
  Email: "",
  PhoneNumber_countrycode: "",
  MultipleChoice: "",
  Website: "",
  MultiLine: "",
  Dropdown: "Landing Page",
  Dropdown1: "Marketing",
  Dropdown2: "Website Sales Leads",
  Dropdown3: "-Select-",
  Dropdown4: "-Select-",
}

const bankAffiliateValidation = Yup.object({
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

export { bankAffiliateInitialValue, bankAffiliateValidation }
