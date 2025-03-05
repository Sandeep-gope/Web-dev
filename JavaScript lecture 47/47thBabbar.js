// Understanding classes and objects
// In case we want the private variable to be declared and accessed outside the class, that won't be possible
// To create private variable, we use the # button
// E.g: #age,etc

class Human{
    //Properties
    age = 22; //public 
    #wt = 55; //private
    ht = 5.5;

    //Behaviour
    walking(){
        // To take access of the variables within the class, we use this keyword
        console.log("I'm walking", this.#wt);
    }

    running(){
        console.log("i'm running");
    }
}

let obj = new Human();
obj.walking();