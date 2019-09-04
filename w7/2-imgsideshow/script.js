let imgArray = ["img/bird.jpeg", "img/nature.jpeg", "img/nature2.jpeg",
    "img/nature3.jpeg", "img/flower10.jpeg"];

let main = document.getElementById("main");
let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");
let autoBtn = document.getElementById("auto");
let counter = 0;

let img = document.createElement('img');
img.setAttribute('src', imgArray[counter]);
main.appendChild(img);

function manualChangeImg(id){
    img.setAttribute('src', imgArray[id]);
}

prevBtn.onclick = function(){
    if(counter > 0){
        counter --;
    } else {
        counter = imgArray.length - 1;
    }
    manualChangeImg(counter);
}

nextBtn.onclick = function(){
    nextImg();
}

let active = false;
var myVar = null;

autoBtn.onclick = function(){
    autoBtn.classList.toggle("btnActive");
    if(!active){
        myVar = setInterval(autoSlide, 2000);        
        active = true;
    } else {
        clearInterval(myVar);
        active = false;
    }
}

function autoSlide(){
    nextImg();
}


function nextImg(){
    if(counter < imgArray.length -1){
        counter ++;
    } else {
        counter = 0;
    }
    manualChangeImg(counter);
}

