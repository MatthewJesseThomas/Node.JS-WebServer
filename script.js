// Handle HTTP Request
// const http = require('http');

// const server = http.createServer(function(req, res){ //Creates Web Server
//     if(req.url == '/') { //Checks the URL of the current request
//         //Set Response Header
//         res.writeHead(200, { 'Content-Type': 'text/html'});

//         //Set Response Content
//         res.write('<html><body><h1>This Is The Home Page.</h1></body></html>');
//         res.end();
//     } else if(req.url == "/student"){
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write('<html><body><h1>This Is The Student Page.</h1></body></html>');
//         res.end();
//     } else if(req.url == "/admin"){
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write('<html><body><h1>This Is The Admin Page.</h1></body></html>');
//         res.end();
//     } else res.end('Invalid Request! DUH!!!!');

// });

// server.listen(1234);
// console.log('Node.js web server at Port 1234 is running');