//creating an object
let myObject = {
    name: "John",
    age: 24,
    cit: "Hamburg"
}

let myJson = JSON.stringify(myObject);
console.log(myJson);

let jsonContent = {"name" : "John", "age": 34, "city":"Hamburg", "isMarried": true};

console.log(jsonContent.name);

for(let i in jsonContent){
    console.log(jsonContent[i]);
}

let objStudent = {students: [
    {name: "Mansour", age: 10, town: "Berlin"}, 
    {name: "Romal", age: 15, town: "Hamburg"}, 
    {name: "Peter", age: 20, town: "Paris"}
]}

console.log(objStudent.students[1].name);
console.table(objStudent.students);

let newPerson = {
    "name": "John",
    "age": 30,
    "cars": ["ford", 'audi', "bmw"]
};

for (let i in newPerson.cars){
    console.log(newPerson.cars[i]);
}