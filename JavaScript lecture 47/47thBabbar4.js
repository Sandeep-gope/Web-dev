function sayName(myName = " Sandeep "){
    console.log("My name is : ",myName);
}

// In case we don't provide name to the calling function
// It will return the default value, that is " Sandeep "
sayName();

// In case we provide value within the calling function
// It will return the value which is inside the calling function
sayName("Gope");