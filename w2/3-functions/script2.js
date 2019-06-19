var dayNumber = function (num) {
    var weekday;
    switch (num) {
        case 1:
            weekday = "Monday"
            break;
        case 2:
            weekday = "Tuesday"
            break;
        case 3:
            weekday = "Wednesday"
            break;
        case 4:
            weekday = "Thursday"
            break;
        case 5:
            weekday = "Friday"
            break;
        case 6:
            weekday = "Saturday"
            break;
        case 7:
            weekday = "Sunday"
            break;
        default:
            weekday = "error";
    }
    if (weekday == "error") {
        return ("Please enter a valid number.")
    } else {
        return ("It's " + weekday);
    }
}

document.write("<h3>For Loop</h3>")
for (i = 1; i <= 7; i++) {
    document.write(i + ". " + dayNumber(i) + "<br>");
}

document.write("<h3>While Loop</h3>")
var a = 1;
while (a <= 7) {
    document.write(a + ". " + dayNumber(a) + "<br>");
    a++;
}

document.write("<hr>");

// "key": "value"
let car = { name: "BMW", year: "2018", color: "black" }


let cars = [
    { name: "BMW", year: "2018", color: "black" },
    { name: "Audi", year: "2015", color: "silver" },
    { name: "Mercedes", year: "2018", color: "white" },
]

for (i = 0; i < cars.length; i++) {
    let c = cars[i];
    document.write("<b>Car" + (i + 1) + "</b> Name: " + c.name + " Year: " + c.year + " Color: " + c.color + "<br>");
}

let cars2 = [
    { name: "BMW", country: "Germany" },
    { name: "Ford", country: "USA" },
    { name: "Fiat", country: "Italy" },
    { name: "Mercedes", country: "Germany" },
]

function findCarCountry(name) {
    let country = "We couldn't find what you looked for.";
    for (i = 0; i < cars2.length; i++) {
        if (name == cars2[i].name) {
            country = cars2[i].country;
        }
    }
    return country;
}

let cars3 = ["bmw", "ford", "ferrari", "mercedes"];
function findMyCar(car) {
    car = car.toLowerCase();
    let message = "Your car is not found";
    for (i = 0; i < cars3.length; i++) {
        if (cars3[i] == car) {
            message = "Your car is found.";
            break;
        } 
    }
    return message;
}