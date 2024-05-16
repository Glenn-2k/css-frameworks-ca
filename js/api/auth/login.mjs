import { API_SOCIAL_URL } from '../constants.mjs';
import * as storage from '../../storage/index.mjs';

const action = '/auth/login';
const method = 'post';

export async function login(profile) {
  const loginURL = API_SOCIAL_URL + action;
  const body = JSON.stringify(profile);
  try {
    const response = await fetch(loginURL, {
      headers: {
        'Content-Type': 'application/json',
      },
      method,
      body,
    });

    if (!response.ok) {
      throw new Error('Invalid login');
    }

    const { accessToken, ...user } = await response.json();

    storage.save('token', accessToken);

    storage.save('profile', user);
  } catch (error) {
    console.error(error);
  }
}
