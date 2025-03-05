// Object cloning using spread operator

let obj = {
    age:22,
    wt:55,
    ht:5.5
}

let destination = {...obj};

console.log(destination);

// Using assign keyword

let src = {
    age:22,
    wt:55,
    ht:5.5
}

let dest = Object.assign({}, src);
console.log(dest);

// In case we want to clon two or three objects

let src2 = {
    age:22,
    wt:55,
    ht:5.5
}

let src3 = {
    name:"Sandeep",
    regNo: 125
}

let dest1 = Object.assign({}, src2, src3);
console.log(dest1);