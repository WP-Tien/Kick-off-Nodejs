var http = require("http");

http.createServer( function(req, res) {
    res.writeHead( 200, {"Content-Type":"text/plain"} )
    res.end("KhoaPham.vn");
}).listen(8888);

// localhost:8888 sẽ xuất hiện khoapham.vn