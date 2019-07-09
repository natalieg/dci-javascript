
let btn = document.getElementById("textAddBtn");
let btn2 = document.getElementById("changeInnerHtml");
let delBtn = document.getElementById("deleteText");
let delBtnFirst = document.getElementById("deleteFirstText");
let count = 1;
let elements = document.querySelectorAll("h4");

btn.addEventListener("click", function () {
    let h1 = document.createElement("h4");
    let text = document.createTextNode(count + ". This is text inside the h1 inside the main div");
    document.getElementById("main").appendChild(h1);
    h1.appendChild(text);
    count++;
    elementListen();
})

btn2.addEventListener("click", function () {
    let heading = document.createElement("h4");
    heading.innerHTML = count + ". this is text";
    heading.style.color = getRandomColor();
    document.getElementById("main").appendChild(heading);
    count++;
    elementListen();
})



delBtn.addEventListener("click", function () {
    let element = document.querySelectorAll("h4");
    if (element.length > 0) {
        document.getElementById("main").removeChild(element[element.length - 1]);
    } else {
        console.log("Nothing to remove");
    }
})

delBtnFirst.addEventListener("click", function () {
    let element = document.querySelectorAll("h4");
    if (element.length > 0) {
        console.log(element[0]);
        document.getElementById("main").removeChild(element[0]);
    } else {
        console.log("Nothing to remove");
    }
})

function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {

        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}



// for(i = 0; i < elements.length; i++){
//     elements[i].onclick = function(){
//         console.log("hi");
//        document.getElementById("main").removeChild(this);
//     }
// }


function elementListen() {
    let elements = document.querySelectorAll("h4");
    console.log(elements);
    for (i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", function () {
            if(document.getElementById("main").childNodes[i]){
                    document.getElementById("main").removeChild(this);
                    elements = document.querySelectorAll("h4");
                    console.log("Children left: " + elements);
            }
        })
    }
}

