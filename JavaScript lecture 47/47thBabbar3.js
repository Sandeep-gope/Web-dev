// Use of constructor to assign values 
class Human{
    age;
    #wt = 55;
    ht;

    // By using constructor ,we can assign values to the variables
    constructor(newAge,newHeight){
        this.age = newAge;
        this.ht = newHeight;
    }
}

let obj = new Human(22,5.5);
console.log(obj.age);
console.log(obj.ht);