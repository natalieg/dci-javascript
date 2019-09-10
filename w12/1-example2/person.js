export default class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

function printName(person){
    console.log(`The Name is ${person.name}`);
}

function printAge(person){
    console.log(`The Age is ${person.age}`);
}

export {printName, printAge};