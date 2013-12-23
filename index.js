var http = require('http');

http.createServer(function(req, res){
  res.end('This works');
}).listen(process.env.PORT || 3000);
