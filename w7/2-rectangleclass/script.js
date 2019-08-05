let main = document.getElementById("main");

class Rectangle{
    constructor(height, width, color){
        this.height = height;
        this.width = width;
        this.color = color;
    }
    get area(){
        return this.width * this.height;
    }
    drawRectangle(){
        let div = document.createElement("div");
        div.style.height = this.height + "px";
        div.style.width = this.width + "px";
        div.style.backgroundColor = this.color;
        div.style.float = "left";
        main.appendChild(div);
    }
}

let r1 = new Rectangle(20, 40, "red");
r1.drawRectangle();
console.log(r1.area);

let r2 = new Rectangle(80, 90, "blue");
r2.drawRectangle();
console.log(r2.area);

let r3 = new Rectangle(120, 90, "green");
r3.drawRectangle();
console.log(r3.area);

/////////////////////////////

class BaseItem{
    // Constructor for Class
    constructor(text){ 
        this.text = text; 
        this.div = document.createElement("div"); //creating div item
    }
    draw(){
        this.div.style.backgroundColor = "goldenrod"; //background for div
        this.div.style.padding = "10px"; 
        this.div.style.margin = "5px";
        this.div.style.width = "50%";
        this.div.innerHTML = this.text; 
        main.appendChild(this.div); // appending new div to main div
    }
}

class MoreStyledItem extends BaseItem{
    constructor(text, color, borderRadius){
        super(text);
        this.color = color;
        this.borderRadius = borderRadius;
    }
    styledDraw(){
        this.draw();
        this.div.style.backgroundColor = this.color;
        this.div.style.borderRadius = this.borderRadius;
    }
    set content(value){
        this.text = value;
    }
    restyle(style){
        this.div.setAttribute("style", style);
    }

}

const t1 = new BaseItem("hello there!"); //creating new baseitem with text
t1.draw(); // using the draw function of BaseItem to draw it to the website

const t2 = new BaseItem("how u doin");
t2.draw();

const t3 = new BaseItem("here is even more text");
t3.draw();

const t4 = new BaseItem("here is even more text");
t4.draw();

const st1 = new MoreStyledItem("i have more style", "pink", "20px");
st1.styledDraw();


const st2 = new MoreStyledItem("i have more style", "purple", "10px");
st2.styledDraw();
st2.content = "hi I am the new text";
st2.styledDraw();

st2.restyle("background-color:black; color:white; padding: 20px")