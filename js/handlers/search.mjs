/**
 * Attaches an event listener to a search bar that filters and displays cards based on the user's input.
 * This function expects an input element with the id 'searchBar' and filters any HTML element with the class 'card'.
 * The filtering is case-insensitive and shows only those cards whose text content includes the search value.
 *
 * @example
 * // Assuming there is an input element with id 'searchBar' and multiple card elements in your HTML.
 * searchBar();
 * // Typing in the 'searchBar' will dynamically filter and show only those cards whose text includes the typed value.
 */

export async function searchBar() {
  const inputElement = document.getElementById('searchBar');
  inputElement.addEventListener('keyup', function () {
    var value = this.value.toLowerCase();
    const containers = document.querySelectorAll('.card');
    containers.forEach(function (container) {
      const text = container.textContent.toLowerCase();
      if (text.indexOf(value) > -1) {
        container.style.display = '';
      } else {
        container.style.display = 'none';
      }
    });
  });
}
