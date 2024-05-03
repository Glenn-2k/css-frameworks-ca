import { authFetch } from '../authFetch.mjs';
import { API_SOCIAL_URL } from '../constants.mjs';

const action = '/profiles';
const method = 'GET';
const profileNameInput = '?name=';
const author = '?_author=true&_comments=true&_reactions=true';

export async function getProfile(profileName) {
  const getProfileURL = `${API_SOCIAL_URL}${action}/${profileName}`;
  const response = await authFetch(getProfileURL, {
    method,
  });

  return await response.json();
}

export async function getProfilePosts(name) {
  const getURL = `${API_SOCIAL_URL}${action}/${profileNameInput}${name}/posts${author}`;

  console.log(getURL, 'this is the getURL');

  const response = await authFetch(getURL);

  return await response.json();
}

const queryString = document.location.search;
export const params = new URLSearchParams(queryString);
export const name = params.get('name');
