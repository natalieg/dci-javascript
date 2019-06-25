////// annoying the user with a question

// let answer = prompt("do you like javascript?");

// while(answer.indexOf("yes") == -1){
//     answer = prompt("do you like javascript?");
// }
// alert("thank you!!");

// for(i = 0; i <= 99; i++){
//     if(i*9 >306){
//         break;
//     }
//     console.log(i*9);
// }

/////////////////////////////////////

// printing the numbers between 0 and 30 escape the number 10

// for(i=0; i <= 30; i++){
//     if(i == 10){
//         continue;
//     }
//     console.log(i);
// }

let drinkList=["water", "tea", "coffee", "milk", "cola", "beer", "limo", "maitai", "fanta", "mate"];

function filterStuff(thing){
    for(counter = 0; counter < drinkList.length; counter ++){
        if(drinkList[counter] == thing){
            continue;
        }
        console.log(counter + " " + drinkList[counter]);
    }
}

// filterStuff("coffee");

function filterManyThings(things){
    var arrayOfThings = things.split(",");
    var filterCount = 0;
    console.log(arrayOfThings);
    for(counter = 0; counter < drinkList.length; counter ++){
        let con = false;
        for(i=0; i<arrayOfThings.length; i++){
            if((arrayOfThings[i]).indexOf(drinkList[counter]) != -1 ){
                con = true;
            } 
        }
        if(con){
             filterCount ++;
             continue;
        }
        console.log(counter + " " + drinkList[counter]);
    }
    console.log("We filtered " + filterCount + " items: " + arrayOfThings);
}

filterManyThings("cokacola, milk, coffee");