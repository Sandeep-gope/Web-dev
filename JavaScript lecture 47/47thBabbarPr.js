// To add function within the function

function age()
{
    let age=22;
    return age;    
}

function upwala(name="sandeep", Getage=age())
{
    console.log(name,Getage);
}

upwala();