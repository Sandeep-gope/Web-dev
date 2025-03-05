// Global scope of variable
var age = 22;

// Within the loop
for(let i = 0; i<2; i++)
{
    console.log(age);
}

// Within the function
function Name()
{
    return age;
}
let ans = Name();
console.log(ans);


// Variable scope within a function, cannot be used outside of the function
function getHigh()
{
    var name = 'sandeep';
    console.log("Good luck",name);
}

getHigh();


// Variable scope within a block, var variable can be accessed outside of the block as well
{
    let ans = 'Sandeep';
    console.log(ans);
}

