const { createServer } = require("http");
const next = require("next");
const path = require("path");
const fs = require("fs");

const port = parseInt(process.env.PORT || "3000", 10);
const dev =
  process.env.NODE_ENV !== "production" &&
  process.env.NODE_ENV !== "test";

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {

    // Serve uploads folder publicly
    if (req.url.startsWith("/uploads/")) {
      const filePath = path.join(__dirname, req.url);

      fs.readFile(filePath, (err, content) => {
        if (err) {
          res.statusCode = 404;
          res.end("File not found");
          return;
        }

        res.end(content);
      });

      return;
    }

    handle(req, res);
  }).listen(port, (err) => {
    if (err) throw err;

    console.log(
      `> Server listening at http://localhost:${port} as ${
        dev ? "development" : process.env.NODE_ENV
      }`
    );
  });
});