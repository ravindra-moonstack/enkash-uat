
import axios from "axios"

export async function POST(request: Request) {
  if (request.method !== "POST") {
    return Response.json({ error: "Method not allowed" })
  }

  const values = await request.json()

  const formData = new FormData()

  Object.entries(values.data).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      formData.append(key, value.join(", "))
    } else if (value !== undefined && value !== null) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-expect-error
      formData.append(key, value)
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error: any) {
    return Response.json({ error: "Zoho submission failed" })
  }
}
