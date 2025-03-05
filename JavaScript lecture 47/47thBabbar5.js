// Here the lName is dependent on fName to return it's default value

function sayName(fName = " Sandeep ", lName = fName.toUpperCase())
{
    console.log("My name is : ",fName," ",lName);
}

sayName();