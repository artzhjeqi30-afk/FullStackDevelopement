// for (i = 0; i < 10; i++) {
//     console.log(i);
// }

// var names = ['Art', 'Fron' , 'Ajan', 'Orges'];
// var x;

// for (x of names) {
//     console.log(x);
// }

// console.log(names)

var emrat = [];

var x = document.getElementById("input-field");
var submit= document.getElementById("submit_btn");
var show = document.getElementById("button_id");


emrat.push("Art");
emrat.push("Ajan");
emrat.push("Fron");
emrat.push("Orges");

submit.onclick = function(){
    emrat.push(x.value);
    x.value = "";
    console.log(emrat);

}

show.onclick = function() {
    console.log(emrat);
}
