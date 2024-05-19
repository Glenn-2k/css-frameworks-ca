import { profileTemplate } from './profileTemplate.mjs';
import { getProfile } from './read.mjs';

export async function renderProfile() {
  try {
    const url = new URL(window.location.href);
    const profileName = url.searchParams.get('name');
    const container = document.getElementById('profileInfo');

    const profileData = await getProfile(profileName);

    const profileElement = await profileTemplate(profileData);
    container.append(profileElement);
  } catch (error) {
    console.error(error);
  }
}
