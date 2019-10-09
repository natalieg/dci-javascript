import hello2 from "./extra.js";

function hello1(){
    console.log("Hello I am the main.js");
}

hello1();
hello2();

var first = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
  ]);
  
  console.log(first.get(2));