import * as post from "../api/posts/index.mjs";


function appendChildren(parent, children) {
    children.forEach(child => {
        if (child) parent.appendChild(child);
    });
};

export function postTemplate(postData) {
    const post = document.createElement("div");
    post.className = "card border-dark mb-3 mx-auto";

    const postBody = document.createElement("div");
    postBody.className = "card-body";

    const postTitle = document.createElement("div");
    postTitle.className = "d-flex justify-content-between align-items-center mb-2";

    const postTitleContent = document.createElement("div");
    postTitleContent.className = "d-flex align-items-center";

    const postImage = document.createElement("img");
    postImage.src = "/images/Glenn-02.png";
    postImage.className = "rounded-circle height-40";
    postImage.alt = "Profile Image";

    const postUsername = document.createElement("h5");
    postUsername.className = "card-title mb-0 ms-2 fs-6 fw-bold";
    postUsername.textContent = postData._author;

    const postTime = document.createElement("small");
    postTime.className = "text-muted";
    postTime.textContent = postData.time;

    const postContent = document.createElement("p");
    postContent.className = "card-text";
    postContent.textContent = postData.body;

    
    appendChildren(postTitleContent, [postImage, postUsername]);
    appendChildren(postTitle, [postTitleContent, postTime]);
    appendChildren(postBody, [postTitle, postContent]);
    post.appendChild(postBody);
    

    return post;
}









export function renderPostTemplate(parent, postData) {
    parent.append(postTemplate(postData));
}


export async function runPosts() {
    const posts = await post.getPosts();
    const container = document.querySelector("#postContainer");
    posts.forEach(postData => renderPostTemplate(container, postData));
}










{/* <div class="card border-dark mb-3 mx-auto">
<div class="card-body">
  <div class="d-flex justify-content-between align-items-center mb-2">
    <div class="d-flex align-items-center">
      <img src="/images/Glenn-02.png" class="rounded-circle height-40" alt="Profile Image">
      <h5 class="card-title mb-0 ms-2 fs-6 fw-bold">xBatman2k</h5>
    </div>
    <small class="text-muted">3h ago</small>
  </div>
  <p class="card-text">If you see a crime at an Apple Store, does that make you an iWitness?</p>
</div>
</div> */}