var button = document.getElementById("button");
var number1 = document.getElementById("num1");
var number2 = document.getElementById("num2");
var calculateButton = document.getElementById("calculate");
var result = document.getElementById("result");
var result2 = document.getElementById("result2");


function calculateSum() {
    var num1 = parseFloat(number1.value);
    var num2 = parseFloat(number2.value);
    var sum = num1 + num2;
    result.textContent = "Shuma e numrave eshte: " + sum;
}

function isEligible() {
    var num1 = parseFloat(number1.value);
    var num2 = parseFloat(number2.value);
    if(num1+num2>20) {
        result2.textContent = "Ju keni te drejte te aplikoni";
    } else {
        result2.textContent = "Ju nuk keni te drejte te aplikoni";
    }
}


calculateButton.onclick = function() {
    calculateSum();
    isEligible();
}

button.onclick = function() {
    button.style.backgroundColor = "red";
    button.style.color = "white";

    alert("no datas are available");
}



function shuma (numri1, numri2) {
    return numri1 + numri2;
}


console.log(shuma(10, 20));


function zbritja (numri1, numri2) {
    return numri1 - numri2;
}

console.log(zbritja(30, 20));


function shumezimi (numri1, numri2) {
    return numri1 * numri2;
}

console.log(shumezimi(10, 20));


function pjestimi (numri1, numri2) {
    return numri1 / numri2;
}

console.log(pjestimi(25, 5));
