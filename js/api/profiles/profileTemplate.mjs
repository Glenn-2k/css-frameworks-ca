export async function profileTemplate(profile) {
  const profileSection = document.createElement('div');
  profileSection.classList.add('row');

  const profileImage = document.createElement('div');
  profileImage.classList.add(
    'col-12',
    'text-center',
    'position-relative',
    'mb-3'
  );

  const coverImage = document.createElement('img');
  coverImage.src = `${profile.banner}`;
  if (
    profile.banner === null ||
    profile.banner === '' ||
    profile.banner === undefined
  ) {
    coverImage.src = '../images/banner-placeholder.jpg';
  }
  coverImage.classList.add('img-fluid', 'rounded', 'banner-image');
  coverImage.alt = 'cover';

  const profilePicSquare = document.createElement('div');
  profilePicSquare.classList.add(
    'position-absolute',
    'profile-pic',
    'ratio',
    'ratio-1x1'
  );

  const profilePic = document.createElement('img');
  profilePic.src = `${profile.avatar}`;
  if (
    profile.avatar === null ||
    profile.avatar === '' ||
    profile.avatar === undefined
  ) {
    profilePic.src = '../images/placeholderavatar.jpg';
  }
  profilePic.classList.add('rounded-image-profile', 'img-thumbnail');
  profilePic.alt = 'profile picture';

  profilePicSquare.appendChild(profilePic);
  profileImage.appendChild(coverImage);
  profileImage.appendChild(profilePicSquare);

  const profileInfo = document.createElement('section');
  profileInfo.classList.add('container');

  const profileRow = document.createElement('div');
  profileRow.classList.add('row', 'text-center', 'mt-5');

  const profileName = document.createElement('p');
  profileName.classList.add('col-12', 'text-white', 'fs-5', 'fw-light');
  profileName.textContent = `@${profile.name}`;

  const followers = document.createElement('p');
  followers.classList.add('col-6', 'mt-5');
  followers.textContent = `${profile._count.followers} Followers`;

  const following = document.createElement('p');
  following.classList.add('col-6', 'mt-5');
  following.textContent = `${profile._count.following} Following`;

  const bioHeader = document.createElement('h2');
  bioHeader.classList.add(
    'col-12',
    'mt-3',
    'text-uppercase',
    'fs-6',
    'fw-bold'
  );
  bioHeader.textContent = 'Bio';

  const bio = document.createElement('p');
  bio.classList.add('col-12', 'fw-light', 'fs-6', 'mt-1');
  bio.textContent = 'Noroff dont provide bio data, so this is a placeholder';

  const buttonDiv = document.createElement('div');

  const followButton = document.createElement('button');
  followButton.type = 'button';
  followButton.classList.add('btn', 'btn-secondary', 'mb-5');
  followButton.textContent = 'Follow';

  const latest = document.createElement('div');
  latest.classList.add('col-2', 'col-md-4', 'col-sm-12');

  const latestPosts = document.createElement('h2');
  latestPosts.classList.add('text-uppercase', 'fs-6');
  latestPosts.textContent = 'Latest posts';

  latest.appendChild(latestPosts);

  buttonDiv.appendChild(followButton);

  profileRow.appendChild(profileName);
  profileRow.appendChild(followers);
  profileRow.appendChild(following);
  profileRow.appendChild(bioHeader);
  profileRow.appendChild(bio);
  profileRow.appendChild(buttonDiv);

  profileRow.appendChild(latest);
  // profileRow.appendChild(followButton);

  profileInfo.appendChild(profileRow);

  profileSection.appendChild(profileImage);
  profileSection.appendChild(profileInfo);

  // profileContainer.appendChild(profileSection);

  return profileSection;
}
