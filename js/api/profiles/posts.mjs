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
  const post = document.createElement('div');
  post.className = 'card border-dark mb-3 mx-auto position-relative';

  // like icon //

  const likeIcon = document.createElement('i');
  likeIcon.className = 'bi bi-heart like-icon pointer-cursor';
  likeIcon.textContent = postData.reactions.length;
  likeIcon.addEventListener('click', async (event) => {
    const response = await reactionToPost(postData.id);
    console.log(postData.id);
    setTimeout(() => {
      location.reload();
    }, 300);
  });

  // Thrashcan icon //

  const trashIcon = document.createElement('i');

  const authorName = postData.author.name;
  const storageName = localStorage.getItem('profile');
  const parsedName = JSON.parse(storageName);

  const loggedInUserName = parsedName ? parsedName.name : null;

  if (authorName !== loggedInUserName) {
    trashIcon.style.display = 'none';
  } else {
    trashIcon.style.display = 'block';
  }

  trashIcon.className = 'bi bi-trash3 trash-icon pointer-cursor';
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

  // Edit icon //

  const editIcon = document.createElement('i');

  if (authorName !== loggedInUserName) {
    editIcon.style.display = 'none';
  } else {
    editIcon.style.display = 'block';
  }

  editIcon.className = 'bi bi-pencil edit-icon pointer-cursor';
  editIcon.onclick = () => {
    if (!postBody.querySelector('input, textarea')) {
      const titleInput = document.createElement('textarea');
      titleInput.value = postContent.textContent;
      titleInput.className = 'form-control mb-2 border-dark';
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
    'd-flex justify-content-between align-items-center mb-2 pointer-cursor';
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
