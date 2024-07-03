const hiBtn = document.getElementsByTagName('button')[0];

hiBtn.addEventListener('click', function(){
    let userName = prompt("What is your name ?");
    document.getElementById('name').innerText = userName;
})