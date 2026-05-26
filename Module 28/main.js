var button1 = document.getElementById('btn1')
var button2 = document.getElementById('btn2')
var button3 = document.getElementById('btn3')
var button4 = document.getElementById('btn4')
var titulli = document.getElementById('titulli')
var button5 = document.getElementById('btn5')
var title = document.getElementById('title')
var button6 = document.getElementById('btn6')
var title1 = document.getElementById('title1')

button1.onclick = function() {
    alert('Hello!')
}   

button2.onmouseleave = function() {
    alert('Hey u just left me :(')
}

button3.onmouseover = function() {
    alert('Why are you hovering me?')
}

button4.onmousewheel = function() {
    alert('Stop scrolling me!')
}

titulli.onmouseover = function() {
    alert('Hovering the text!')
}

button5.onclick = function() {
    title.style.color = 'red';
    title.style.backgroundColor = 'lightgrey';
    title.style.fontSize = '100px';
    title.style.textAlign = 'center';
    title.style.padding = '20px';
}

button6.onclick = function() {
    title1.setAttribute('class', 'test');
}