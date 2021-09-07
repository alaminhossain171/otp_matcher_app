let showPin=document.getElementById('showPin');
let generateBtn=document.getElementById('generateBtn');
let inputPin=document.getElementById('inputPin');
let allBtn=document.getElementById('buttonNumber');
let submit=document.getElementById('submitBtn');

function randomValue(){
    let pin = Math.floor(1000 + Math.random() * 9000);
    return pin;
}
generateBtn.addEventListener('click',function(){
    let pin=randomValue();
    showPin.value=pin;
});



allBtn.addEventListener('click',inputValues);
function inputValues(e){
    const number=e.target.innerText;

    const calcInput = inputPin;
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
        if(number=='<'){
            if(calcInput.value==0){
                calcInput.value='';
            }
            else{
                let x=calcInput.value;
                calcInput.value=Number(x.toString().slice(0,-1));
            }
            
        }
    }
    
    else{
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
        return calcInput.value;
      
    }
}
;

function verifyPin() {
    const pin = showPin.value;
    const typedNumbers =inputPin.value;
    const successMessage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');
    if (pin == typedNumbers) {
        successMessage.style.display = 'block';
        failError.style.display = 'none';

    }
    else {
        successMessage.style.display = 'none';
        failError.style.display = 'block';
    }
    inputPin.value='';
}