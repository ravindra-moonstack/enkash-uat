import * as Yup from "yup"

export type TMealCardCampaignInitialValueProp = {
  SingleLine: string
  Email: string
  SingleLine1: string
  PhoneNumber_countrycode: string
  MultipleChoice: string[]
  MultiLine: string
  Dropdown1: string
  SingleLine2: string
  SingleLine3: string
  SingleLine4: string
  SingleLine5: string
  SingleLine6: string
}

const mealCardCampaignInitialValue: TMealCardCampaignInitialValueProp = {
  SingleLine: "",
  Email: "",
  SingleLine1: "",
  PhoneNumber_countrycode: "",
  MultipleChoice: [],
  MultiLine: "",
  Dropdown1: "Marketing",
  SingleLine2: "Website Sales Leads",
  SingleLine3: "",
  SingleLine4: "",
  SingleLine5: "",
  SingleLine6: "Ad ",
}

const mealCardCampaignValidation = Yup.object({
  SingleLine: Yup.string().required("Please enter name"),
  Email: Yup.string()
    .email("Please enter valid email")
    .required("Please enter business email ID"),
  SingleLine1: Yup.string().required("Please enter company name"),
  PhoneNumber_countrycode: Yup.string()
    .required("Please enter phone number")
    .max(13)
    .min(10, "Please enter valid mobile number"),
  MultipleChoice: Yup.array()
    .of(Yup.string())
    .min(1, "Please select number of employees")
    .required("Please select number of employees"),
  MultiLine: Yup.string().max(500, "Text exceeds limit"),
})

export { mealCardCampaignInitialValue, mealCardCampaignValidation }
