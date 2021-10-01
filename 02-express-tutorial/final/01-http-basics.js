const http = require('http');
const { readFileSync } = require('fs');

//get all files
const homePage = readFileSync('./index.html'); //should create a index.html file to show in the browser

const server = http.createServer((req, res) => {
  // console.log(req.method) GET
  const url = req.url; // console.log(req.url) /contact /about ...
  // home page
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' }); // providing headers, metadata 'text/plain' will show like this <h1>home page</h1>
    res.write(homePage);
    res.end();
  }
  // about page
  else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>about page</h1>');
    res.end();
  }
  // 404
  else {
    res.writeHead(404, { 'content-type': 'text/html' });
    res.write('<h1>page not found</h1>');
    res.end();
  }
});

server.listen(5000);

//port is the communication endpoint
