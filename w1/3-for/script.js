let food = [
    "Lasagne",
    "Bread",
    "Banana",
    "Chocolate",
    "Wrap",
    "Smoothie",
    "Sushi",
    "Apple",
    "Date",
    "Zucchini",
    "Aubergine",
    "Cucumber",
    "Melon",
    "Potato",
    "Salad",
    "Tomato",
    "Lentils",
]

console.log("test");
food.push("Strawberry");
food.push("Corn");

let fontColor = 255;
for(i = 0; i < food.length; i++){
    document.write("<div id='" + food[i] + "'>" + food[i] + "</div>");
    let color = i*11;
    document.getElementById(food[i]).style.backgroundColor = "rgb(" + 100 + "," + color +"," + color +")";
    document.getElementById(food[i]).style.color = "rgb(" + fontColor + "," + fontColor +"," + fontColor +")";
    document.getElementById(food[i]).style.fontWeight = "bold";
    document.getElementById(food[i]).style.textAlign = "center";
    document.getElementById(food[i]).style.height = "50px";
    document.getElementById(food[i]).style.lineHeight = "50px";
    document.getElementById(food[i]).style.width = 160 + i*50 + "px";
    document.getElementById(food[i]).style.textShadow = "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
    document.getElementById(food[i]).style.fontSize = "35px";
    document.getElementById(food[i]).style.margin = "0 auto";
    document.getElementById(food[i]).style.borderTopLeftRadius = "20px";
    document.getElementById(food[i]).style.borderTopRightRadius = "20px";
    document.getElementById(food[i]).style.borderBottom = "1px solid white";
    fontColor = fontColor - 11;
}