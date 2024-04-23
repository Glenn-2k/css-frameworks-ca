import { authFetch } from '../authFetch.mjs';
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
  console.log('EditPost ble startet');
  console.log(postData);
  if (!postData) {
    console.error('PostData element not provided');
    return;
  }

  const bodyInput = document.createElement('textarea');
  bodyInput.value = postData.title;

  const bodyDisplay = document.querySelector('.card-text');
  saveChanges(postData, bodyDisplay, bodyInput);
}

export async function saveChanges(postData, post, bodyInput) {
  console.log('SaveChanges ble startet');
  const updatedData = {
    ...postData,
    body: bodyInput.value,
  };
  await updatePost(updatedData).then(() => {
    let status = 'ok';
    if (status) {
      const bodyDisplay = document.createElement('div');
      bodyDisplay.className = 'card-text';
      bodyDisplay.textContent = bodyInput.value;
      const saveButton = document.getElementById('saveButton');
      if (saveButton) saveButton.remove();
      console.log('Post updated');
    } else {
      console.error('Failed to update post');
    }
  });
}
