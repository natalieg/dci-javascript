var person = {
    firstName: "John",
    lastName: "Snow",
    age: 20,
    eyeColor: "brown", 
    house: "Stark, Targaryen"
};

function printPersonProps(object){
    let text = "There was a user with the name " + object.firstName + " " + object.lastName;
    document.write(text);
}

printPersonProps(person);

document.write("<hr>")


function iteratePerson(object){
    // Iterating over every property in the object
    for(prop in object){
        document.write(object[prop] + "<br>");
    }
}

iteratePerson(person);

document.write("<hr>")

function count(number){
    for(let i=0; i<number; i+=2){
        document.write(i + "<br>")
    }
}

count(12);