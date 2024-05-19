import { authFetch } from '../authFetch.mjs';
import { API_SOCIAL_URL } from '../constants.mjs';

const action = '/posts';
const method = 'POST';

export function createPost() {
  const createPostForm = document.querySelector('#create-post');

  createPostForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(createPostForm);

    const defaultTitle = 'GA Social Post';

    const input = { title: defaultTitle, body: formData.get('body') }; // Hardcoded title after suggestion from Martin to work around title requirement.

    try {
      const response = await authFetch(API_SOCIAL_URL + action, {
        method,
        body: JSON.stringify(input),
      });
      if (response) {
        console.log('Post created successfully');
      }
    } catch (error) {
      console.error('Error creating this post:', error);
    }
    setTimeout(() => {
      location.reload();
    }, 500);
  });
}
