const form = document.getElementById('form');
const number1 = document.getElementById('Input1');
const number2 = document.getElementById('Input2');
const reserved = document.getElementById('reserved');
const error = document.getElementById('error');


function number(number1, number2) {
    return number1 < number2
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    let validate1 = number(number1.valueAsNumber, number2.valueAsNumber)
    if(validate1) {
        reserved.style.display = 'block';
        number2.value=''
        number1.value=''
    }


})

number1.addEventListener('keyup', function(e){

    let validate1 = number(number1.valueAsNumber, number2.valueAsNumber)
    if(!validate1){
       error.style.display = 'block';
       reserved.style.display = 'none';

    } else {
        error.style.display = 'none';
    }
})


