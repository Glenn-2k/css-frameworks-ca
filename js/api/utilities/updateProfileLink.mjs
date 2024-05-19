export async function updateProfileLink() {
  const profile = localStorage.getItem('profile');
  if (profile) {
    const profileData = JSON.parse(profile);
    const profileName = profileData.name;
    const profileLink = document.getElementById('profileLink');
    if (profileLink) {
      profileLink.href = `/profile/?name=${profileName}`;
    } else {
      console.error('profileLink not found');
    }
  }
}
