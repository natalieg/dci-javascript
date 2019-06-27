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

document.write("<hr>");

function square(number){
    let third = number/3;
    for(i = 0; i < number; i++ ){
        for(b = 0; b < number; b ++){
            if((i >= third && i < third*2) && (b >= third && b < third*2)){
                document.write(" <span style='color:lightcoral'> &#10045; </span> ");
            } else {
                document.write("<span style='color:darkcyan'>&#10057; </span>");
            }
        }
        document.write("<br>")
    }
}

square(15 );