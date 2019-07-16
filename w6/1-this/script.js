console.log(this);

let person = {
    firstName: "Natalie",
    lastname: "Gornicki",
    fullName: function(){
        return this.firstName + " " + this.lastname;
    }
}

console.log(person.firstName);
console.log(person.fullName());

let car = {
    name: "BMW",
    maxSpeed: "250",
    color: "blue"
}

car.year =  2019;
car.info = function(){
    return "Name: " + this.name + " Color: " + this.color;
}

console.log(car.info());

let merBenz = {
    name: "Mercedes",
    color: "Black"
}

let test123 = {
    age: "24",
    firstname: "Anna"
}

console.log(car.info.call(merBenz));
console.log(car.info.call(test123));