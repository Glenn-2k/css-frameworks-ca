import { timeSince } from '../utilities/timeSince.mjs';
import { removePost } from '../posts/delete.mjs';
import { editPost } from '../posts/update.mjs';
import { reactionToPost } from '../posts/react.mjs';
import { getProfilePosts } from '../profiles/read.mjs';

function appendChildren(parent, children) {
  children.forEach((child) => {
    if (child) parent.appendChild(child);
  });
}

export function profilePostTemplate(postData) {
  console.log(postData);

  const post = document.createElement('div');
  post.className = 'card border-dark mb-3 mx-auto position-relative';

  const likeIcon = document.createElement('i');
  likeIcon.className = 'bi bi-heart like-icon';
  likeIcon.textContent = postData.reactions.length;
  likeIcon.addEventListener('click', async (event) => {
    const response = await reactionToPost(postData.id);
    console.log(postData.id);
    setTimeout(() => {
      location.reload();
    }, 300);
  });

  const trashIcon = document.createElement('i');
  trashIcon.className = 'bi bi-trash3 trash-icon';
  trashIcon.addEventListener('click', async (event) => {
    try {
      const response = await removePost(postData.id);
      if (response.ok) {
        console.log('post deleted');
        post.remove();
      } else {
        console.log('post not deleted');
      }
    } catch (error) {
      console.error(error);
    }
    setTimeout(() => {
      location.reload();
    }, 300);
  });

  const editIcon = document.createElement('i');
  editIcon.className = 'bi bi-pencil edit-icon';
  editIcon.onclick = () => {
    if (!postBody.querySelector('input, textarea')) {
      const titleInput = document.createElement('textarea');
      titleInput.value = postContent.textContent;
      postContent.replaceWith(titleInput);

      const saveButton = document.createElement('button');
      saveButton.className = 'btn btn-primary w-25 mb-2';
      saveButton.textContent = 'Save';
      saveButton.id = 'saveButton';
      saveButton.onclick = async () => {
        const editData = {
          id: postData.id,
          title: titleInput.value,
          body: postData.body,
        };
        editPost(editData);
        if (editData.id) {
          postContent.textContent = titleInput.value;
          titleInput.replaceWith(postContent);
        } else {
          console.error('Failed to update post');
        }
      };
      appendChildren(postBody, [saveButton]);
    }
  };

  const postBody = document.createElement('div');
  postBody.className = 'card-body';

  const postTitle = document.createElement('div');
  postTitle.className =
    'd-flex justify-content-between align-items-center mb-2';
  postTitle.addEventListener('click', () => {
    window.location.href = `/post/index.html?id=${postData.id}`;
  });

  const postTitleContent = document.createElement('div');
  postTitleContent.className = 'd-flex align-items-center';

  const postImage = document.createElement('img');
  if (postData.author.avatar === null || postData.author.avatar === '') {
    postData.author.avatar = '../images/placeholderavatar.jpg';
  }

  postImage.src = postData.author.avatar;
  postImage.className = 'height-40 rounded-image';
  postImage.alt = 'Profile Image';

  postImage.addEventListener('click', async (event) => {
    event.stopPropagation();
    window.location.href = `/profile/?name=${postData.name}`;
  });

  const postUsername = document.createElement('h5');
  postUsername.className = 'card-title mb-0 ms-2 fs-6 fw-bold';
  postUsername.textContent = postData.author.name;
  postUsername.addEventListener('click', async (event) => {
    event.stopPropagation();
    window.location.href = `/profile/?name=${postData.name}`;
  });

  const postTime = document.createElement('small');
  postTime.className = 'text-muted';
  postTime.textContent = timeSince(postData.created);

  const postContent = document.createElement('p');
  postContent.className = 'card-text';
  postContent.textContent = postData.body;

  appendChildren(postTitleContent, [postImage, postUsername]);
  appendChildren(postTitle, [postTitleContent, postTime]);
  appendChildren(postBody, [
    postTitle,
    postContent,
    trashIcon,
    editIcon,
    likeIcon,
  ]);
  post.appendChild(postBody);

  return post;
}

