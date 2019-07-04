var http = require('http');
const server =http.createServer((req,res) =>{
 console.log(req.url,req.method,req.headers)
 res.setHeader('Content-type',"text/html");
//  res.write('<html><head><title>welcome</title></head><body><h1>hello</h1></body></html>');
//  res.write('<html>');
//  res.write('<head><title>welcome</title></head>');
//  res.write('<body><h1>hello</h1></body>');
//  res.write('</html>');
res.write('')
});
 server.listen(3002);
