let productName = document.getElementById("productName");
let productDescription = document.getElementById("description");
let productCode = document.getElementById("code");
let addItem = document.getElementById("addItem");
let table = document.getElementById("table");
let delButtons = document.querySelectorAll(".delButton");

let product = {
    name: "Iphone",
    description: `It's a phone`,
    productCode: 554422
}

class Product {
    constructor(name, description, code) {
        this.name = name;
        this.description = description;
        this.code = code;
    }
    addToList() {
        let row = document.createElement("tr");
        row.setAttribute("class", "datarow");
        row.innerHTML =
            `<td>${this.name}</td>
        <td>${this.description}</td>
        <td>${this.code}</td>
        <td><button class="delButton" value=${this.code}>Del</button></td>`
        document.getElementById("table").appendChild(row);
    }
}

showItems();

addItem.addEventListener("click", function () {
    if (productName.value != "" && productDescription.value != "" && productCode.value != "") {
        let prodString = `${productName.value};${productDescription.value};${productCode.value}`;
        console.log(productName.value, productDescription.value);
        localStorage.setItem(productCode.value, prodString);
        console.log("Local store is " + localStorage);
        showItems();
    }
});

function showItems() {
    // this is dirty and I don't like it: Removing all rows before creating them again
    let allCells = document.querySelectorAll(".datarow");
    console.log("rows" + allCells);
    allCells.forEach(element => {
        table.removeChild(element);
    });

    for (i = 0; i < localStorage.length; i++) {
        let thisItem = (localStorage.getItem(localStorage.key(i)));
        let thisArray = thisItem.split(";")
        console.log(thisItem);
        console.log(thisArray);
        let newProd = new Product(thisArray[0], thisArray[1], thisArray[2]);
        newProd.addToList();
    }
}

delButtons.forEach(element => {
    element.addEventListener("click", function(){
        console.log(element.value);
        localStorage.removeItem(element.value);
        showItems();
    })
});
