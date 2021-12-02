var http = require('http');

var nStatic = require('node-static');

var fileServer = new nStatic.Server('../', { cache: 3600 });

http.createServer(function (req, res) {
    
    fileServer.serve(req, res);

}).listen(3000);
