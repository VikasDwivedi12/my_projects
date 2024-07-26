function GenerateRandomColor(){
    //Returns the randomly generated color string.
    const hexCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd', 'e', 'f'];
    let colorString = '#';
    
    for(let i = 0; i < 6; i++){
        let randomIndex = Math.floor(Math.random() * hexCharacters.length);
        colorString += hexCharacters[randomIndex];
    }
    return colorString;
}

function setRandomColor(){
    //Sets the random color to the container element.
    randomColor = GenerateRandomColor();
    document.querySelector(".container").style.backgroundColor = randomColor;
}

let intervalId;
let randomColor;

document.querySelector("#start").addEventListener('click', function(){
    intervalId = setInterval(setRandomColor, 2000);
});

document.querySelector("#stop").addEventListener('click', function(){
    console.log(`color code : ${randomColor}`);
    clearInterval(intervalId);
    intervalId = null;
});