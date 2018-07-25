var http = require('http');
var fs = require('fs')

http.createServer((req, res)=>{
    res.writeHead(200, {'content-type':'text/html'});
    //readFileSync is giving the buffer
    // var html= fs.readFileSync(__dirname+'/index.html')
    // res.end(html);
    var html= fs.readFileSync(__dirname+'/index.html', 'utf8')
    var message ='Hello world...'
    html = html.replace('{Message}', message);
    res.end(html);
}).listen(2000,'127.0.0.1')