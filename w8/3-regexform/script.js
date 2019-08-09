var email = document.getElementById("email");
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var zip = document.getElementById("zip");
var age = document.getElementById("age");
var gender = document.getElementById("gender");
var height = document.getElementById("height");
var phone = document.getElementById("phone");
var arrElements = [email, firstName, lastName, zip, age, gender, 
height, phone];

var btn = document.getElementById('submit');

// All Fild invalid
arrElements.forEach(element => {
    //element.classList.add('invalid');
});

btn.addEventListener("click", function(){
    email.value.match(/\S+@\S+\.\S+/) ? changeValid(email, true) : changeValid(email, false);
    firstName.value.match(/^[A-Z]+$/i) ? changeValid(firstName, true) : changeValid(firstName, false);
    lastName.value.match(/^[A-Z]+$/i) ? changeValid(lastName, true) : changeValid(lastName, false);
    zip.value.match(/^[0-9]+$/) ? changeValid(zip, true) : changeValid(zip, false);
    age.value.match(/^[0-9]+$/) && (age.value > 12 && age.value < 100) ? changeValid(age, true) : changeValid(age, false);
    gender.value.match(/^female$|^male$/g) ? changeValid(gender, true) : changeValid(gender, false);
    height.value.match(/^[0-9]{1}.[0-9]{2}$/g) ? changeValid(height, true) : changeValid(height, false);
    phone.value.match(/^[0-9]+$/) ? changeValid(phone, true) : changeValid(phone, false);
});

function changeValid(fild, valid){
    if(valid){
        fild.classList.add('valid');
        fild.classList.remove('invalid');
    } else {
        fild.classList.remove('valid');
        fild.classList.add('invalid');
    }
}


window.onkeyup = function(e){
    if(e.keyCode == 13){
        btn.click();
    }
}