import { authFetch } from '../authFetch.mjs';
import { API_SOCIAL_URL } from '../constants.mjs';

const action = '/profiles';
const method = 'GET';
const word = '?name=';

export async function getProfile(profileName) {
  const getProfileURL = `${API_SOCIAL_URL}${action}/${profileName}`;
  const response = await authFetch(getProfileURL, {
    method,
  });

  console.log(getProfileURL, 'this is the profile name');
  return await response.json();
}
