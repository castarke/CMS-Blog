let oldPosts = document.querySelector("#oldPosts")
let newPosts = document.querySelector("#newPosts")
let create = document.querySelector("#create")

newPosts.addEventListener("submit",event => {

    let title = document.querySelector("#title").value;
    let content = document.querySelector("#content").value;

    event.preventDefault()

    if(!title || !content) {
        alert("Please enter a title and content for your post")
        return;
    }
    const postData = {
        title: title,
        content: content
    }
    fetch("http://localhost:3001/api/posts", {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
            "Content-Type":"application.json"
        }
    })
    })


