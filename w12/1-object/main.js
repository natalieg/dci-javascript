import * as obj from "./object.js";

let impList = obj.animalList;

let infoText = obj.animaInfo(impList);

let newDiv = document.createElement("div");
newDiv.innerHTML = infoText;
newDiv.style.backgroundColor = "lightblue";
newDiv.style.padding = "10px";

document.body.appendChild(newDiv);
