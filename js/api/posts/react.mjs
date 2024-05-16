import { API_SOCIAL_URL } from '../constants.mjs';
import { reactionAuthFetch } from '../authFetch.mjs';

const action = '/posts';
const method = 'PUT';
const reaction = '/react/❤️';

export async function reactionToPost(postData) {
  const reactionURL = `${API_SOCIAL_URL}${action}/${postData}${reaction}`;

  const response = await reactionAuthFetch(reactionURL, {
    method,
  });

  return response.json();
}
