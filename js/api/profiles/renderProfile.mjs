import { profileTemplate } from './profileTemplate.mjs';
import { getProfile } from './read.mjs';
import { profilePostTemplate } from './posts.mjs';

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

// export async function runProfilePosts() {
//   const userName = postData.author.name;
//   const loggedInUser = localStorage.getItem('profile');
//   const loggedInUserName = JSON.parse(loggedInUser).name;
//   const userPost = await getProfilePosts();

//   if (userName === loggedInUserName) {
//     profilePostTemplate(userPost);
//   }
// }
