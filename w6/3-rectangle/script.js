class Rectangle {
    constructor(height, width, color) {
        this.height = height;
        this.width = width;
        this.color = color;
    }
    create() {
        let motherDiv = document.getElementById("main");
        let newDiv = document.createElement("div");
        newDiv.style.height = this.height;
        newDiv.style.width = this.width;
        newDiv.style.backgroundColor = this.color;
        newDiv.style.margin = "10px";
        newDiv.style.position = "absolute";
        newDiv.style.top = getRandomArbitrary(0, 1200) + "px";
        newDiv.style.left = getRandomArbitrary(0, 1200) + "px";
        motherDiv.appendChild(newDiv);
    }
}

const r1 = new Rectangle("20px", "40px", "green");
r1.create();

const r2 = new Rectangle("40px", "80px", "yellow");
r2.create();

function createRandomDivs() {
    for (i = 0; i < 5; i++) {
        r = new Rectangle(getRandomArbitrary(10, 150) + "px",
            getRandomArbitrary(10, 150) + "px", getRandomColor());
        r.create();
    }
}

var count = 0;
if(count < 100){
    setInterval(function(){
    createRandomDivs();
    count ++;
    console.log(count);
    }, 500);
}




function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomColor() {
    let letters = "014589EF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}