var http = require('http');
var fs = require('fs')

http.createServer((req, res)=>{
    res.writeHead(200, {'content-type':'text/html'});
    fs.createReadStream(__dirname+'/index.html').pipe(res)
}).listen(2000,'127.0.0.1')