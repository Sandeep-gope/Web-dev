// Use of 'then' and 'catch' for the case of 'fulfilled' and 'rejected'
let promise1=new Promise((resolve,reject)=>{
    let success=true;
    if(success){
        resolve("Promise fulfilled");
    }
    else{
        reject("Promise rejected");
    }
});

// "then" for promise fulfilled
// We can add several "then" statements(chaining)
promise1.then((message)=>{
    console.log("Then ka message is " + message);
})
// "catch" for promise rejected
.catch((error)=>{
    console.log("Error hai " + error);
});
