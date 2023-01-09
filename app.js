const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  console.log("req", req.url, req.method, req.headers);
  //   process.exit();
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    // res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Enter the Message</title></head>");
    res.write(
      '<body><Form action="/message" method="POST"><input type="text" name="message"><button type ="submit">submit</button></Form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  // res.setHeader("Content-Type", "text/html");
  if (url === "/method" && method === "POST") {
    fs.writeFileSync("message.txt", "DUMMY");
    res.statusCode = 302;
    fs.setHeader("Location", "/");
    return res.end();
  }
  res.write("<html>");
  res.write("<head><title>shubham joshi</title></head>");
  res.write("<body><h1>Hello from shubham</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
