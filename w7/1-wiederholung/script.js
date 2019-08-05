let imgArray = ["img/bird.jpeg", "img/nature.jpeg", "img/nature2.jpeg",
    "img/nature3.jpeg", "img/flower10.jpeg"];
let place = document.getElementById("imgPlace");
let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");
let interval = 5000;

counter = 0;

function changeImg() {
    let img = document.createElement("img");
    img.setAttribute("src", imgArray[imgArray.length -1]);
    place.appendChild(img);

    setInterval(function () {
        img.setAttribute("src", imgArray[counter]);
        place.appendChild(img);
        if (counter < imgArray.length - 1) {
            counter++;
        } else {
            counter = 0;
        }
    }, interval);
}

changeImg();

prevBtn.onclick = function(){
    if(counter > 0 ){
        counter --;
    } else {
        counter = imgArray.length -1;
    }
    manualChangeImg(counter)
}

function manualChangeImg(id){
    let img = document.createElement("img");
    img.setAttribute("src", imgArray[id]);
    place.innerHTML(img);
}