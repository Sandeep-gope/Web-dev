let input = document.getElementById("input");
let button = document.querySelectorAll("button");

button.forEach(element=>{
    element.addEventListener("click",(e)=>{
        console.log(e.target.textContent)

        if(e.target.textContent==="C"){
            input.textContent="";
        }

        else if(e.target.textContent==="&"){
            input.innertext = input.innerText.slice(0,-1);
        }

        // else if(e.textContent==="="){

        // }

        else{
            input.innerText += e.target.textContent;
        }

        input.scrollLeft = input.scrollWidth;
    })
})