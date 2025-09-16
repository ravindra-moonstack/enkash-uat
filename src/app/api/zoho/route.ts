import axios from "axios"

export async function POST(request: Request) {
  if (request.method !== "POST") {
    return Response.json({ error: "Method not allowed" })
  }

  const values = await request.json()

  const formData = new FormData()

  Object.entries(values.data).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((item) => {
        if (item !== undefined && item !== null) {
          formData.append(key, String(item)) // Make sure item is stringified
        }
      })
    } else if (value !== undefined && value !== null) {
      formData.append(key, String(value))
    }
  })

  try {
    const response = await axios.post(values.url || "", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Accept-Charset": "UTF-8",
      },
    })

    return Response.json(response.data)
  } catch (error) {
    return Response.json(
      { message: "Zoho submission failed", error: JSON.stringify(error) },
      { status: 400 }
    )
  }
}
