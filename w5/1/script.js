let hr = "<hr>"
let br = "<br>"
let colors = ["red", "blue", "green"];
let colors1 = ["orange", "lightblue", "pink", "yellow"];
let allColors = colors.concat(colors1); // concat adds an array to the former array

function writePart(text){
    document.write(hr +"<b> " + text + " </b>" + br)
}

document.write(allColors);

document.write("<hr>")

document.write(allColors.slice(1,3)); // slice gives back part of an array depending on the start and end number


document.write(hr)

document.write(allColors.slice(1,7));

document.write(hr + "Item on Index 2: " + allColors[2] + br);
document.write("<b>Delete items with splice</b>" + br);
allColors.splice(2, 1); // delete 1 item at the 2 index splice(index, how many)
document.write(allColors);

document.write(hr + "<b>Add Items with splice</b>" + br)
allColors.splice(2, 0, "Lemon", "Kiwi");
document.write(allColors);

writePart("More splicing");
let cars = ["bmw", "ford", "fiat"];
cars.splice(0, 2, "mercedes", "audi", "tesla"); // delete 2 items at index 0 and add 3 items at index 0
document.write(cars);

writePart("Finding Value in an Array with .find(function)");
let numbers = [2, 4, 7, 8, 12, 33, 42];

function checkNumber(num){
    return num > 12;
}

document.write(numbers.find(checkNumber)); // .find uses a function, given an array 

writePart("find a string")

function checkFruit(fruit){
    return fruit == "apple";
}

let fruits = ["banana", "mango", "apple", "kiwi"];
document.write(fruits.find(checkFruit));

////////////////////////////////////////////////////

writePart("Person Array with Objects")
let person = [
    {name: "Anna", work: "Doctor"},
    {name: "Julia", work: "Advocat"},
    {name: "David", work: "Developer"},
    {name: "Eric", work: "Stylist"}
];

function isWebDeveloper(p){
    return p.work == "Developer"
}

document.write(person.find(isWebDeveloper).name);
document.write("<br> The index of the developer: ")
document.write(person.findIndex(isWebDeveloper) + br);

console.log(person.filter(isWebDeveloper)); // idk about this this seems strange whatever, maybe because it finds this as an array and things start go go wild

/////////////////////////////////////////////////////////
writePart("Age array");

let age = [ 14, 16, 18, 19, 22, 13, 66, 32, 25, 31, 75];

function canDrive(a){
    return (a > 17 && a < 71); 
}
document.write(age.filter(canDrive)); // filter will give an array of elements, find gives you one element
let drivers = age.filter(canDrive);
document.write(br + "Sortiert: " + drivers.sort()); // sorts the array into an ascending order

////////////////////////////////////////////////////////////////
writePart("Reduce; Sum from objects in array")
let cities = [
    {name: "Hamburg", population: 500},
    {name: "Berlin", population: 4},
    {name: "Stuttgart", population: 1},
];

// easier function
function sumOfPopulation(sum, num){
    return sum + num.population;
}
// more complicated function that does basically the same 
function sumObject(sum, num){
    return {population: sum.population + num.population};
}


document.write(cities.reduce(sumOfPopulation,0)); // adding 0 as starting of sum
document.write(br);
document.write(cities.reduce(sumObject).population); // function "sumObjects" works on Objects of an array

//////////////////////////////////////////////////////////
writePart("more number stuff, array.reduce");

let numbers2 = [2, 8, 10, 20];

function sumNumbers(total, num){
    return total + num;
}

let newArray = numbers2.reduce(sumNumbers);
document.write(newArray);

/////////////////////////////////////////////
writePart("Names in Array // Printed in console");

let names = ["Alice", "Bob", "John", "Alice", "Carl", "Bob"];

function countNames(allNames, name){
    if(name in allNames){ //If the name is repeated
        allNames[name]++
    } else {
        allNames[name]=1;
    }
    return allNames;
}

let counted = names.reduce(countNames,{});
console.log("Counted Names:");
console.log(counted);

///////////////////////////////
writePart("Map");

let arr = [2, 4, 8, 10];

 function multiply(number){
     return number * 2;
 }

 document.write(arr.map(multiply) + br);


let multi = function(number){
    return number * 3;
}

document.write(arr.map(multi) + br);

let multi4 = (number) => {
    return number * 4;
}

document.write(arr.map(multi4) + br );

let multi5 = number =>  number * 5;
document.write(arr.map(multi5));

