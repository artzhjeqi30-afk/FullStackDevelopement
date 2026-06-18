// function printname() {
//     document.write("John")
//     document.write('<br>')
//     setTimeout(function() {document.write(Doe)}, 3000);
//     document.write('Smith')

// }

// printname()

function printName(){
    var text = document.getElementById("text");
    text.innerHTML += "Smith<br>"
setTimeout(function() {
    text.innerHTML += "Doe<br>"
}, 3000);
    text.innerHTML += "Smith<br>"
}


printName();



var colors=['red','green','blue','yellow','purple']

function changeBgColor() {
    document.querySelector('body').style.background = color[Math.floor(Math.random()* colors.length)]
}
setInterval(changeBgColor,  2000) 