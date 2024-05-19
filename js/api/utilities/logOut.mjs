/**
 * Attaches a logout functionality to a button with the ID 'logOutButton'.
 * When the button is clicked, it clears the local storage and redirects the user to the home page.
 *
 * @example
 * // HTML:
 * // <button id="logOutButton">Log Out</button>
 *
 * // JavaScript:
 * logOutFunction();
 */

export function logOutFunction() {
  const logOutButton = document.getElementById('logOutButton');

  function logOut() {
    localStorage.clear();
    window.location.href = '/';
  }

  logOutButton.addEventListener('click', logOut);
}
