import * as post from '../api/posts/index.mjs';
import { timeSince } from '../api/utilities/timeSince.mjs';
import { removePost } from '../api/posts/delete.mjs';
import { editPost } from '../api/posts/update.mjs';
import { save } from '../storage/index.mjs';

function appendChildren(parent, children) {
  children.forEach((child) => {
    if (child) parent.appendChild(child);
  });
}

export function postTemplate(postData) {
  console.log(postData);
  const post = document.createElement('div');
  post.className = 'card border-dark mb-3 mx-auto position-relative';

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
    window.location.href = `/profile/?name=${postData.author.name}`;
  });

  const postUsername = document.createElement('h5');
  postUsername.className = 'card-title mb-0 ms-2 fs-6 fw-bold';
  postUsername.textContent = postData.author.name;
  postUsername.addEventListener('click', async (event) => {
    event.stopPropagation();
    window.location.href = `/profile/?name=${postData.author.name}`;
  });

  const postTime = document.createElement('small');
  postTime.className = 'text-muted';
  postTime.textContent = timeSince(postData.created);

  const postContent = document.createElement('p');
  postContent.className = 'card-text';
  postContent.textContent = postData.title;

  appendChildren(postTitleContent, [postImage, postUsername]);
  appendChildren(postTitle, [postTitleContent, postTime]);
  appendChildren(postBody, [postTitle, postContent, trashIcon, editIcon]);
  post.appendChild(postBody);

  return post;
}

export function renderPostTemplate(parent, postData) {
  parent.append(postTemplate(postData));
}

export async function runPosts() {
  const posts = await post.getPosts();
  const container = document.querySelector('#postContainer');

  const checkboxComments = document.getElementById('inlineCheckboxComments');
  const checkboxReactions = document.getElementById('inlineCheckboxReactions');

  container.innerHTML = '';
  posts.forEach((postData) => {
    const hasComments = checkboxComments.checked
      ? postData.comments.length > 0
      : true;
    const hasReactions = checkboxReactions.checked
      ? postData.reactions.length > 0
      : true;

    if (hasComments && hasReactions) {
      renderPostTemplate(container, postData);
    }
  });
}

{
}
