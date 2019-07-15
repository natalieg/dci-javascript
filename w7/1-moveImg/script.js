let btn = document.getElementById("moveBtn");
let img1 = document.getElementById("moveImg");

let toggle = 0;
let start = 0;

btn.addEventListener("click", function () {
    setInterval(function () {
        moveImg(img1);
    }, 600);
})

function moveImg(img) {
    switch (toggle) {
        case 0:
            img.style.top = window.innerHeight - 200 + "px";
            toggle = 1;
            break;
        case 1:
            img.style.left = window.innerWidth - 220 + "px";
            toggle = 2;
            break;
        case 2:
            img.style.top = 50 + "px";
            toggle = 3;
            break;
        case 3:
            img.style.left = 0;
            toggle = 0;
            break;
        default:
            img.style.top = 0;
            img.style.left = 0;
    }
}

