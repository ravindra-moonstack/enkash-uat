import * as Yup from "yup"

export type TSupportInitialValueProp = {
  SingleLine: string
  SingleLine1: string
  Email: string
  PhoneNumber_countrycode: string
  MultipleChoice: string
  MultiLine: string
  Dropdown: string
  Dropdown1: string
  Dropdown2: string
  Dropdown3: string
  Dropdown4: string
}

const supportInitialValue: TSupportInitialValueProp = {
  SingleLine: "",
  SingleLine1: "",
  Email: "",
  PhoneNumber_countrycode: "",
  MultipleChoice: "",
  MultiLine: "",
  Dropdown: "Landing Page",
  Dropdown1: "Marketing",
  Dropdown2: "Website Sales Leads",
  Dropdown3: "-Select-",
  Dropdown4: "-Select-",
}

const supportValidation = Yup.object({
  SingleLine: Yup.string().required("Please enter name"),
  SingleLine1: Yup.string().required("Please enter company name"),
  PhoneNumber_countrycode: Yup.string()
    .required("Please enter phone number")
    .max(13)
    .min(10, "Please enter valid mobile number"),
  MultipleChoice: Yup.array().required("Please select category"),
  MultiLine: Yup.string().max(500, "Text exceeds"),
})

export { supportInitialValue, supportValidation }
