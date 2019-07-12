
try {
    // let myVar = "Hi I'm myVar";
    console.log(myVar);
    let x = document.getElementById("myId").innerHTML;
    console.log(x);
} catch (err) {
    console.log("Something went wrong.")
    console.log("Error type: " + err.name);
    console.log("Error message: " + err.message);
} finally {
    alert("I'm still alive!");
}

