import { NextResponse } from "next/server"
import { transporter } from "@/src/lib/nodemailer"

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    const mailOptions = {
      from: process.env.SMTP_FROM_EMAIL,
      to: process.env.SMTP_USER, // Send to yourself/admin
      subject: "New Newsletter Subscription",
      text: `A new user has subscribed to the newsletter: ${email}`,
      html: `<p>A new user has subscribed to the newsletter:</p><strong>${email}</strong>`,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ message: "Subscription successful" })
  } catch (error: any) {
    console.error("SMTP Error:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
