import {greeting, hi, makeElement} from "./user.js";
//No need for {} for a default import
import doubleNumber from "./user.js";

console.log(greeting);

console.log(doubleNumber(21));

makeElement("div", "This is a new Element", "green");
makeElement("span", "SPAN SPAN", "yellow");
makeElement("section", "This is a Section", "red");
makeElement("div", hi("Desi"), "pink");