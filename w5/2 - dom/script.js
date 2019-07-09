document.getElementById("link").accessKey="g";
let key = document.getElementById("link").accessKey;

console.log("The access key is: " + key);

let btn = document.getElementById("button");
let btn2 = document.getElementById("button2");
let btn3 = document.getElementById("button3");
let body = document.querySelector("body");
let image =  document.querySelector("img");

let imageVisible = true;

btn.addEventListener("click", function(){
    if(imageVisible){
            document.querySelector("img").style.display="none";
            imageVisible = false;
    } else {
         document.querySelector("img").style.display="block";
         imageVisible = true;
    }
})


// with arrow function
let width = 5;
let rotation = 5;
let minus = false;

// Changes the Size, background of button and body on click
btn3.addEventListener("click",()=> {
    rotation += 5;
    if(minus){
        width -= 5;
        if(width < 10){
            minus = false;
        }
    } else {
        width += 5;
        if(width > 70){
            minus = true;
        }
    }
 
    image.style.width = width + "%";
    // image.setAttribute("style", "transform: rotate(" + rotation + "deg)");        
    image.setAttribute("style", "transform: rotate(" + rotation + "deg); width: " + width + "%");        
    btn3.style.backgroundColor = getRandomColor();
    btn3.style.color = getRandomColor();
    btn3.style.border = "2px solid" +  getRandomColor();
    body.style.backgroundColor = getRandomColor();
})

/// 

function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
 
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
 }

 ///// 

 window.addEventListener("resize", function(){
    document.getElementById("p1").innerHTML = "The height is: " + this.window.innerHeight;
    document.getElementById("p2").innerHTML = "The width is: " + this.window.innerWidth;
  })