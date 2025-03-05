// Function to apply event listener (add & remove)

function changeText(){
    let fpara = document.getElementById('fpara');
    fpara.textContent = "Hello Sandeep"; 
}

let fpara = document.getElementById('fpara');
fpara.addEventListener('click', changeText);