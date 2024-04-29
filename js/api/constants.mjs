export const API_URL = 'https://api.noroff.dev';
export const API_BASE = '/api/v1';
export const API_SOCIAL_BASE = '/social';
export const API_SOCIAL_URL = `${API_URL}${API_BASE}${API_SOCIAL_BASE}`;

const queryString = document.location.search;
export const params = new URLSearchParams(queryString);
export const id = params.get('id');

export const API_SOCIAL_SPECIFIC = `${API_SOCIAL_URL}/posts/${id}`;
