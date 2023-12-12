let number1 = document.querySelector('#number1')
let number2 = document.querySelector('#number2')
let selectOperation = document.querySelector('#operation')
let resultBtn = document.querySelector('#btn');
let resultBtn8 = document.querySelector('#btn:hover');
let inputResult = document.querySelector('#result');

number1.style = `
border: 2px dotted red;
font-size: 22px;
color: red;
`
number2.style = `
border: 2px dotted green;
font-size: 22px;
color: red;
`
resultBtn.style = `
font-size: 25px;
background: none;
border: none;
color: red;
`
selectOperation.style = `
background: none;
border: none;
width: auto;
height: 48px;
font-size: 24px;
color: red;
`
inputResult.style = `
font-size: 26px;
color: red;
`
selectOperation.style.textAlign = ('center');
function getSum(num1, num2) {
    return num1 + num2;
}
function getDif(num1, num2) {
    return num1 - num2;
}
function getMul(num1, num2) {
    return num1 * num2;
}
function getDiv(num1, num2) {
    return num1 / num2;
}
function getSqrt(num1) {
    return num1**(1/2);
}
function getDeg(num1, num2) {
    return num1**num2;
}
function getDeg(num1, num2) {
    return num1**num2;
}
function getRem(num1, num2) {
    return num1%num2;
}
function getCos(num1) {
    return cos(num1)
}
resultBtn.addEventListener('click', function(){
    inputResult.style.border = `2px dotted gold`
    let num1 = Number(number1.value);
    let num2 = Number(number2.value);
    let operation = selectOperation.value;
    let toolbar = inputResult;
    console.log(num1)
    console.log(num2)
    console.log(operation)
    switch(operation) {
        case '+': inputResult.value = getSum(num1, num2);
            break
        case '-': inputResult.value = getDif(num1, num2);
            break;
        case '*': inputResult.value = getMul(num1, num2);
            break;
        case '/': inputResult.value = getDiv(num1, num2);
            break;
        case '√': inputResult.value = getSqrt(num1);
            break;
        case '^': inputResult.value = getDeg(num1, num2);
            break;
        case '%': inputResult.value = getRem(num1, num2);
            break;
            case 'cos': inputResult.value = getCos(num1);
            break;
    }
    switch(toolbar) {
        case '184884258895036400': toolbar.style = `
        color: red;
        `
            break;
    }
})

console.log(operation)
