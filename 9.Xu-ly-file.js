var fs = require("fs"); // module này co san dung` de doc file trên server, cung~ nhu upload lên server thang node

var noidung = fs.readFileSync( __dirname + "/list.txt" );

console.log( noidung );

console.log( noidung.toString() );

console.log( noidung.toJSON() );