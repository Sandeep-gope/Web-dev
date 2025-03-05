// In case of synchronous code

let firstPromise = new Promise( (resolve, reject) => {
    console.log("Babbar");
    // resolve(1001);
    reject(new Error("Internal Server Error"));
} );

// in case of asynchronous code

let secondPromise = new Promise( (resolve, reject) => {

    setTimeout(function sayMyName() {
        console.log("Sandeep Gope");

        // Returning of "Sandeep Gope after 10 sec"
    } , 10000);

    resolve(1);
});