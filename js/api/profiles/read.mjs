import { authFetch } from '../authFetch.mjs';
import { API_SOCIAL_URL } from '../constants.mjs';

const action = '/profiles';
const method = 'GET';

export async function getProfile(profile) {
  const getProfileURL = `${API_SOCIAL_URL}${action}/${profile}`;
  const response = await authFetch(getProfileURL, method);

  const userData = await response.json();

  console.log(userData);
  return userData;
}
