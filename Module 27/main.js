// function showmessage(){

//      alert('This is my first function')
//  }

//  function sum(number1, number2){
//      return number1 + number2
//  }

// console.log(sum(32, 42))

// function toCelcius(Fahrenheit){
//     return (5/9) * (Fahrenheit - 32) 
// }

//  var result = toCelcius(54)
//  console.log("Fahrenheit in celcius is  "+result+" degrees")


function digitalschool(){
    var shkolla = 'DigitalSchool'
    alert(shkolla)
} 

digitalschool();

function siperfaqja_e_trekendeshit(baza , lartesia){
    return baza * lartesia * 0.5;
}

console.log('Siperfaqja e trekendeshit eshte: ' + siperfaqja_e_trekendeshit(5, 7));

var audia = {
    type : 'A6',
    color : 'White',
    viti_i_prodhimit : 2016,
    kilometra : 150.000,
    karburanti : 'Benzina',
    engine:function(){
        alert('Vrommm')
    },
    get getkilometra(){
        return this.kilometra;
    },
    set setkilometra(km){
        this.km= km;
    }
}

audia.engine();
console.log(audia.getkilometra)
audia.setkilometra = 200000;
console.log(audia.getkilometra)

var grupi_7 = {
    niveli : 'Web advanced',
    ora : '19:30',
    nr_nx : 14
}

alert(grupi_7.nr_nx)

var personi = {
    emri : 'Arti',
    mosha : 17,
    vendi : 'Podujeve',
    gjatesia : 1.94,
    hobbi:function(){
        alert('Futboll')
    }
}

personi.hobbi();
console.log('Emri im eshte ' + personi.emri + ', une jam ' + personi.mosha + ' vjeq, jam nga ' + personi.vendi + ' dhe gjatesia ime eshte ' + personi.gjatesia + ' metra.')