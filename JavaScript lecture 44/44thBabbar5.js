// Use of reduce method
let arr = [20,30,10,40];
let ans = arr.reduce((acc,curr) => {
    return acc+curr;
}, 0)

console.log(ans);