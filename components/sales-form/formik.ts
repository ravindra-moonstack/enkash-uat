import * as Yup from "yup"

export type TSalesInitialValueProp = {
  SingleLine: string
  SingleLine1: string
  Email: string
  PhoneNumber_countrycode: string
  MultipleChoice: string
  Website: string
  MultiLine: string
}

const salesInitialValue: TSalesInitialValueProp = {
  SingleLine: "",
  SingleLine1: "",
  Email: "",
  PhoneNumber_countrycode: "",
  MultipleChoice: "",
  Website: "",
  MultiLine: "",
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
