var br = "<br>";

document.write("<h2>While Pyramid</h2>")


var pyraWidth = 20;
var c = 0; // first counter
while(c < pyraWidth){
    var c2 = 0; // counter for space
    while(c2 < pyraWidth){
        document.write("&nbsp;&nbsp;")
        c2 ++; 
    }
    let c3 = 0; // counter for stars
    while(c3 <= c){
        document.write("&nbsp;*&nbsp;");
        c3 ++;
    }
    document.write("<br>");
    c ++;
    pyraWidth --;
}
////////////////////////////////////////////////

document.write("<h2>Do While</h2>")
let a = 0;
let str = "";
do {
    str = "the counter: " + a + br;
    document.write(str);
    a ++; 
} while(a < 10);

document.write("<hr>")

let t = 0;
let Sum = 0;
do{
    Sum = Sum + t;
    document.write("Sum: " + Sum + br);
    t ++;
} while(t < 10);

////////////////////////////////////////////////

let sum = 0, 
    counter = 0;
while(counter <= 10){
    sum = sum + counter;
    document.write(sum + br);
    counter ++;
}


let i = 1;
let multi = 12;
while(i<=10){
    document.write(i + " times 9 is: " + i*multi + "<br>");
    i ++;
}

document.write("<hr>")
document.write("<h2>While Loop</h2>")

let j = 10;
while(j > 0){
    document.write("While " + j + " * 9 = "  + j*9 + "<br>");
    j --;
}

document.write("<hr>")
document.write("<h2>For Loop</h2>")
document.write("<p>The same but with for</p>")

for(j=10; j>0; j--){
    document.write("For " + j + " * 9 = "  + j*9 + "<br>");
}