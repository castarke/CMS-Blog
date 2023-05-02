document.querySelector("#newComment").addEventListener("submit",event => {
    event.preventDefault();
    const comments = {
        body:document.querySelector("#comments").value,
        postId:document.querySelector("#commentId").value
    }
    fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify(comments),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res => {
        if (res.ok){
            console.log("New comment posted")
            location.reload()
        } else {
            console.log("Please try again or try later if problem still exists")
        }
    })
})