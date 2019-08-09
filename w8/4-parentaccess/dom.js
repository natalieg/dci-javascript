//console.log(document.URL);
//console.log(document.title);
//document.title = "Welcome";
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//document.images[0].src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/581c9adb-00dc-4a00-85e7-30aa9e98b63a/dc06vpm-398ca393-0421-41a1-8ea0-ab9650ec6ead.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU4MWM5YWRiLTAwZGMtNGEwMC04NWU3LTMwYWE5ZTk4YjYzYVwvZGMwNnZwbS0zOThjYTM5My0wNDIxLTQxYTEtOGVhMC1hYjk2NTBlYzZlYWQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.L_q6YfL0ek93Qkmk7mcWzYaYEEFSL460sHuc8eZIbDU";
//document.links[0].href = "https://facebook.com";

let items = document.getElementsByClassName("list-group-item");
console.log(items);

for(i=0; i<items.length; i++){
    items[i].style.color = "green";
}

items[items.length - 1].textContent = "This is the last Item";

let item = document.querySelector(".list-group-item");
item.style.color = "blue";
let lastItem = document.querySelector(".list-group-item:last-child");
lastItem.style.backgroundColor = "black";
let secondItem = document.querySelector(".list-group-item:nth-child(2)");
secondItem.style.backgroundColor = "gold";

let odd = document.querySelectorAll("li:nth-child(odd)");
odd.forEach(element => {
   element.style.border = "3px solid blue"; 
});

let itemList = document.querySelector("#items");
itemList.parentNode.style.backgroundColor = "lightblue";

//console.log(item.remove());

console.log(itemList.parentElement);
console.log(itemList.children);

itemList.firstElementChild.textContent= "new Content";
itemList.children[2].nextElementSibling.textContent+= "next element sibling";

/////

let newDiv = document.createElement("div");
let textDiv = document.createTextNode("Hi I'm new text node for the div");
newDiv.appendChild(textDiv);
console.log(newDiv);
// insert the newDiv before the div : main

let mainDiv = document.querySelector("#main");

let container = document.querySelectorAll(".container")[1];

container.insertBefore(newDiv,mainDiv);

let newLi = document.createElement("li");
newLi.innerHTML = "Hi I'm new here";
newLi.classList.add("list-group-item");
let uList = document.getElementById("items");
uList.insertBefore(newLi, secondItem);

