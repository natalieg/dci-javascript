var br = "<br>";
var hr = "<hr>";

function greetUser(text) {
    //do things
    document.write(text + "<br>");
}

greetUser("How are you today?");

function greetUserFullname(name, surname) {
    if (typeof (name) != "undefined" && typeof (surname) != "undefined") {
        return ("Good Morning " + name + " " + surname);
    } else {
        return ("Please enter a valid name :)");
    }
}

document.write(hr);

function square(number) {
    document.write("The square of " + number + " is: " + number * number + br);
}

square(8);
square(16);

// anonymos function
var sum = function (number) {
    return (number + 10);
}

var helloUser = function (name) {
    return ("Hi " + name);
}

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
    if(weekday == "error"){
        return("Please enter a valid number.")
    } else {
        return("It's " + weekday);
    }
}