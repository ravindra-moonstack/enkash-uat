// import { NextResponse } from "next/server"
// import pool from "@/src/lib/dbConnect"
// import bcrypt from "bcrypt"
// import jwt from "jsonwebtoken"
// import crypto from "crypto"
// import { CheckPassword } from "wordpress-hash-node"

// export async function POST(request: Request) {
//   console.log("--- Login Attempt Started ---")
//   try {
//     const { email, password } = await request.json()

//     if (!email || !password) {
//       return NextResponse.json(
//         { success: false, message: "Required fields missing" },
//         { status: 400 }
//       )
//     }

//     const [rows]: any = await pool.execute(
//       "SELECT ID, user_email, user_pass FROM users WHERE user_email = ? LIMIT 1",
//       [email]
//     )

//     const user = rows[0]
//     if (!user) {
//       return NextResponse.json(
//         { success: false, message: "Invalid credentials" },
//         { status: 401 }
//       )
//     }

//     const storedHash = user.user_pass
//     let isMatch = false

//     // 1. WordPress 6.8+ Bcrypt ($wp$2y$ prefix)
//     if (storedHash.startsWith("$wp$2y$")) {
//       console.log("Debug: Detected WordPress 6.8+ Bcrypt format")

//       // WP 6.8 uses 'wp-sha384' as the default key if PASSWORD_PEPPER is not defined
//       const pepper = process.env.WP_PASSWORD_PEPPER || "wp-sha384"

//       // Create raw binary HMAC-SHA384 and then Base64 encode the result
//       const preHashedPassword = crypto
//         .createHmac("sha384", pepper)
//         .update(password.trim())
//         .digest("base64")

//       console.log(`Debug: Next.js Pre-hash: ${preHashedPassword}`)

//       // Standard bcrypt strips the '$wp' prefix to compare the actual hash string
//       const standardBcryptHash = storedHash.substring(3)

//       isMatch = await bcrypt.compare(preHashedPassword, standardBcryptHash)
//     }
//     // 2. Legacy phpass ($P$ prefix)
//     else if (storedHash.startsWith("$P$")) {
//       isMatch = CheckPassword(password, storedHash)
//     }
//     // 3. Fallback for vanilla bcrypt
//     else if (storedHash.startsWith("$2y$")) {
//       isMatch = await bcrypt.compare(password, storedHash)
//     }

//     if (!isMatch) {
//       console.warn("Debug: Bcrypt comparison result: false")
//       return NextResponse.json(
//         { success: false, message: "Invalid credentials" },
//         { status: 401 }
//       )
//     }

//     const token = jwt.sign(
//       { id: user.ID, email: user.user_email, role: "admin" },
//       process.env.JWT_SECRET as string,
//       { expiresIn: "1d" }
//     )

//     return NextResponse.json({
//       success: true,
//       message: "Login successful",
//       token,
//       user: { id: user.ID, email: user.user_email },
//     })
//   } catch (error) {
//     console.error("Debug: Login error:", error)
//     return NextResponse.json(
//       { success: false, message: "Internal server error" },
//       { status: 500 }
//     )
//   }
// }
// app/api/auth/login/route.ts (or wherever your Next.js POST handler lives)
// app/api/auth/login/route.ts
import { NextResponse } from "next/server"
import pool from "@/src/lib/dbConnect"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import crypto from "crypto"
import twinBcrypt from "twin-bcrypt"

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()
    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: "Email and password required" },
        { status: 400 }
      )
    }

    const [rows]: any = await pool.execute(
      "SELECT ID, user_email, user_pass FROM users WHERE user_email = ? LIMIT 1",
      [email]
    )
    const user = rows?.[0]
    if (!user)
      return NextResponse.json(
        { success: false, message: "Invalid email" },
        { status: 401 }
      )

    const storedHash: string = user.user_pass
    console.log("DEV: storedHash length:", storedHash.length)
    console.log("DEV: storedHash prefix:", storedHash.slice(0, 6))

    const pepper = process.env.WP_PASSWORD_PEPPER || "wp-sha384"
    const preHashed = crypto
      .createHmac("sha384", pepper)
      .update(String(password).trim())
      .digest("base64")
    console.log("DEV: preHashed length:", preHashed.length)

    let isMatch = false

    if (storedHash.startsWith("$wp$2y$")) {
      const bcryptPart = storedHash.substring(3)
      console.log("DEV: bcryptPart length:", bcryptPart.length)

      // try twin-bcrypt first
      try {
        isMatch = twinBcrypt.compareSync(preHashed, bcryptPart)
        console.log("DEV: twin-bcrypt result:", isMatch)
      } catch (e: any) {
        console.warn("DEV: twin-bcrypt failed:", e.message)
      }

      // fallback to node bcrypt with normalized prefix
      if (!isMatch) {
        const normalized = bcryptPart.replace(/^\$2y/, "$2a")
        isMatch = await bcrypt.compare(preHashed, normalized)
        console.log("DEV: node-bcrypt normalized result:", isMatch)
      }
    } else if (storedHash.startsWith("$2y$")) {
      const normalized = storedHash.replace(/^\$2y/, "$2a")
      isMatch = await bcrypt.compare(String(password), normalized)
    } else if (storedHash.startsWith("$P$")) {
      // if you need phpass handling, add wordpress-hash-node as before
      // isMatch = wpHasher.CheckPassword(String(password), storedHash);
    } else {
      return NextResponse.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 }
      )
    }

    if (!isMatch)
      return NextResponse.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 }
      )

    const token = jwt.sign(
      { id: user.ID, email: user.user_email },
      process.env.JWT_SECRET as string,
      { expiresIn: "1d" }
    )
    return NextResponse.json({
      success: true,
      token,
      user: { id: user.ID, email: user.user_email },
    })
  } catch (err) {
    console.error(err)
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    )
  }
}
