import express from "express"
import next from "next"
import path from "path"

const port = parseInt(process.env.PORT || "3000", 10)
if (!process.env.NODE_ENV) {
  ;(process.env as any).NODE_ENV = "development"
}
console.log("DEBUG: NODE_ENV is:", process.env.NODE_ENV)
const dev = process.env.NODE_ENV === "development"

const app = next({ dev })
const handle = app.getRequestHandler()

import { UPLOADS_DIR } from "./src/lib/upload-config"

app.prepare().then(() => {
  const server = express()
  server.disable("x-powered-by")

  server.use("/uploads", express.static(UPLOADS_DIR))
  
  // Health check endpoint for Playwright webServer
  server.get("/health", (req, res) => res.status(200).send("OK"))

  // Next.js handles everything else
  server.use((req, res) => handle(req, res))

  server.listen(port, () => {
    console.log(
      `Server listening on ${process.env.NODE_ENV} ||  http://localhost:${port}`
    )
    console.log(`Serving uploads from ${UPLOADS_DIR}`)
  })
})
