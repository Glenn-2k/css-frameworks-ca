export async function profileTemplate(profile) {
  console.log(profile, 'this is the profile template');

  const profileSection = document.createElement('section');
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
  if (profile.banner === null) {
    coverImage.src = '/images/social_media_banner_1240x376.png';
  }
  coverImage.classList.add('img-fluid', 'rounded');
  coverImage.alt = 'cover';

  const profilePic = document.createElement('img');
  profilePic.src = `${profile.avatar}`;
  if (
    profile.avatar === null ||
    profile.avatar === '' ||
    profile.avatar === undefined
  ) {
    profilePic.src = '/images/Glenn-02.png';
  }
  profilePic.classList.add(
    'rounded-image',
    'position-absolute',
    'img-thumbnail',
    'profile-pic'
  );
  profilePic.alt = 'profile picture';

  profileImage.appendChild(coverImage);
  profileImage.appendChild(profilePic);

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

  const followButton = document.createElement('button');
  followButton.type = 'button';
  followButton.classList.add('btn', 'btn-secondary');
  followButton.textContent = 'Follow';

  profileRow.appendChild(profileName);
  profileRow.appendChild(followers);
  profileRow.appendChild(following);
  profileRow.appendChild(bioHeader);
  profileRow.appendChild(bio);
  profileRow.appendChild(followButton);

  profileInfo.appendChild(profileRow);

  profileSection.appendChild(profileImage);
  profileSection.appendChild(profileInfo);

  // profileContainer.appendChild(profileSection);

  return profileSection;
}

//   <section class="row">
//     <div class="col-12 text-center position-relative mb-3">
//       <img
//         src="/images/social_media_banner_1240x376.png"
//         class="img-fluid rounded"
//         alt="cover"
//       />
//       <img
//         src="/images/Glenn-02.png"
//         class="rounded-circle position-absolute img-thumbnail profile-pic"
//         alt="profile picture"
//       />
//     </div>
//   </section>
//   <section>
//     <div class="container">
//       <div class="row text-center mt-5">
//         <p class="col-12 text-white fs-5 fw-light">@xBatman2k</p>
//         <p class="col-6 mt-5">234 Followers</p>
//         <p class="col-6 mt-5">234 Following</p>
//         <h2 class="col-12 mt-3 text-uppercase fs-6 fw-bold">Bio</h2>
//         <p class="col-12 fw-light fs-6 mt-1">
//           A young male hailing from Norway, currently a front end dev.
//           student at Noroff
//         </p>
//         <div>
//           <button type="button" class="btn btn-secondary">Follow</button>
//         </div>
//       </div>
//     </div>
//   </section>
