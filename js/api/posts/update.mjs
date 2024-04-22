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

export function editPost(postData) {
  const titleInput = document.createElement('input');
  titleInput.value = postData.title;
  const bodyInput = document.createElement('textarea');
  bodyInput.value = postData.body;
  const saveButton = document.createElement('button');
  saveButton.textContent = 'Save Changes';
  saveButton.onclick = async () => {
    const updatedData = {
      ...postData,
      title: titleInput.value,
      body: bodyInput.value,
    };
    await updatePost(updatedData);
    console.log('Post updated');
  };
  // Setup your form elements in a modal or on the page
}
