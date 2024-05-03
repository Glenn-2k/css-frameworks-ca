import { authFetch } from '../authFetch.mjs';
import { API_SOCIAL_URL } from '../constants.mjs';

const action = '/posts';
const method = 'PUT';
const reaction = '/react/❤️';

export async function reactionToPost(postData) {
  const reactionURL = `${API_SOCIAL_URL}${action}/${postData}${reaction}`;

  const response = await authFetch(reactionURL, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return await response.json();
}
