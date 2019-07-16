let btn = document.getElementById("myBtn");
let tog = 0;

btn.addEventListener("click", function(){
    if(tog == 0){
        this.style.backgroundColor = "rgb(240, 160, 240)";
        this.style.fontSize = "20px";
        tog = 1;
    } else {
        this.style.backgroundColor = "rgb(0, 205, 191)";
        this.style.fontSize = "12px";
        tog = 0;
    }
    
})