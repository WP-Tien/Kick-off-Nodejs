function tinhtong(a,b) {
    return a + b;
}

var x = tinhtong( 5, 3);

console.log( x );


////////////////////////////////////////////
function hello() {
    console.log( 'Hello' );
}

function goiHam(fn) {
    fn();
}

goiHam(hello);

var tong = function() {
    console.log(' More function ');
}

tong();