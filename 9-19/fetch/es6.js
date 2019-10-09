let textBtn = document.getElementById("btn1");
let jsonBtn = document.getElementById("btn2");
let outDiv = document.getElementById("output");



var getText = () => {
    fetch("test.txt")
    .then(res => {
        return res.text();
    })
    .then( data => {
        console.log(data);
        outDiv.innerHTML = data;
    })
    .catch(err => {
        console.log(err);
    })
}

var getJson = () => {
    fetch("posts.json")
    .then(res => {
        return res.json();
    })
    .then( data => {
        console.log(data);
        outDiv.innerHTML = "";
        data.forEach(post => {
            outDiv.innerHTML += 
            `<p>${post.title}<br>
            ${post.body}
            </p>`
        });
      
    })
    .catch(err => {
        console.log(err);
    })
}


textBtn.addEventListener("click", getText);
jsonBtn.addEventListener("click", getJson);