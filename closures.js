function x() {
    var a = 10;
    function y() {
        console.log(a);
    }    
    return y;
}

var z = x();
console.log(z);
z();


// Above function is same as --->

function x() {
    var a = 10;
    return function y() {
        console.log(a);
    }
}

var z = x();
console.log(z());

