import Person from './main.js'

class DciStudent extends Person {
    constructor(name, job, year){
        super(name, job, year);
    }
}

let person2 = new DciStudent("Lisa", "Agent", 1982);
person2.displayPerson();
console.log(person2, person2.calculateAge());

let person3 = new DciStudent("Natalie", "Siren", 1986);
person3.displayPerson();