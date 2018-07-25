var http = require('http');
var fs = require('fs')

http.createServer((req, res)=>{
    res.writeHead(200, {'content-type':'application/json'});
    var obj={
        firstname:'john',
        lastname:'Doe'
    };
    res.end(JSON.stringify(obj))
}).listen(2000,'127.0.0.1')