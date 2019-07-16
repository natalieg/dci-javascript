
function start() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log(i);
}

start();

//////////////////////////////

function start2() {
    for (let i = 0; i < 5; i++) {
        if (true) {
            // var is needed for the variable to be referenced
            // outside of this statement
            var color = "blue";
        }
    }
    console.log(color);
}

start2();

////////////////////////////////////

var myColor = "red"; //is visible through console window.myColor
let age = 30; //is not visible

const myName = "Natalie"; // constant, this Value never changes

console.log(myName);

//////////////////////////////////////

const car = {
    name: "Mercedes",
    color: "black",
    model: "amg",
    year: 2019,
    carInfo: function(){
        return  this.name + " " + this.year + " " + this.model;
    }
}

car.name = "BMW";
console.log(car.name);
console.log(car.year);
console.log(car.carInfo());