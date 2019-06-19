var br = "<br>";

document.write("<h2>While Pyramid in function</h2>")


function drawPyramid(lines, char) {
    let maxWidth = lines - 1;
    var emptyChar = (char.split(" ").length - 1);
    let charCount = (char.length / 1.2) - emptyChar/2;
    console.log("Charlength: " + charCount)
    for (i = 0; i <= maxWidth; i++) {
        // Empty Space
        for (b = i; b < maxWidth; b++) {
            for (d = 0; d < charCount; d++) {
                document.write("&nbsp;")
            }
        }
        for (a = 0; a <= i; a++) {
            document.write(char);
        }
        document.write("<br>");
    }
}

drawPyramid(10, "pyramid ");