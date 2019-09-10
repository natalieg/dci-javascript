import {printAge as pAge, printName as pName} from "./person.js";
import Person from "./person.js";
// Import everything
import * as p from "./person.js"

let person = new Person("Natalie", 33);

console.log(person);

pName(person);
pAge(person);