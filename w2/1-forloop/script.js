var count = 0;
var rows = 12;
var middle;

// Pyra with text center
document.write("<div style='text-align:center'>");
for(i=0; i<10; i++){
    for(a=0; a <= i; a++){
        document.write("&nbsp*&nbsp");
    }
    document.write("<br>");
}
document.write("</div>")

// Pyra with space
var pyraWidth = 20;
document.write("<div style='text-align:left'>");
for(i=0; i<pyraWidth; i++){
    for(b=0; b < (pyraWidth) ; b++){
        document.write("&nbsp;&nbsp;")
    } 
    for(a=0; a <= i; a++){
        document.write("&nbsp;*&nbsp;");
    }
    document.write("<br>");
    pyraWidth --;
}
document.write("</div>")

// Reverse Pyra with space
pyraWidth = 10;
document.write("<div style='text-align:left'>");
for(i=pyraWidth; i>0; i--){
    for(b=i; b < 21 ; b++){
        document.write("&nbsp;&nbsp;")
        // document.write("X")
    } 
    for(a=pyraWidth; a > 0 ; a--){
        document.write("&nbsp;*&nbsp;");
    }
    document.write("<br>");
    pyraWidth --;
}
document.write("</div>")

document.write("<hr>")

// Table with Numbers and Stars
document.write("<h2>Table with Stars and Numbers</h2>")
document.write("<table>")
for (i = 0; i < rows; i++) {
    document.write("<tr class='upperTr'>")
    // columns
    for (a = 0; a <= i; a++) {
        document.write("<td>")
        document.write("* ")
        document.write(count += 1);
        document.write("</td>")
    }
    document.write("</tr>")
}

middle = count;
count ++;
for (i = rows; i > 0; i--) {
    document.write("<tr>")
    // columns
    for (a = 0; a < i; a++) {
        document.write("<td>")
        document.write("* ")
        document.write(count -= 1);
        document.write("</td>")
    }
    document.write("</tr>")
}
document.write("</table>")



var cell  = document.querySelectorAll("td"); 

let c = 10;
for(i=0; i < cell.length; i++){
    color = "rgb(100," + c + "," + c*1.5 + ")";
    cell[i].style.backgroundColor = color; 
    c = c + 1.5;
}


document.write("<hr>");

for (i = 100; i > 0; i -= 8) {
    let grade;
    if (i > 89) {
        grade = "A"
    } else if (i > 80) {
        grade = "B"
    } else if (i > 70) {
        grade = "C"
    } else if (i > 65) {
        grade = "D"
    } else {
        grade = "F"
    }
    if (grade == "A" || grade == "F") {
        document.write("<div class='" + grade + "'>Your score is " + i + ". You get an " + grade + "</div>");
    } else {
        document.write("<div class='" + grade + "'>Your score is " + i + ". You get a " + grade + "</div>");
    }

}


document.write("<hr>")

var num;
var check;
var multiplikator = 9;

for (i = 1; i < 10; i++) {
    num = i * multiplikator;
    if (num % 2 == 0) {
        check = "even";
    } else {
        check = "odd";
    }
    document.write("<div class='" + check + "'>" + num + " is " + check + "</div>");
}

document.write("<hr>")

for (i = 9; i < 110; i += 9) {
    if (i % 2 == 0) {
        check = "even";
    } else {
        check = "odd";
    }
    document.write("<div class='" + check + "'>" + i + " is " + check + "</div>");
}

var oddDiv = document.getElementsByClassName('odd');
var evenDiv = document.getElementsByClassName('even');
setBackground(oddDiv, "#B0E0E6");
setBackground(evenDiv, "#FFDAB9");

function setBackground(list, color) {
    for (i = 0; i < list.length; i++) {
        list[i].style["background-color"] = color;
    }

}