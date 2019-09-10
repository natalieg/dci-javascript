let date = new Date();
let date2 = date.getDate() + "." + date.getMonth() + "." + date.getFullYear() ;

console.log(date);
console.log(date2);

//////////////

let rabbit = {}
rabbit.speak = function(speak){
    console.log(speak);
}
function speak(text){
    console.log(`the ${this.type} rabbit says ${text}`)
}

////
let whiteRabbit = {type: "white", speak};
let hungryRabbit = {type: "hungy", speak};

whiteRabbit.speak("Hello");
hungryRabbit.speak("I need a carrot");

speak.call(hungryRabbit, "Hello");

///

let grayRabbit = Object.create(rabbit);
grayRabbit.type = "gray";
grayRabbit.speak("Hi");




