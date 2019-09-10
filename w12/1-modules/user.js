// Exporting Vars and function to use them in another js file
let greeting = "Welcome back!";

function hi(user){
    return `${greeting} ${user}`;
}

export default function doubleNumber(num){
    return num * 2;
}

function makeElement(element, text, bgColor){
    let ele = document.createElement(element);
    ele.append(text);
    ele.style.backgroundColor = bgColor;
    document.body.append(ele);
}

// Exporting multiple 
export {greeting, hi, makeElement};