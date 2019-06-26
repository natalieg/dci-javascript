let car = {
    brand: "BMW", color: "white", year: "2019"
};

let person = { firstName: "John", lastName: "Smith", age: "33" }

document.write(car.brand + "<br>");

person.age = 22;
person.age += 1;
document.write("Person Age: " + person.age);

person.city = "Hamburg";
console.log(person);
// If you want to declare something with space you need to write it in brackets []
person["fav Color"] = "yellow";
console.log(person);

/// create object 

let language = {};  // or let language = new Object();
language.name = "English";

let driver = {
    age: 60,
    firstName: "John",
    nationality: "English",
    car: { brand: "ford", color: "black", year: "2012" }
};

driver.pet = ["Dog", "Cat", "Bird"];
console.log(driver);
console.log(driver.car.year);
console.log(driver.car.color);
console.log(driver.pet[1]);

// we create array of objects
let posts = [
    { name: "Peter", post: "I was here!" },
    { name: "Maria", post: "I think this website is very nice" },
]

console.log(posts);
posts[1].post = "I don't like this site anymore"
posts[2] = { name: "Natalie", post: "I don't know what I'm doing" };

posts[0].post = ["Nice thank you!", "10/10 would buy again!"];
// Add something to excisting string
posts[0].post[0] += " Happy to make business with you!"
console.log(posts);
console.log(posts[0].post[0]);



// Student Objects
let students = [
    { firstName: "Natalie", lastName: "Gornicki", id: 2546, fullName: function () { return this.firstName + " " + this.lastName } },
    { firstName: "Peter", lastName: "Uduevborho", id: 1254, fullName: function () { return this.firstName + " " + this.lastName } },
    { firstName: "Farhan", lastName: "Idk", id: 3344, fullName: function () { return this.firstName + " " + this.lastName } },
]

console.log(students[0].fullName());
console.log(students[1].fullName());

let person1 = {
    firstName: "John",
    lastName: "Smith",
    job: "engineer",
    age: "42",
    country: "France"
}

document.write("<br>")
document.write(person1.firstName + " " + person1.lastName + " is a " + person1.age + " year old " + person1.job + " living in " + person1.country);

let movies = [
    {cinema: "Dersa Kino", title: "Lord of the Rigngs",  watched: true, rating: "4"},
    {cinema: "Savoy", title: "Harry Potter",  watched: true, rating: "5"},
    {cinema: "Amazon", title: "Good Omen",  watched: false, rating: ""},
    {cinema: "UCI", title: "Twilight",  watched: true, rating: "2"},
    {cinema: "UCI", title: "Avatar",  watched: true, rating: "5"},
    {cinema: "@Home", title: "How to train your Dragon 3",  watched: false, rating: ""},
    {cinema: "@Home", title: "Avengers Endgame",  watched: false, rating: ""},
    {cinema: "Dersa Kino", title: "Big Fish",  watched: true, rating: "4"},
    {cinema: "Dersa Kino", title: "Chicago",  watched: true, rating: "4"},
    {cinema: "Netflix", title: "The Breakfast Club",  watched: true, rating: "2"},
    {cinema: "UCI", title: "Avatar, Legend of Aang",  watched: true, rating: "1"},
    {cinema: "@Home", title: "Pitch Perfect",  watched: true, rating: "4"},
]

document.write("<br>");
document.write("<hr>");

let toWatchList = [];

document.write("<div class=watched>")
document.write("<h3>Watched Movie List:</h3>")
movies.forEach(element => {
    var stars = " "
    for(i = 0; i < element.rating; i++){
        stars += "&#9733;"
    }
    if(element.watched){
        document.write("Movie Title:<b> " + element.title + "</b> watched in: " + element.cinema + " Rating: " + stars 
        + "<br>");
    } else {
        toWatchList.push(element);
    }
});
document.write("</div>")

document.write("<br>");
document.write("<hr>");

document.write("<div class=unwatched>")
document.write("<h3>To Watch List:</h3>")
toWatchList.forEach(element => {
    document.write("Movie Title: " + element.title + "<br>");
});
document.write("</div>")