export function renderPostTemplate(parent, postData) {
  parent.append(postTemplate(postData));
}

export async function runProfilePosts(profileName) {
  const posts = await getProfilePosts(profileName);
  const postsSection = document.getElementById('profilePosts');

  postsSection.innerHTML = '';
  await posts.forEach((postData) => {
    const postElement = profilePostTemplate(postData);

    postsSection.appendChild(postElement);
  });
}

/* <div class="col-2 col-md-4 col-sm-12">
<h2 class="text-uppercase fs-6">Latest posts</h2>
</div>
<div class="card border-dark mb-3 mx-auto" style="position: relative">
<div class="card-body">
  <div class="d-flex justify-content-between align-items-center mb-2">
    <div class="d-flex align-items-center">
      <img
        src="/images/Glenn-02.png"
        class="rounded-circle height-40"
        alt="Profile Image"
      />
      <h5 class="card-title mb-0 ms-2 fs-6 fw-bold">xBatman2k</h5>
    </div>
    <small class="text-muted">3h ago</small>
  </div>
  <p class="card-text">
    If you see a crime at an Apple Store, does that make you an
    iWitness?
  </p>
</div>
<i class="bi bi-trash3 trash-icon"></i>
<i class="bi bi-pencil edit-icon"></i>
</div>
<div class="card border-dark mb-3 mx-auto">
<div class="card-body">
  <div class="d-flex justify-content-between align-items-center mb-2">
    <div class="d-flex align-items-center">
      <img
        src="/images/Glenn-02.png"
        class="rounded-circle height-40"
        alt="Profile Image"
      />
      <h5 class="card-title mb-0 ms-2 fs-6 fw-bold">xBatman2k</h5>
    </div>
    <small class="text-muted">3h ago</small>
  </div>
  <p class="card-text">
    If you see a crime at an Apple Store, does that make you an
    iWitness?
  </p>
</div>
</div>
<div class="card border-dark mb-3 mx-auto">
<div class="card-body">
  <div class="d-flex justify-content-between align-items-center mb-2">
    <div class="d-flex align-items-center">
      <img
        src="/images/Glenn-02.png"
        class="rounded-circle height-40"
        alt="Profile Image"
      />
      <h5 class="card-title mb-0 ms-2 fs-6 fw-bold">xBatman2k</h5>
    </div>
    <small class="text-muted">3h ago</small>
  </div>
  <p class="card-text">
    If you see a crime at an Apple Store, does that make you an
    iWitness?
  </p>
</div>
</div>
<div class="card border-dark mb-3 mx-auto">
<div class="card-body">
  <div class="d-flex justify-content-between align-items-center mb-2">
    <div class="d-flex align-items-center">
      <img
        src="/images/Glenn-02.png"
        class="rounded-circle height-40"
        alt="Profile Image"
      />
      <h5 class="card-title mb-0 ms-2 fs-6 fw-bold">xBatman2k</h5>
    </div>
    <small class="text-muted">3h ago</small>
  </div>
  <p class="card-text">
    If you see a crime at an Apple Store, does that make you an
    iWitness?
  </p>
</div>
</div>
<div class="card border-dark mb-3 mx-auto">
<div class="card-body">
  <div class="d-flex justify-content-between align-items-center mb-2">
    <div class="d-flex align-items-center">
      <img
        src="/images/Glenn-02.png"
        class="rounded-circle height-40"
        alt="Profile Image"
      />
      <h5 class="card-title mb-0 ms-2 fs-6 fw-bold">xBatman2k</h5>
    </div>
    <small class="text-muted">3h ago</small>
  </div>
  <p class="card-text">
    If you see a crime at an Apple Store, does that make you an
    iWitness?
  </p>
</div>
</div>
</section> */
