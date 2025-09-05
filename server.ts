import { createServer } from "http"
import { parse } from "url"
import next from "next"

const port = parseInt(process.env.PORT || "3000", 10)
const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url!, true)

    // ✅ Rewrite /resource to external blog
    if (parsedUrl.pathname?.startsWith("/resource")) {
      res.writeHead(301, {
        Location: "https://blogs.enkash.com/blogs",
      })
      res.end()
      return
    }

    handle(req, res, parsedUrl)
  }).listen(port)

  console.log(
    `> Server listening at http://localhost:${port} as ${
      dev ? "development" : process.env.NODE_ENV
    }`
  )
})
