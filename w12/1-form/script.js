let form1 = document.getElementById("form1");
let form2 = document.getElementById("form2");
let form3 = document.getElementById("form3");
let infoMsg = document.getElementById("infoMsg");

let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let birthDate = document.getElementById("birthDate");
let nationality = document.getElementById("nationality");

let address = document.getElementById("address");
let city = document.getElementById("city");
let country = document.getElementById("country");

let username = document.getElementById("username");
let password = document.getElementById("password");
let passwordCheck = document.getElementById("repassword");
let picture = document.getElementById("picture");

let button1 = document.getElementById("next1");
let button2 = document.getElementById("next2");
let button3 = document.getElementById("submit");
let prev2 = document.getElementById("prev2")
let prev3 = document.getElementById("prev3")
let prev4 = document.getElementById("prev4")

let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");

let error = "red";
let progress = "yellow";
let success = "green";

let user = {
    "firstName": "",
    "lastName": "",
    "birthDate": "",
    "nationality": "",
    "address": "",
    "city": "",
    "country": "",
    "username": "",
    "password": "",
    "picture": "",
}

p1.style.backgroundColor = progress;

button1.addEventListener("click", function (e) {
    e.preventDefault();
    let valid = false;
    if (firstName.value != "" && lastName.value != ""
        && birthDate.value != "" && nationality.value != "") {
        user.firstName = firstName.value;
        user.lastName = lastName.value;
        user.birthDate = birthDate.value;
        user.nationality = nationality.value;
        console.log(user);
        // if everything is correct
        valid = true;
    } else {
        infoMsg.innerHTML = "Please fill out all filds!"
    }
    if (valid) {
        infoMsg.innerHTML = ""
        fillResult();
        form1.classList.add("hide");
        form2.classList.remove("hide");
        p1.style.backgroundColor = success;
        p2.style.backgroundColor = progress;
    }
});

button2.addEventListener("click", function (e) {
    e.preventDefault();
    let valid = false;
    if (address.value != "" && city.value != "" && country.value != "") {
        user.address = address.value;
        user.city = city.value;
        user.country = country.value;
        console.log(user);
        // if everything is correct
        valid = true;
    } else {
        infoMsg.innerHTML = "Please fill out all filds!"
    }
    if (valid) {
        infoMsg.innerHTML = ""
        fillResult();
        form2.classList.add("hide");
        form3.classList.remove("hide");
        p2.style.backgroundColor = success;
        p3.style.backgroundColor = progress;
    }
})

prev2.addEventListener("click", function(e){
    e.preventDefault();
    firstName.value = user.firstName;
    lastName.value = user.lastName;
    birthDate.value = user.birthDate;
    nationality.value = user.nationality;
    p2.style.backgroundColor = error;
    p1.style.backgroundColor = progress;
    form2.classList.add("hide");
    form1.classList.remove("hide");
})

button3.addEventListener("click", function (e) {
    e.preventDefault();
    let valid = false;
    if (username.value != "" &&
        password.value != "" &&
        passwordCheck != "" &&
        picture.value != "") {
        // if everything is matching
        if (password.value === passwordCheck.value) {
            user.username = username.value;
            user.password = password.value;
            user.picture = picture.value;
            valid = true;
        } else {
            infoMsg.innerHTML = "The Password doesn't match";
        }
    } else {
        infoMsg.innerHTML = "Please fill out all filds!"
    }
    if (valid) {
        p3.style.backgroundColor = success;
        infoMsg.innerHTML = ""
        fillResult();
        form3.classList.add("hide");
        document.getElementById("result").classList.remove("hide");
        let strUser = JSON.stringify(user);
        localStorage.setItem("1", strUser);
    }
})

prev3.addEventListener("click", function(e){
    e.preventDefault();
    address.value = user.address;
    city.value = user.city;
    country.value = user.country;

    p3.style.backgroundColor = error;
    p2.style.backgroundColor = progress;
    
    form3.classList.add("hide");
    form2.classList.remove("hide");
})

prev4.addEventListener("click", function(e){
    e.preventDefault();
    username.value = user.username;
    picture.value = user.picture;
    password.value = "";
    passwordCheck.value = "";
    
    p3.style.backgroundColor = progress;
    document.getElementById("result").classList.add("hide");
    form3.classList.remove("hide");
})

function fillResult(){
    document.getElementById("resName").innerHTML = user.firstName + " " + user.lastName;
    document.getElementById("resDate").innerHTML = user.birthDate;
    document.getElementById("resNat").innerHTML = user.nationality;
    document.getElementById("resAddress").innerHTML = user.address;
    document.getElementById("resCity").innerHTML = user.city;
    document.getElementById("resCountry").innerHTML = user.country;
    document.getElementById("resUsername").innerHTML = user.username;
    let picture = document.getElementById("resPicture");
    picture.style.backgroundImage = "url(" + user.picture +")";
    picture.classList.add("avatar");
}