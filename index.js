const http = require("http");
const fs = require("fs");
const url = require("url");

const PORT = process.env.PORT || 3000;

// Create server
const server = http.createServer((req, res) => {
  const normalizedURL = new url.URL(req.url, `http://${req.headers.host}`);
  const fileName = normalizedURL.pathname.slice(1) || "index.html";

  fs.readFile(`./public/${fileName}`, (err, data) => {
    if (!err) {
      res.end(data);
    }

    res.statusCode = 404;
    res.end();
  });
});

// Enables the server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
