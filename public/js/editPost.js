document.querySelector("#edit").addEventListener("click", event => {
    event.preventDefault();
    const post_id = document.querySelector("#post_id").value;
    const updatePost = {
        title: document.querySelector("#updatedTitle").value,
        content: document.querySelector("#updatedContent").value
    }

    fetch((`/api/post/${post_id}`),{
        method: "PUT",
        body:JSON.stringify(updatePost)
    })
})

document.querySelector("#delete").addEventListener("click", event => {
    event.preventDefault();
    const post_id = document.querySelector("#post_id").value;
    fetch((`/api/post/${post_id}`),{
        method:"DELETE"
    })
})