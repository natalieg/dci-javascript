
let img = document.getElementById("myImg");
let imgAttr = img.attributes;

img.addEventListener("click", function(){
    let text = ""
    console.log(imgAttr);
    for (let index = 0; index < imgAttr.length; index++) {
        text += imgAttr[index].name +": "+ imgAttr[index].value + "<br>";
    }
    
    document.getElementById("info").innerHTML = text;
})

