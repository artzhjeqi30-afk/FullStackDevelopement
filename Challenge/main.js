var circle = document.getElementById("circle");
var square = document.getElementById("square");
var triangle = document.getElementById("triangle");
var rectangle = document.getElementById("rectangle");

circle.onclick = function() {
    circle.style.width = '100px';
    circle.style.height = '100px';
    circle.style.border = '2px solid black';
    circle.style.borderRadius = '50%';
    circle.style.backgroundColor = 'red';
}

circle.onmouseleave = function() {
    circle.style.transition = 'transform 2s ease';
    circle.style.transform = 'scale(0.2)';
}

square.onclick = function() {
    square.style.width = '100px';
    square.style.height = '100px';
    square.style.border = '2px solid black';
    square.style.backgroundColor = 'yellow';
}

square.onmouseleave = function() {
    square.style.transition = 'transform 2s ease';
    square.style.transform = 'scale(1.2)';
}

triangle.onclick = function() {
    triangle.style.width = '0';
    triangle.style.height = '0';
    triangle.style.border = '50px solid white';
    triangle.style.borderBottom = '100px solid green';
    
}   

triangle.onmouseleave = function() {
    triangle.style.transition = 'transform 2s ease';
    triangle.style.transform = 'scale(0.5)';
}

rectangle.onclick = function() {
    rectangle.style.height = '100px';
    rectangle.style.width = '200px';
    rectangle.style.border = '2px solid black';
    rectangle.style.backgroundColor = 'blue';
    
}

rectangle.onmouseleave = function() {
    rectangle.style.transition = 'transform 2s ease';
    rectangle.style.transform = 'scale(1.3)';
}