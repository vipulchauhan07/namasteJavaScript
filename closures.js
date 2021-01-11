// // Def: Closure in JavaScript is nothing but a function return with it's lexical environment.



// function x() {
//     var a = 10;
//     function y() {
//         console.log(a);
//     }
//     return y;
// }

// var z = x();
// console.log(z);
// z();


// // Above function is same as --->

// function x() {
//     var a = 10;
//     return function y() {
//         console.log(a);
//     }
// }

// var z = x();
// console.log(z());



function z() {
    var b = 20;
    function x() {
        var a = 10;
        function y() {
            console.log(a);
        }
        y();
        console.log(b);
    }
    x();
}

z();