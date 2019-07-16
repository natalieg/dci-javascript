let person = {
    firstName: "",
    lastName: "",
    age: "",
    hairColor: "",
    personInfo: function(){
        return "Name: " + this.firstName + " " + this.lastName +
        " Age: " + this.age + " Haircolor: " + this.hairColor;
    }
};

function newPerson(firstName, lastName, age, hairColor){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.hairColor = hairColor;
    this.personInfo = function(){
        return "Name: " + this.firstName + " " + this.lastName +
        " Age: " + this.age + " Haircolor: " + this.hairColor;
    }
}

let person2 = new newPerson("Natalie", "Gornicki", 33, "brown");
console.log(person2.personInfo());

function newEmployee(employee, name, salary, job){
    this.employee = employee;
    this.name = name;
    this.salary = salary;
    this.job = job;
    this.info = function(){
        return "Employee: " + employee + " Name: " + name 
        + " Salary: " + salary + " Job: " + job;
    };
}



let employee1 = new newEmployee("E123", "Jeff", 2400, "Director");
console.log(employee1.info());

function isBigger3(number){
    return number > 3 ? "Numer is bigger than 3" : "Number is smaller"; 
}

function isBigger3IfElse(number){
    if(number > 3){
        return "Numer is bigger than 3";
    } else {
        return "Number is smaller";
    }
}

console.log(isBigger3(2));
console.log(isBigger3(4));

function mashArray(arr){
    return arr.join("-");
}

let newArray = ["banana", 'apple', "whatever"];
console.log(newArray);
console.log(mashArray(newArray));

/////////////////////////////////////////////////////

// Object 
let student = {
    name: "Maria",
    language: "EN",
    get lang(){
        return this.language;
    },
    set lang(value){
        this.language = value;
    }
}

student.lang = "French";
console.log(student.language);
console.log(student.lang);

// Constructor
function Student(name, language, money, changeRate){
    this.name = name;
    this.language = language;
    this.bankAccount = money;
    this.get = function(){
        return this.name;
    };
    this.set = function(val){
        this.name = val;
    };
    this.changeMoney = function (){
        return this.bankAccount * changeRate;
    };
    this.studentInfo = function(){
        return "Name: " + this.name + " Bankaccount: " + this.changeMoney() + "$";
    }
}


let student1 = new Student("Nena", "Ita", "2000", "0.8");
let student2 = new Student("Mila", "JPN", "6200", "1.5");
student1.set("Lena"); // using setter to set a new name
console.log(student1.name + " " + student1.language);

console.log(student1.studentInfo());
console.log(student2.studentInfo());

/////////////////////////////////////////////////

class Student2{
    constructor(name, language, money, changeRate){
        this.name = name;
        this.language = language;
        this.bankAccount = money;
        this.changeMoney = function (){
            return this.bankAccount * changeRate;
        };
        this.studentInfo = function(){
            return "Name: " + this.name + " Bankaccount: " + this.changeMoney() + "$";
        };
}}

///////////////

function addUp(num) {
	let sum = 0;
	for(i = 1; i<num + 1; i++){
        sum += i;
        console.log("i is: " + i);
        console.log("Sum is: " + sum);
    }
	return sum;
}

console.log(addUp(4));