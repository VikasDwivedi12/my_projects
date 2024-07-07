const inputField = document.getElementById("passwordInput");
const output = document.getElementById("strengthIndicator");

inputField.addEventListener('input', function(){
    let password = inputField.value;
    if(password.length == 0){
        output.textContent = "";
    }
    else if(password.length < 8){
        output.textContent = "Password is too short.";
        output.style.color = "red";
    }
    else{
        //checking for other cases.
        if(password.search(/[a-z]/) == -1){
            output.textContent = "Password is missing a lowercase letter.";
            output.style.color = "red";
        }
        else if(password.search(/[A-Z]/) == -1){
            output.textContent = "Password is missing an uppercase character.";
            output.style.color = "red";
        }
        else if(password.search(/[0-9]/) == -1){
            output.textContent = "Password is missing a number.";
            output.style.color = "red";
        }
        else if(password.search(/[!\@\#\$\%\^\&\*\(\)\_\+\{\}\:\"\<\>\?\|\[\]\\\;\'\,\.]/) == -1){
            output.textContent = "Password is missing a special character.";
            output.style.color = "red";
        }
        else{
            output.textContent = "Password is strong enough.";
            output.style.color = "green";
        }
    }
})