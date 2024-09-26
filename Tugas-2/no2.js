const http = require("http");

// Membuat server HTTP
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, World!");
});

// Menjalankan server di port 3000
const port = 3000;
server.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
