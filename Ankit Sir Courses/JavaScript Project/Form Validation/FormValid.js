const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const Cpassword = document.getElementById("confirm-password");
const submit = document.getElementById("btn");

form.addEventListener('submit', (o)=>{
    o.preventDefault();

    const validateInputs = ()=>{

        const usernameValue = username.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();
        const CPasswordValue = Cpassword.value.trim();

        if(usernameValue === ''){
            setError(username,"Username is required");
        }
        else{
            setSuccess(username);
        }
    }
    const setError = (element,message)=>{
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.getElementsByClass("error");
        errorDisplay.innerText = message;
    }

})