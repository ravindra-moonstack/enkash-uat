import express from "express"
import next from "next"
import path from "path"

const port = parseInt(process.env.PORT || "3000", 10)
const dev = process.env.NODE_ENV !== "production"

const app = next({ dev })
const handle = app.getRequestHandler()

const uploadsDir = path.resolve(process.cwd(), "./uploads")

app.prepare().then(() => {
  const server = express()

  server.use("/uploads", express.static(uploadsDir))

  // Next.js handles everything else
  server.use((req, res) => handle(req, res))

  server.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`)
    console.log(`Serving uploads from ${uploadsDir}`)
  })
})
