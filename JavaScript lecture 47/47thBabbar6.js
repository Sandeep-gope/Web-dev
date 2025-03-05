// Possibility of adding objects and arrays as the default values 
function solve(value = {age:22,wt:55})
{
    console.log("Hello Jii", value);
}

solve();

// Addition of arrays to the as the default values to the function
function solve(value = ["Sandeep","Anshu","Sahil","Amit"])
{
    console.log("Hello Jii", value);
}

solve();

// Setting function as default value to the parameter
function getAge(){
    return 22;
}

// Function to set the above function as default value
function solve(name = "Sandeep", age = getAge())
{
    console.log(name," ",age);
}

solve();