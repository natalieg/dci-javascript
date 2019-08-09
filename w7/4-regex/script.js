let pwInput = document.getElementById("password");
let reqCharInfo = document.getElementById("reqChar");
let reqLowerInfo = document.getElementById("reqLower");
let reqUpperInfo = document.getElementById("reqUpper");
let reqNumInfo = document.getElementById("reqNumSpec");

reqCharInfo.classList.add('invalid');
reqLowerInfo.classList.add('invalid');
reqUpperInfo.classList.add('invalid');
reqNumInfo.classList.add('invalid');

pwInput.onkeyup= function(){
    // checking for all requirements 
    (pwInput.value.length > 7) ? changeValid(reqCharInfo, true) : changeValid(reqCharInfo, false);
    pwInput.value.match(/^(?=.*[a-z]).+$/) ? changeValid(reqLowerInfo, true) : changeValid(reqLowerInfo, false);
    pwInput.value.match(/^?=.*[A-Z]).+$/) ? changeValid(reqUpperInfo, true) : changeValid(reqUpperInfo, false);
    pwInput.value.match(/^(?=.*[0-9_\W]).+$/) ? changeValid(reqNumInfo, true) : changeValid(reqNumInfo, false);
    // if all requirements are met color border green
    (reqCharInfo.classList.contains('valid') && 
    reqLowerInfo.classList.contains('valid') && 
    reqUpperInfo.classList.contains('valid') && 
    reqNumInfo.classList.contains('valid')) ? pwInput.style.border = "4px solid green" : pwInput.style.border = "1px solid red"
}

function changeValid(fild, valid){
    if(valid){
        fild.classList.add('valid');
        fild.classList.remove('invalid');
    } else {
        fild.classList.remove('valid');
        fild.classList.add('invalid');
    }
}