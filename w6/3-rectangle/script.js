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
        this.newDiv.style.top = getRandomArbitrary(100, 780) + "px";
        this.newDiv.style.left = getRandomArbitrary(0, 1100) + "px";
        motherDiv.appendChild(this.newDiv);
    }
}

class Circle extends Rectangle {
    constructor(height, width, color, radius){
        super(height, width, color);
        this.radius = radius;
    }
    createCircle(){
        this.create();
        this.newDiv.style.borderRadius = this.radius;
    }
}

const c1 = new Circle("50px", "50px", "red", "50%");
c1.createCircle();

const r1 = new Rectangle("20px", "40px", "green");
r1.create();
const r2 = new Rectangle("40px", "80px", "yellow");
r2.create();

function createRandomDivs(count) {
    for (i = 0; i < count; i++) {
        r = new Rectangle(getRandomArbitrary(10, 150) + "px",
            getRandomArbitrary(10, 150) + "px", getRandomColor());
        r.create();
    }
}

function createRandomCircle(count) {
    for (i = 0; i < count; i++) {
         r = new Circle(getRandomArbitrary(10, 150) + "px",
             getRandomArbitrary(10, 150) + "px", getRandomColor(), "50%");
        //r = new Circle("50px", "50px", getRandomColor(), "70px");
        r.createCircle();
    }
}

createRandomDivs(30);
createRandomCircle(30);

let createBtn = document.getElementById("createBtn");

createBtn.addEventListener("click", function(){
    let w = document.getElementById("widthInput").value + "px";
    let h = document.getElementById("heightInput").value + "px";
    let c = document.getElementById("colorInput").value;
    let isCircle = document.getElementById("circleCheck").checked;
    console.log(w, h, c, isCircle);
    // If any fild is empty nothing should happen
    if(w != "" && h != "" && c != ""){
        // Creates Circle if checked
        if(isCircle){
           c = new Circle(h, w, c, "50%");
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