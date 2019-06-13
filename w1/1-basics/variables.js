let firstName = "Natalie";
let lastName = "Gornicki";

// alert(firstName);
console.log(firstName + " " + lastName);
console.log("The type is " + typeof(firstName));

document.getElementById("first").append(firstName + " " + lastName);

let x = 10;
// writes result directly into the document
document.write(x/3);
document.write("<br>");
document.write(x%3);

document.write("<div style='height: 120px; padding: 10px'> <h1> Hello </h1> </div>")

let y = x + " String Text";
document.write(y);

var linebreak = "<br>"
x = 5;
document.write(linebreak);
document.write(x);
var result = --x;
document.write(linebreak);
document.write(result);

let age = 12;
let minAge = 18;

document.write(linebreak + "age >= minAge is: " + (age >= minAge));
if(age >= minAge){
    document.write(linebreak + "You are " + minAge + " or older");
} else {
    document.write(linebreak + "You are too young");
}

if(age < minAge ){
    document.write(linebreak + "You are " + age + " you need to be " + (minAge - age) + " years older" );
}

age = 15;
minAge = 18;
document.write(linebreak + 'age < minAge = ' + (age<minAge));
document.write(linebreak + 'age: ' + age + ' minAge: ' + minAge);

document.write(linebreak);
document.write("18" == 18);
document.write(linebreak);
document.write("18" === 18);

document.write(linebreak);
x = 6;
y = 6;
document.write( "x is " + x + " y is " + y + "<b> x!=y </b>" + (x != y));

