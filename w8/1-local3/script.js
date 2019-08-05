let key = document.getElementById('key');
let value = document.getElementById('value');
let btn = document.getElementById('addBtn');
let delBtn = document.getElementById('delBtn');
let display = document.getElementById('display');


displayLocalStorage();

btn.addEventListener("click", function () {
    let valArray = [];
    console.log("The key value is " + key.value);
    console.log("The value currently is: " + localStorage.getItem(key.value));
    if (localStorage.getItem(key.value) != null) {
        valArray.push(localStorage.getItem(key.value));
    }
    valArray.push(value.value);

    console.log(valArray);
    localStorage.setItem(key.value, valArray);
    displayLocalStorage();
    value.value = "";
})

delBtn.addEventListener("click", function () {
    localStorage.removeItem(key.value);
    displayLocalStorage();
})

function displayLocalStorage() {
    var valueString = ""
    for (i = 0; i < localStorage.length; i++) {
        valueString += `Key ${localStorage.key(i)} : ${localStorage.getItem(localStorage.key(i))} <br>`
    }
    display.innerHTML = valueString;
}

console.log(localStorage.key(0));
console.log(localStorage.getItem(localStorage.key(0)));

value.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      document.getElementById("addBtn").click();
    }
  });