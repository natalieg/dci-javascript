let imContainer = document.getElementById("imgContainer");
let leftBtn = document.getElementById("buttonLeft");
let rightBtn = document.getElementById("buttonRight");
let imgArray = ["landscape.jpeg", "nature3.jpeg", "ocean1.jpeg"];
let slideTime = 3000;
let interval= null;

let counter = 0;

function slideImg(){
     if(counter < imgArray.length){
        imContainer.style.backgroundImage = "url(img/" + imgArray[counter] + ")";
        counter ++;
    } else {
        counter = 0;
    }
};

slideImg();

function startAutoSlide(){
    
}
