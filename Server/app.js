var express = require("express");
var app = express();

var server = require("http").createServer(app);
server.listen(3000);

app.get("/", function(req, res) {
    // res.send("<font color=red> Hello World </font>");
    res.sendFile( __dirname + "/index.html" );
})

app.get("/gioithieu", function(req, res) {
    res.send('I\'m a ROUTE');
})

app.get("/tinhtong/:so1/:so2", function(req, res) { // tham so bat dau dau :
    var so1 = req.params.so1 // req la` thong tin khach hang` gui len
    var so2 = req.params.so2 
    var sum =  parseInt( so1 ) + parseInt ( so2 );
    res.send( " <h1> Result </h1> " + sum );
})