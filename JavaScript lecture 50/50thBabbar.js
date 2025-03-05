// Understanding try and catch block

// 'try' block is the block where we write our code where we expect error to arrive
try{
    console.log("Code before the error");
    // Compile time error
    console.log(x);
    console.log("Code after the error, which won't be executed");
}

catch(e){
    // 'catch' block is the block where we modify our errer which is caught by the 'try' block
    console.log("Sandeep");
}

// Use of finally block
// In this case it executes whether there is error or not, it does not matter
finally{
    console.log("I will execute whether there is a error or not , I do not care");
}

// Error throw
let errorCode = 100;
if(errorCode == 100){
    throw new Error("Error hai bhai");
}