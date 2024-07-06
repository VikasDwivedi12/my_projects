const newColourBtn = document.getElementById('new-colour-button');
const currentColourElement = document.getElementById('current-colour');
const body = document.getElementsByTagName('body')[0];

const hexvalues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

function getRandomHexValue(){
    const randomIndexPosition = Math.floor(Math.random() * hexvalues.length);
    const randomHexNumber = hexvalues[randomIndexPosition];
    return randomHexNumber;
}

function getColourCode(){
    let colourCode = '#';
    let indexHexValue;
    for(let i = 0; i < 6; i++){
        indexHexValue = getRandomHexValue();
        colourCode = colourCode + indexHexValue.toString();
    }
    return colourCode;
}

newColourBtn.addEventListener('click', function(){
    const newColourCode = getColourCode();
    currentColourElement.innerText = newColourCode;
    body.style.backgroundColor = newColourCode;
});

