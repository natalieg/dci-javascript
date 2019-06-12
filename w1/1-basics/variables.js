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