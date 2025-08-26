import * as Yup from "yup"
export type TSalesInitialValueProp = {
  SingleLine: string
  SingleLine1: string
  Email: string
  PhoneNumber_countrycode: string
  MultipleChoice: string
}

const salesInitialValue: TSalesInitialValueProp = {
  SingleLine: "",
  SingleLine1: "",
  Email: "",
  PhoneNumber_countrycode: "",
  MultipleChoice: "",
}

const salesValidation = Yup.object({
  SingleLine: Yup.string().required("Please enter name"),
  SingleLine1: Yup.string().required("Please enter company name"),
  Email: Yup.string()
    .email("Please enter valid email")
    .required("Please enter email"),
  PhoneNumber_countrycode: Yup.string().required("Please enter phone number"),
  MultipleChoice: Yup.array().required("Please enter category"),
})

export { salesInitialValue, salesValidation }
