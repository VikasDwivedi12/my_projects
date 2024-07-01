const buttons = document.querySelectorAll('.btn');
const body = document.querySelector('body');
const instHead = document.getElementsByTagName('h2')[0];

buttons.forEach(function(button){
    button.addEventListener('click', function(){
        body.style.backgroundColor = button.id;
        if(body.style.backgroundColor == 'white' || body.style.backgroundColor == 'yellow'){
            instHead.style.color = "black";
        }
        else{
            instHead.style.color = "whitesmoke"
        }
    })
});