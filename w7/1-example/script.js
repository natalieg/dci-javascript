let btn = document.getElementById("myBtn");
btn.style.position = "relative";

let baseValueLeft = 50;
let left = baseValueLeft;
let myTop = baseValueLeft;
let moveLeft = true;
let colorChange = 20;

btn.addEventListener("mouseover", function () {
    btn.style.backgroundColor = "rgb(200,"+ colorChange+",200)"
    colorChange = colorChange + 10;
    if(colorChange >= 255){
        colorChange = 0;
    }
    if (moveLeft) {
        this.style.left = left + "px";
        this.style.top = myTop + "px";
        left = left + baseValueLeft;
        myTop = myTop + baseValueLeft;
        if(left > (window.innerWidth - baseValueLeft)){
            moveLeft = false;
            console.log("End reached!")
        }
    } else {
        left = left - baseValueLeft;
        myTop = myTop - baseValueLeft;
        this.style.left = left + "px";
        this.style.top = myTop + "px";
        if(left <= 0 ){
            moveLeft = true;
        }
    }
});