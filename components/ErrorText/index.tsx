import React from "react"
import { FormikErrors, FormikTouched } from "formik"

type TErrorTextProp<T> = {
  errors: FormikErrors<T>
  touched: FormikTouched<T>
  field: keyof T
}

const ErrorText = <T,>({
  errors,
  touched,
  field,
}: TErrorTextProp<T>): React.JSX.Element => {
  if (!errors[field] || !touched[field]) {
    return <></>
  }

  const errorMessage = errors[field]
  if (typeof errorMessage !== "string") return <></>

  return <p style={{ color: "red", fontSize: 12 }}>{errorMessage}</p>
}

export default ErrorText
