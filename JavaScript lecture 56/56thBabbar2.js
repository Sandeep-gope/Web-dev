// To understand the concept of "Promise.all"
let promise1 = new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,"First");
})

let promise2 = new Promise((resolve,reject)=>{
    setTimeout(resolve,3000,"Second");
})

let promise3 = new Promise((resolve,reject)=>{
    setTimeout(reject,4000,"Third");
})

Promise.all([promise2,promise1,promise3])
.then((value)=>{
    console.log(value);
})
.catch((error)=>{
    console.error("Error" + error);
})