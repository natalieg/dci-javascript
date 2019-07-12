let submit = document.getElementById("submitBtn");

submit.addEventListener("click", function(){

})

function validate(){
    try {
        let age = document.getElementById("age").value;
        console.log("Your age is: " + age);
        if(age < 18) throw "Your age is below 18";
    } catch (e) {
        console.error("Something went wrong. " + e);
    }
}