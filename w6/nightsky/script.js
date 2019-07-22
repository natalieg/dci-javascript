class Rectangle {
    constructor(height, width, color) {
        this.height = height;
        this.width = width;
        this.color = color;
        this.newDiv = document.createElement("div");
    }
    create() {
        let motherDiv = document.getElementById("main");
        this.newDiv.style.height = this.height;
        this.newDiv.style.width = this.width;
        this.newDiv.style.backgroundColor = this.color;
        this.newDiv.style.margin = "10px";
        this.newDiv.style.position = "absolute";
        this.newDiv.style.top = getRandomArbitrary(5, 100) + "%";
        this.newDiv.style.left = getRandomArbitrary(0, 100) + "%";
        motherDiv.appendChild(this.newDiv);
    }
}

class Circle extends Rectangle {
    constructor(height, width, color, radius, star){
        super(height, width, color);
        this.radius = radius;
        this.star = star;
    }
    createCircle(){
        this.create();
        this.newDiv.style.borderRadius = this.radius;
        if(this.star){
            this.newDiv.classList.add("shine");
        }
    }
}

const moon = new Circle("120px", "120px", "#f6de9e", "50%", false);
moon.createCircle();
moon.newDiv.classList.add("moon");

let createBtn = document.getElementById("createBtn");

createBtn.addEventListener("click", function(){
    let w = document.getElementById("widthInput").value + "px";
    let h = w;
    let color = document.getElementById("colorInput").value;
    let amount = document.getElementById('amountInput').value;
    let isCircle = true;
    let isStar = true;
    //console.log(w, h, color, isCircle);
    // If any fild is empty nothing should happen
    if(w != "" && h != "" && color != ""){
        for (let index = 0; index < amount; index++) {
            c = new Circle(h, w, color, "50%", isStar);
            c.createCircle();
            console.log(index, color)
        }
    } else {
        console.log("Please fill out all filds")
 }
})


/// Hilfsmethoden

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomColor() {
    let letters = "0123456789ABCDEFG";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}