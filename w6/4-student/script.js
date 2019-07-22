class Person{
    constructor(name, lastName, birth, address){
        this.name = name;
        this.lastName = lastName;
        this.birth = new Date(birth);
        this.address = address;
    }
    greeting(){
        return  this.getBirthDate() + `Hello ${this.name} ${this.lastName}, How are you today?`;
    }
    getBirthDate(){
        let monthNow = new Date().getMonth();
        let dayNow = new Date().getDate();
        if(monthNow == this.birth.getMonth() && dayNow == this.birth.getDate()){
            return `It's the ${dayNow}.${monthNow + 1}! Happy Birthday ${this.name} &hearts;<br>`;
        }
    }
}

class Student extends Person{
    constructor(name, lastName, birth, address, id, university){
        super(name, lastName, birth, address);
        this.id = id;
        this.university = university;
    }
    getAge(){
        let yearNow = new Date().getFullYear();
        return yearNow - this.birth.getFullYear();
    }
    studentInfo(){
        return `
        ID: ${this.id} <br>
        Name: ${this.name} ${this.lastName} <br>
        Address: ${this.address} <br>
        Age: ${this.getAge()} <br>
        University: ${this.university}
        <hr>
        `;
    }
}

const p1 = new Person("Mary", "Joanna", "1984-7-18","Whatever");
document.write(p1.greeting());

document.write("<hr>")
const stud1 = new Student("Lara", "Mueller", "2002-5-5", "Am Hafen 123, 22112 Hamburg", 452214, "HAW");
document.write(stud1.studentInfo());

const stud2 = new Student("Tim", "Schmitt", "4.12.1985", "Seichter Deich 2, 22444 Hamburg", 452254, "TU");
document.write(stud2.studentInfo());
