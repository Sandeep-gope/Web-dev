// For splice, map, filter and reduce

// For splice
let arr = ['Sandeep',3,true,'soil'];
// arr.splice(0,1,'Sand');
arr.splice(1,1,"Sand");
console.log(arr);

// For map
let grr = [2,4,6,8];
let ans=grr.map((value)=>
{
    return value*2;
})
console.log(ans);

// For filter
let drr = ["hdhdh",4,8,"gydv","grt"];
let bns = drr.filter((number)=>
{
    if(typeof(number)=='string')
    {
        return true;
    }
    else{
        return false;
    }
})
console.log(bns);