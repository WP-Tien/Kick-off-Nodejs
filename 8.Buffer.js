// var buffer = new Buffer("Hello", "utf-8");  // node -v < 6
var buffer = Buffer.from("Hello");
console.log(buffer);

// buffer to string
console.log( buffer.toString() );
console.log( buffer.toJSON() );