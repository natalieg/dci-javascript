let productName = document.getElementById("productName");
let productDescription = document.getElementById("description");
let productCode = document.getElementById("code");
let addItem = document.getElementById("addItem");
let table = document.getElementById("table");

let product = {
    name: "Iphone",
    description: `It's a phone`,
    productCode: 554422
}

class Product{
    constructor(name, description, code){
        this.name = name;
        this.description = description;
        this.code = code;
    }
    addToList(){
        let row = document.createElement("tr");
        let cell1 = document.createElement("td");
        let cell2 = document.createElement("td");
        let cell3 = document.createElement("td");
        let cell4 = document.createElement("td");
        cell1.innerHTML = this.name;
        cell2.innerHTML = this.description;
        cell3.innerHTML = this.code;
        cell4.innerHTML = `<button>Del</button>`
        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        row.appendChild(cell4);
        document.getElementById("table").appendChild(row);
    }
}

showItems();

addItem.addEventListener("click", function(){
    let prodArray = [];
    let obj={};
    obj.productName=productName.value;
    obj.productDesc=productDescription.value;
    obj.productCode=productCode.value;
    strobj=JSON.stringify(obj);
    prodArray.push(strobj);
    localStorage.setItem(productCode.value, prodArray);
    console.log("Local store is " + localStorage);
    showItems();
});

function showItems(){
    for(i=0; i< localStorage.length; i++){
        let thisItem = (localStorage.getItem(localStorage.key(i)));
        console.log(thisItem);
        console.log("This item is " + thisItem);
        console.log("Value " + typeof(thisItem));
        let newProd = new Product()
    }
}


