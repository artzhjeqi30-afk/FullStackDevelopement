var nota = 4.5;

if (nota >= 4.5) {
    console.log("Ke kalu shkelqyshem");
} else{
    console.log("Ke kalu shume mire");
}

var input = document.getElementById("input_id");
var button = document.getElementById("button_id");
var text = document.getElementById("text_id");

button.onclick = function() {
    text.innerHTML = input.value;
}

var age = document.getElementById("mosha");
var buttoni_m = document.getElementById("button_mosha");
var text_m = document.getElementById("text");

buttoni_m.onclick = function() {
    if (age.value >= 19) {
        text_m.innerHTML = "You can vote";
    } else if(age.value == 18) {
        text_m.innerHTML = "You can vote, congrats on your first time";
    } else {
        text_m.innerHTML = "You cannot vote";
    }   
}


var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var button_add = document.getElementById("add");
var button_subtract = document.getElementById("subtract");
var button_multiply = document.getElementById("multiply");
var button_divide = document.getElementById("divide");
var result = document.getElementById("result");

button_add.onclick = function() {
    result.innerHTML = parseFloat(num1.value) + parseFloat(num2.value);
}
button_subtract.onclick = function() {
    result.innerHTML = parseFloat(num1.value) - parseFloat(num2.value);
}
button_multiply.onclick = function() {
    result.innerHTML = parseFloat(num1.value) * parseFloat(num2.value);
}
button_divide.onclick = function() {
    result.innerHTML = parseFloat(num1.value) / parseFloat(num2.value);
}


