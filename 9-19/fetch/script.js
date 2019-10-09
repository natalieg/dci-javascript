let textBtn = document.getElementById("btn1");
let jsonBtn = document.getElementById("btn2");
let outDiv = document.getElementById("output")

textBtn.addEventListener("click", getText);
jsonBtn.addEventListener("click", getJson);

function getText(){
    fetch("test.txt")
    .then(function(res){
        return res.text();
    })
    .then(function(data){
        console.log(data);
        outDiv.innerHTML = data;
    })
    .catch(function(err){
        console.log(err);
    })
}

function getJson(){
    fetch("posts.json")
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
        outDiv.innerHTML = "";
        data.forEach(post => {
            outDiv.innerHTML += 
            `<p>${post.title}<br>
            ${post.body}
            </p>`
        });
      
    })
    .catch(function(err){
        console.log(err);
    })
}