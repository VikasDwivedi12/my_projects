const counterDisplayElement = document.getElementById("counter-display");
let counterValue = parseInt(counterDisplayElement.innerText);

const addButton = document.getElementById("counter-add");
const subButton = document.getElementById("counter-sub");

const MIN = 0;
const MAX = 20;

function changeBackground(value, maxValue){
    document.body.style.setProperty('background-color', `rgb(${(value/maxValue) * 255}, 64, 0)`);
}

addButton.addEventListener('click', function(){
    if(counterValue < MAX){
        counterValue++;
        counterDisplayElement.textContent = counterValue;
        changeBackground(counterValue, MAX);
    }
    else{
        alert("Count cannot exceed MAX: 20.");
    }
})

subButton.addEventListener('click', function(){
    if(counterValue > MIN){
        counterValue--;
        counterDisplayElement.textContent = counterValue;
        changeBackground(counterValue, MAX);
    }
    else{
        alert("Count cannot go beyond 0.");
    }
})

