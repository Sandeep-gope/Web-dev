// To undertand the concept of getter and setter in a class
// Not to use after class name as it is done in functions
// E.g: class Human() , it's wrong

class Human{
    age = 22;
    #wt = 55;
    ht = 5.5;

    // With the use of getter and setter we can use the private variable outside of the class
    // Use of getter
    get toAccess(){
        return this.#wt;
    }

    // Use of setter
    set toModify(val){
      this.#wt = val;  
    }
}