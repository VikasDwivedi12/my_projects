const bmiForm = document.getElementsByTagName('form')[0];
const result = document.getElementById('result');

function getBmi(height, weight){
    let heightM = height/100;
    let bmi = weight/(heightM * heightM);
    return bmi;
}

bmiForm.addEventListener('click', function(event){
    event.preventDefault();
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;
    result.textContent = '';

    if(height === ''){
        console.error('Height cannot be NULL.');
        document.getElementById('height-error').textContent = 'Height cannot be empty.';
        return;
    }
    else{
        document.getElementById('height-error').textContent = '';
    }
    if(weight === ''){
        console.error('Weight cannot be NULL.');
        document.getElementById('weight-error').textContent = 'Weight cannot be empty.';
        return;
    }
    else{
        document.getElementById('weight-error').textContent = '';
    }

    let myBmi = getBmi(parseFloat(height), parseFloat(weight));
    result.textContent = `Your BMI is : ${myBmi.toFixed(2)}`;

    //conditional statements for backgrounf colors
    if(myBmi < 18.6){
        result.style.color = 'red';
    }
    else if(myBmi >= 18.6 && myBmi <= 24.9){
        result.style.color = 'green';
    }
    else{
        result.style.color = 'red';
    }
})