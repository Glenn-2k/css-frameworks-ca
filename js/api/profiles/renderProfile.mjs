import { profileTemplate } from './profileTemplate.mjs';
import { getProfile } from './read.mjs';

export async function renderProfile() {
  try {
    const url = new URL(window.location.href);
    const profileName = url.searchParams.get('name');
    console.log(profileName);

    const profileData = await getProfile(profileName);
    console.log(profileData);

    const container = document.getElementById('profileContainer');
    // if (profileData) {
    //   if (!container) {
    //     console.log('No profile container found');
    //     return;
    //

    const profileElement = await profileTemplate(profileData);
    container.prepend(profileElement);
  } catch (error) {
    console.error(error);
  }
}
