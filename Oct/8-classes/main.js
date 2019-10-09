var currentYear = 2019;
var displayDiv = document.getElementById("personDiv");

class Person {
    constructor(name, job, year){
        this.name = name;
        this.job = job;
        this.year = year;
    }
    calculateAge = () => {
        return this.age = currentYear - this.year;
    }
    displayPerson = () => {
        displayDiv.innerHTML += 
        `<p>
        <span class="detail name">Name: ${this.name} </span>
        <span class="detail job">Job: ${this.job} </span>
        <span class="detail age">Age: ${this.calculateAge()} </span></p>`
    }
}

let person1 = new Person("Tim", "Whatever", 1990);
person1.displayPerson();
console.log(person1);
console.log(person1.calculateAge())

export default Person;