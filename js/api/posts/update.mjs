import { save } from '../../storage/index.mjs';
import { authFetch, headers } from '../authFetch.mjs';
import { API_SOCIAL_URL } from '../constants.mjs';

const action = '/posts';
const method = 'PUT';

export async function updatePost(postData) {
  const updateURL = `${API_SOCIAL_URL}${action}/${postData.id}`;

  const response = await authFetch(updateURL, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  });

  return await response.json();
}

export function editPost(postData, post) {
  if (!post) {
    console.error('Post element not provided');
    return;
  }

  const bodyInput = document.createElement('textarea');
  bodyInput.value = postData.body;

  const bodyDisplay = post.querySelector('.card-text');

  const saveButton = document.createElement('button');
  saveButton.textContent = 'Save';
  saveButton.onclick = () => {
    saveChanges(postData, post, bodyInput);
    post.appendChild(saveButton);
    post.replaceChild(bodyInput, bodyDisplay);
  };
}

export function saveChanges(postData, post, bodyInput) {
  const updatedData = {
    ...postData,
    body: bodyInput.value,
  };
  updatePost(updatedData).then((updated) => {
    if (updated.ok) {
      const bodyDisplay = document.createElement('div');
      bodyDisplay.className = 'card-text';
      bodyDisplay.textContent = bodyInput.value;
      post.replaceChild(bodyDisplay, bodyInput);
      const saveButton = post.querySelector('button[textContent="Save"]');
      if (saveButton) saveButton.remove();
      console.log('Post updated');
    } else {
      console.error('Failed to update post');
    }
  });
}
