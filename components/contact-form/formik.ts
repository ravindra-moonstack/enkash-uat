import * as Yup from "yup"

export type TContactInitialValueProp = {
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

const contactInitialValue: TContactInitialValueProp = {
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
