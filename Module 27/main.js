function showmessage(){

     alert('This is my first function')
 }

 function sum(number1, number2){
     return number1 + number2
 }

console.log(sum(32, 42))

function toCelcius(Fahrenheit){
    return (5/9) * (Fahrenheit - 32) 
}

 var result = toCelcius(54)
 console.log("Fahrenheit in celcius is  "+result+" degrees")


function calculator(nr1, nr2) {
    return {
        sum: nr1 + nr2,
        multiply: nr1 * nr2,
        subtract: nr1 - nr2,
        divide: nr1 / nr2
    };
}

console.log(calculator(77, 11)); 

