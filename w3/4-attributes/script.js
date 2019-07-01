let link = document.querySelector("a"); //we get the first link


link.setAttribute("href", "http://www.deviantart.com");
link.style.color = "black";

let img = document.querySelector("img");
img.setAttribute("src", "leaf.jpeg");

// img.onclick(
//     function(){
//         img.toggleAttribute("src", "leaf.jpeg");
//         img.toggleAttribute("src", "leaf.jpg");
//     }
// );

let toggle = true;
img.addEventListener("click", function(){
     if(toggle){
         img.setAttribute("src", "leaf.jpeg");
         toggle = false;
     } else {
         img.setAttribute("src", "leaf.jpg");
         toggle = true;
     }
})