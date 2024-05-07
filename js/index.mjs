import { setRegisterFormListener } from './handlers/register.mjs';
import { setLoginFormListener } from './handlers/login.mjs';
import { runPosts } from './templates/post.mjs';
import * as post from './api/posts/index.mjs';
import * as templates from './templates/index.mjs';
import { logOutFunction } from './api/utilities/logOut.mjs';
import { createPost } from './api/posts/create.mjs';
import { updatePost } from './api/posts/update.mjs';
import { searchBar } from './handlers/search.mjs';
import { filterPosts } from './handlers/filter.mjs';
import { runSpecificPost } from './templates/specificPost.mjs';
import { getProfile } from './api/profiles/read.mjs';
import { renderProfile } from './api/profiles/renderProfile.mjs';
import { runProfilePosts } from './api/profiles/posts.mjs';
import { updateProfileLink } from './api/utilities/updateProfileLink.mjs';

const path = location.pathname;

if (path === '/' || path === '/index.html') {
  setLoginFormListener();
  console.log('did this work?');
} else if (path === '/register/index.html') {
  setRegisterFormListener();
} else if (path === '/feed/index.html' || path === '/feed/') {
  runPosts();
  createPost();
  searchBar();
  filterPosts();
  updateProfileLink();
  logOutFunction();
} else if (path === '/profile/index.html' || path === '/profile/') {
  renderProfile();
  runProfilePosts();
  updateProfileLink();
  logOutFunction();
} else if (path === '/post/index.html' || path === '/post/') {
  runSpecificPost();
  updateProfileLink();
  logOutFunction();
}

// functions I want to run on all pages //
