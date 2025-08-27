import * as Yup from "yup"

export type TContactInitialValueProp = {
  SingleLine: string
  SingleLine1: string
  Email: string
  PhoneNumber_countrycode: string
  MultipleChoice: string
  MultiLine: string
}

const contactInitialValue: TContactInitialValueProp = {
  SingleLine: "",
  SingleLine1: "",
  Email: "",
  PhoneNumber_countrycode: "",
  MultipleChoice: "",
  MultiLine: "",
}

const contactValidation = Yup.object({
  SingleLine: Yup.string().required("Please enter name"),
  SingleLine1: Yup.string().required("Please enter company name"),
  Email: Yup.string()
    .email("Please enter valid email")
    .required("Please enter email"),
  PhoneNumber_countrycode: Yup.string().required("Please enter phone number"),
  MultipleChoice: Yup.array().required("Please select category"),
  MultiLine: Yup.string(),
})

export { contactInitialValue, contactValidation }
