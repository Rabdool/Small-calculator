/* const sign = document.getElementById('c');

sign.forEach(sign => {
    sign.addEventListener("click", () => {
        if (button.class == 'w') {

        }
    });
}); */

document.getElementById('w').onclick('click', add);
document.getElementById('x').addEventlistener('click', subtract);
document.getElementById('y').addEventlistener('click', multiply);
document.getElementById('z').addEventlistener('click', divide);
document.getElementById('d').onclick('click', equals);

function add() {
    var num1 = parseFloat(document.getElementById('one').value);
    var num2 = parseFloat(document.getElementById('two').value);
    var result = num1 + num2;

    document.getElementById('result').innerHTML = result;
}
function subtract() {
    var num1 = parseFloat(document.getElementById('one').value);
    var num2 = parseFloat(document.getElementById('two').value);
    var result = num1 - num2;

    document.getElementById('result').innerHTML = result;
}
function multiply() {
    var num1 = parseFloat(document.getElementById('one').value);
    var num2 = parseFloat(document.getElementById('two').value);
    var result = num1 * num2;

    document.getElementById('result').innerHTML = result;
}
function divide() {
    var num1 = parseFloat(document.getElementById('one').value);
    var num2 = parseFloat(document.getElementById('two').value);
    var result = num1 / num2;

    document.getElementById('result').innerHTML = result;
}
function equals() {
    var result =(document.getElementById('one').value +
        document.getElementById('w').value +
        document.getElementById('two').value);

    document.getElementById('result').innerHTML = result;
}