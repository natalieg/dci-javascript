let pNameInput = document.getElementById('pName');
let pDescInput = document.getElementById('pDesc');
let pCodeInput = document.getElementById('pCode');
let addBtn = document.getElementById('addBtn');
let productArr = [];
let delArr = [];
let keyArr = [];
let internId = 0;

class Product {
    constructor(pName, pDesc, pCode) {
        this.pName = pName;
        this.pDesc = pDesc;
        this.pCode = pCode;

    }
    addProductToStorage() {
        let newProduct = [this.pName, this.pDesc, this.pCode];
        let strProduct = JSON.stringify(newProduct);
        localStorage.setItem(internId, strProduct);
        keyArr.push(internId);
        internId++;
        console.log('Str product' + strProduct);
    }
    callDisplayProduct() {
        displayProduct(this.pName, this.pDesc, this.pCode, internId);
    }
}

addBtn.addEventListener('click', function () {
    pCodeInput.value = getRandomInt(5000);
    let newProd = new Product(pNameInput.value, pDescInput.value, pCodeInput.value);
    newProd.addProductToStorage();
    newProd.callDisplayProduct();
})

function displayLocal() {
    console.log("storage Lengthis " + localStorage.length);

    for (a = 0; a < localStorage.length; a++) {
        console.log('Run number ' + a)
        let item = localStorage[a];
        console.log("Item to stringify " + item);
        if (item != undefined) {
            let arr = JSON.parse(item);
            displayProduct(arr[0], arr[1], arr[2], localStorage.key(a));
            console.log(arr[0], arr[1], arr[2], localStorage.key(a));
            console.log('Item ' + arr);
        }
    }
}

displayLocal();
console.log(localStorage);

function displayProduct(n, d, c, id) {
    this.delBtn = document.createElement('button');
    this.delBtn.setAttribute('class', 'delButton');
    this.delBtn.setAttribute('value', id);

    let row = document.createElement('tr');
    let c1 = document.createElement('td');
    let c2 = document.createElement('td');
    let c3 = document.createElement('td');
    let c4 = document.createElement('td');
    c1.innerHTML = n;
    c2.innerHTML = d;
    c3.innerHTML = c;
    this.delBtn.innerHTML = 'x';
    c4.appendChild(this.delBtn);
    row.appendChild(c1);
    row.appendChild(c2);
    row.appendChild(c3);
    row.appendChild(c4);
    document.getElementById('table').appendChild(row);
    updateAndActivateDel();
}


function updateAndActivateDel(){
    delArr = document.querySelectorAll('.delButton');
    let startLength = delArr.length;
    for (i = 0; i < startLength; i++) {
        element = delArr[i];
        element.addEventListener('click', function () {
            console.log('remove key is ' + element.value);
            localStorage.removeItem(element.value);
            element.parentElement.parentElement.remove();
            keyArr.splice(i, 1);
            delArr = document.querySelectorAll('.delButton');
        })
    }
    console.log(`there are ${delArr.length} delete buttons active`)
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  