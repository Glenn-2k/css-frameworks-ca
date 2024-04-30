import { login } from '../api/auth/login.mjs';
import * as storage from '../storage/index.mjs';

export function setLoginFormListener() {
  const form = document.querySelector('#loginForm');

  if (form) {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());
      console.log(profile);

      try {
        await login(profile);
        const user = storage.load('profile');

        if (user && user.name) {
          window.location.href = `/profile/?name=${user.name}`;
        } else {
          throw new Error('Invalid user');
        }
      } catch (error) {
        console.error(error);
      }
    });
  }

  // sending the profile object to the login function
  // login(profile);
  // window.location.href = '/profile';
}
