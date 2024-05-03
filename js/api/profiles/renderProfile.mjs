import { profileTemplate } from './profileTemplate.mjs';
import { getProfile } from './read.mjs';

export async function renderProfile() {
  try {
    const url = new URL(window.location.href);
    const profileName = url.searchParams.get('name');

    const profileData = await getProfile(profileName);

    const container = document.getElementById('profileContainer');

    const profileElement = await profileTemplate(profileData);
    container.prepend(profileElement);
  } catch (error) {
    console.error(error);
  }
}
