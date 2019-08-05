let key = document.getElementById('key');
let value = document.getElementById('value');
let btn = document.getElementById('addBtn');
let delBtn = document.getElementById('delBtn');
let display = document.getElementById('display');

displayLocalStorage();

btn.addEventListener("click", function (){
    if (key.value != "" && value.value != "") {
        localStorage.setItem(key.value, value.value);
        displayLocalStorage();
    } else {
        console.log("Empty");
    }
})

delBtn.addEventListener("click", function(){
    if (key.value != "" ) {
        localStorage.removeItem(key.value);
        displayLocalStorage();
    }
})

function displayLocalStorage(){
    var valueString = ""
    for(i = 0; i<localStorage.length; i++){
        valueString += `Key ${localStorage.key(i)} : ${localStorage.getItem(localStorage.key(i))} <br>` 
    }
    display.innerHTML = valueString;
}

console.log(localStorage.key(0));
console.log(localStorage.getItem(localStorage.key(0)));

// newDiv.innerHTML += `Key: ${key.value}` ;
// newDiv.innerHTML += ` Value: ${value.value} <hr>` ;