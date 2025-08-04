import http from "http";
const PORT = 4000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");

  if (req.url === "/" && req.method === "GET") {
    res.statusCode = 200;
    res.end("Server is running without Express!");
  } else {
    res.statusCode = 404;
    res.end("Route not found");
  }
});

server.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
