async function getdata(){
    setTimeout(function(){
        console.log("I'm async code")
    },2000);
}

getdata();