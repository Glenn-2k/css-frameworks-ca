import { load } from '../storage/index.mjs';

export function headers() {
  const token = load('token');

  return {
    'Content-Type': 'application/json',
    authorization: `Bearer ${token}`,
  };
}

export async function authFetch(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: headers(),
  });
}

export function reactionHeaders() {
  const token = load('token');

  return {
    authorization: `Bearer ${token}`,
  };
}

export async function reactionAuthFetch(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: reactionHeaders(),
  });
}
