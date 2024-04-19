export function logOutFunction() {
  const logOutButton = document.getElementById('logOutButton');

  function logOut() {
    localStorage.clear();
    window.location.href = '/';
  }

  logOutButton.addEventListener('click', logOut);
}
