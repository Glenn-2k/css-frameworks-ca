/**
 * Attaches an event listener to a logout button that clears the local storage and redirects the user to the homepage.
 *
 * @example
 * // Assuming there is a button with id 'logOutButton' in your HTML
 * logOutFunction();
 * // Clicking the 'logOutButton' will clear the local storage and redirect to the homepage ('/').
 */

export function logOutFunction() {
  const logOutButton = document.getElementById('logOutButton');

  function logOut() {
    localStorage.clear();
    window.location.href = '/';
  }

  logOutButton.addEventListener('click', logOut);
}
