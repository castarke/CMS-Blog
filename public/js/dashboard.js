let post = document.querySelector("#post")
let newPost = document.querySelector("#newPost")
let create = document.querySelector("#create")
let deletebtn = document.querySelector("#delete")

newPost.addEventListener("submit", async event => {

    let title = document.querySelector("#title").value;
    let content = document.querySelector("#content").value;

    event.preventDefault()

    if(!title || !content) {
        alert("Please enter a title and content for your post")
        return;
    }
    // const postData = {
    //     title: title,
    //     content: content,
    // }

  await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({
          title,
          content,
        }),
        headers: { 'Content-Type': 'application/json' },
      });
      document.location.replace('/dashboard');
    });


    deletebtn.addEventListener("click", async event=> {
    event.preventDefault()
    console.log("clicked")
    const userid = deletebtn.getAttribute("userid")
    await fetch(`/api/post/${userid}`, {
        method: 'DELETE',
      })
    document.location.replace("/dashboard")
})
