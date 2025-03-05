// To understand the concept of "Async-await"
async function getdata(){
    let resource= await fetch(url);
    let data= await resource.json();
    console.log(data);
}

getdata();