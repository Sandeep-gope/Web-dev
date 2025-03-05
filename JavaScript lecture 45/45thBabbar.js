
// Use of function hoisting, not possible for function expression
FullName('Sandeep');

function FullName(finalName){
    console.log(finalName);
}

// Use of variable hoisting, only possible with var keyword
console.log(age);
var age = 22;