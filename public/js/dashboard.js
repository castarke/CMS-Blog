let post = document.querySelector("#post")
let newPost = document.querySelector("#newPost")
let create = document.querySelector("#create")

newPost.addEventListener("submit",event => {

    let title = document.querySelector("#title").value;
    let content = document.querySelector("#content").value;

    event.preventDefault()

    if(!title || !content) {
        alert("Please enter a title and content for your post")
        return;
    }
    const postData = {
        title: title,
        content: content,
    }
    fetch("http://localhost:3001/api/post/", {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
            "Content-Type":"application.json"
        }
    })
    })


