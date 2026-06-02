var iphones = ["iPhone 12", "iPhone 12 Pro", "iPhone 12 Pro Max", "iPhone 13", "iPhone 13 Pro", "iPhone 13 Pro Max"];

console.log(iphones);
console.log(iphones[3]);

var average_age = [10, 20, 30, 40, 50];
console.log(average_age);
console.log(average_age[2]);

// array functions

iphones.push("iPhone 14");
console.log(iphones);

iphones.pop();
console.log(iphones);

iphones.unshift("iPhone 17");
console.log(iphones);

iphones.shift();
console.log(iphones);

iphones.splice(0,2, 'arti')
console.log(iphones);   

console.log(Math.random() * 10)
console.log(Math.floor(Math.random() * 10))


// destrukturimi i arrays

var grades = [90, 80, 70, 60, 50, 40 , 30, 20, 10 , 0];
var [g1,g2,g3,g4,g5] = grades;
var [first,second,third,...others] = grades;

console.log(g1);
console.log(first);
console.log(third);
console.log(others);