const http = require("http");

http
  .createServer((req, res) => {
    res.write("Haloo");
    res.end();
  })
  .listen(8080, () => {
    console.log("Server running at http://localhost:8080");
  });
