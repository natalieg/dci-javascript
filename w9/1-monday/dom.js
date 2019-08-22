let header = document.querySelector("#main-header");
header.style.borderBottom = "solid 7px #ccc";
console.log(header);
let input = document.querySelectorAll("input")[1];
input.placeholder = "welcome in DCI";
let btn = document.querySelector('input[type="submit"]');
btn.style.background = "lightblue";


//create a div 
let newDiv = document.createElement("div");
// add class

let container = document.querySelectorAll(".container")[1];
console.log(container);

let mainDiv = document.querySelector("#main");


let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", btnClick);

function btnClick(e) {
    document.getElementById("header-title").textContent = "changed";
    console.log(e);
    console.log(e.target.classList);
    document.getElementById("output").innerHTML = "<h3>" + e.target.className + "</h3>";
    console.log(e.type);
}

let messageDivAdd = document.getElementById("messageDivAdd");

let form = document.getElementById("formItems"); //alternative --let form = document.querySelector("")
let ul = document.getElementById("items");
form.addEventListener("submit", addItem);
function addItem(e) {
    e.preventDefault();  // prevent submitting the form
    let newItem = document.getElementById("item").value;
    let li = document.createElement("li");
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(newItem));
    let ul = document.getElementById("items");
    ul.appendChild(li);
    //create delete button
    let delButton = document.createElement("button");
    delButton.className = "btn btn-danger btn-sm float-right delete";
    delButton.innerHTML = "X";
    li.appendChild(delButton);
    styleList();
    messageDivAdd.innerHTML = `The Item ${newItem} was added`;
    messageDivAdd.style.display = "block";
    setTimeout(() => {
        messageDivAdd.style.display = "none";
    }, 2000);
}


let messageDiv = document.getElementById("messageDivDel");

ul.addEventListener("click", removeItem);
function removeItem(e) {
    console.log(e.target.className);
    if (e.target.className == "btn btn-danger btn-sm float-right delete") {
        if (confirm("are you sure?")) {
            ul.removeChild(e.target.parentElement);
            messageDiv.innerHTML = "The Item was deleted";
            messageDiv.style.display = "block";
            setTimeout(() => {    
                messageDiv.style.display = "none";
            }, 2000);
        }
    }
    styleList();
}
let inputFilter = document.getElementById("filter");

function styleList() {
    let odd = document.querySelectorAll("li:nth-child(odd)");
    let even = document.querySelectorAll("li:nth-child(even)");
    let length = odd.length;
    console.log(`odd ${odd.length}`);
    console.log(`even ${even.length}`);
  
    for (let i = 0; i < length; i++) {
        console.log(i);
        odd[i].style.background = "#c4c4c4";
        if(i < even.length){
            even[i].style.background = "white";
        }
    }
}
styleList();


inputFilter.addEventListener("keyup", filterItems);
function filterItems(e) {
    let text = e.target.value.toLowerCase();
    //console.log(text);
    // get all li 
    let liItems = ul.getElementsByTagName("li");
    //console.log(liItems);
    for (let i = 0; i < liItems.length; i++) {
        let liText = liItems[i].firstChild.textContent;
        if (liText.toLowerCase().indexOf(text) != -1) {
            console.log(liText);
            liItems[i].style.display = "block";
        }
        else {
            liItems[i].style.display = "none";
        }
    }
}
