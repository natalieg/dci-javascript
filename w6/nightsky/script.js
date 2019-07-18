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
        this.newDiv.style.top = getRandomArbitrary(80, 800) + "px";
        this.newDiv.style.left = getRandomArbitrary(0, 1200) + "px";
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
    let c = document.getElementById("colorInput").value;
    let isCircle = document.getElementById("circleCheck").checked;
    let isStar = document.getElementById("starCheck").checked;
    console.log(w, h, c, isCircle);
    // If any fild is empty nothing should happen
    if(w != "" && h != "" && c != ""){
        // Creates Circle if checked
        if(isCircle){
           c = new Circle(h, w, c, "50%", isStar);
           c.createCircle();
        } else {
            r = new Rectangle(h, w, c);
            r.create();
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