const qrInput = document.getElementById('qr-input');
const qrButton = document.getElementById('qr-button');
const qrImage = document.getElementById('qr-img');

qrButton.addEventListener('click', function(){
    const inputValue = qrInput.value;
    if(!inputValue){
        alert("Please enter a valid url.");
    }
    else{
        let qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
        qrImage.src = qrUrl;
        qrImage.alt = inputValue;
    }
})