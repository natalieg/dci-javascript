
var isMomHappy = true;

// Promise
var willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand: "apple",
                color: "rosegold"
            }
            resolve(phone); //fulfilled promise
        } else {
            var reason = new Error ("Mom is not happy");
            reject(reason); // reject, promise was not fulfilled
        }
    }
);

// call promise 
var askMom = function(){
    willIGetNewPhone
    .then(function(fulfilled){
        console.log(fulfilled);
    })
    .catch(function(error){
        console.log(error.message);
    })
}

askMom();

