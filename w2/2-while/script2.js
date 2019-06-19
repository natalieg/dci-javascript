let myList = ["Apple", "Orange", "Banana", "Peach"];
myList.push("Kiwi");
myList.push("Mango");
myList.push("Avocado");
myList.push("Chicken");
myList.push("Tofu");
myList.push("Potato");
myList.push("Melon");


document.write(myList);
document.write("<hr>")

for(i = 0; i < myList.length; i ++){
    if(myList[i] == "Chicken"){
        document.write("We don't eat the nice " + myList[i]);
        myList[i] = "Strawberry.";
        document.write(". I'd rather eat this " + myList[i] + "<br>");
    } else {
        document.write("Today I'm eating: " + myList[i] + "<br>");
    }
}