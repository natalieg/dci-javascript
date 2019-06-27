let htag = document.getElementsByTagName("h1");
console.log(htag[0]);
htag[0].style.color= "blue";
htag[0].style.background= "lightblue";
htag[1].style.color= "red";
htag[1].style.background= "pink";
htag[2].style.color= "green";
htag[2].style.background= "lightgreen";

htag[0].classList.add("light");

let para = document.getElementsByTagName('p');
para[0].classList.add('light');
para[1].innerHTML= "is this working?";

var counter = 0;
var lastPara = false;

let p = document.querySelectorAll("p")[2];
p.innerHTML="<h2>This is a p with an h2 now</h2>"

let allH1 = document.querySelectorAll("h1");

allH1.forEach(element => {
        element.style.padding = "20px";
        element.style.color = "darkred";
});

function changeColorP(){
    // console.log(counter);
    para[counter].classList.add("bg");
    if(counter>0){
        para[counter-1].classList.remove("bg");
    } else if(lastPara){
        para[para.length-1].classList.remove("bg");
    }
    if(counter < para.length-1){
        counter ++;
        lastPara = false;
    } else {
        counter = 0;
        lastPara = true;
    }
}
