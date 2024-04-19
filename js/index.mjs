import { setRegisterFormListener } from './handlers/register.mjs';
import { setLoginFormListener } from './handlers/login.mjs';
import { runPosts } from './templates/post.mjs';
import * as post from './api/posts/index.mjs';
import * as templates from './templates/index.mjs';
import { logOutFunction } from './api/utilities/logOut.mjs';
import { initializePostSubmission } from './api/posts/create.mjs';

const path = location.pathname;

if (path === '/' || path === '/index.html') {
  setLoginFormListener();
  console.log('did this work?');
} else if (path === '/register/index.html') {
  setRegisterFormListener();
} else if (path === '/feed/index.html' || path === '/feed/') {
  runPosts();
  initializePostSubmission();
  console.log('Feed page is initialized.');
  logOutFunction();
} else if (path === '/profile/index.html' || path === '/profile/') {
  console.log('Profile page is initialized.');
  // window.confirm('You are now on the profile page.');
  logOutFunction();
}

// functions I want to run on all pages //
