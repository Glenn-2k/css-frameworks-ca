import { authFetch } from '../authFetch.mjs';
import { reactionAuthFetch } from '../authFetch.mjs';
import { API_SOCIAL_URL } from '../constants.mjs';

const queryString = document.location.search;
export const params = new URLSearchParams(queryString);
export const name = params.get('name');

const action = '/profiles';
const method = 'GET';
const profileNameInput = '?name=';
const author = '?_author=true&_comments=true&_reactions=true';

export async function getProfile() {
  const getProfileURL = `${API_SOCIAL_URL}${action}/${name}`;
  const response = await authFetch(getProfileURL, {
    method,
  });

  return await response.json();
}

export async function getProfilePosts() {
  const getURL = `${API_SOCIAL_URL}${action}/${name}/posts${author}`;

  console.log(getURL, 'this is the getURL');

  const response = await authFetch(getURL);

  return await response.json();
}
