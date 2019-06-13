
var studentA = [80, 70, 90, 60, 77, 59];
var studentB = [20, 10, 99, 30, 10, 20];

avaragePoints(studentA);
avaragePoints(studentB);

function avaragePoints(student) {
    var studentSum = 0;
    for (i = 0; i < student.length; i++) {
        studentSum = studentSum + student[i];
    }
    var studentAvg = studentSum / student.length;
    document.write(student + "<br>");
    document.write("The Avarage is: " + Math.floor(studentAvg));
    document.write("<br><hr><br>")
}



// document.write("<table>")
// for(i=0; i<4; i++){
//     document.write("<tr>")
//     for(a=0; a<5; a++){
//         document.write("<td>")
//         document.write("test")
//         document.write("</td>")
//     }
//     document.write("</tr>")
// }
// document.write("</table>")