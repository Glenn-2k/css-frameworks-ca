import { authFetch } from '../authFetch.mjs';
import { API_SOCIAL_SPECIFIC, API_SOCIAL_URL } from '../constants.mjs';

const action = '/posts';
const author = '/?_author=true&_comments=true&_reactions=true';

export async function getPosts() {
  const getURL = `${API_SOCIAL_URL}${action}${author}`;

  const response = await authFetch(getURL);

  return await response.json();
}

export async function getPost() {
  const getURL = `${API_SOCIAL_SPECIFIC}`;

  const response = await authFetch(getURL);

  return await response.json();
}
