const posts = [
    { title: "post", body: "blablabla" },
    { title: "post1", body: "and more blablabla" },
]

function createPost(post) {
    return new Promise(function(resolve, reject) {
        setTimeout(function () {
            posts.push(post);
            let error = false;
            if (!error) {
                resolve("Everything is ok");
            } else {
                reject("Something went wrong");
            }
        }, 2000);
    })
}


function getPosts() {
    let list = document.getElementById("output");
    let text = "";
    setTimeout(function () {
        posts.forEach(ele => {
            text +=  `<li>Title ${ele.title} <br> ${ele.body}</li>`
        });
        list.innerHTML += text;
    }, 1000)
}

createPost({ title: "3 The new Post!", body: "Here we have more interesting news!" })
    .then(getPosts) //calling without ()!!!
    .catch(function (error) {
        console.log(error)
    });
