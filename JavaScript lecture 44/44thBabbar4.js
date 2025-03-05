//Use of splice method: remove, insert and replace 
let arr = ['Sandeep', true, 6,"Ayush"];
arr.splice(1,2,"A","B");
console.log(arr);

// Use of map method
let brr = [2,4,6];
brr.map((number) => {
    let ans = number*number;
    console.log(ans);
})

//Use of filter method to filter the cotents of the array according the condition given
let crr = [23,40,10,34,27,75,80,56];
let Purecrr = crr.filter((number) => {
    if(number%2 == 0)
    {
        return true;
    }
    else{
        return false;
    }
})

console.log(Purecrr);

let drr = [2,'Sandy', 5, 'Bishnu', 'Ayush', 8];
let strWaale = drr.filter((value) => {
    if(typeof(value) == 'string'){
        return false;
    }
    else{
        return true;
    }
})

console.log(strWaale);