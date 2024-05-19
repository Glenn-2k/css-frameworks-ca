/**
 * Converts a date string into a human-readable relative time description.
 *
 * @param {string} dateString - The date string to convert, in ISO 8601 format.
 * @returns {string} A string representing how much time has passed since the given date.
 *
 * @example
 * // If the current date is "2023-05-07T12:00:00Z"
 * const result = timeSince("2023-05-07T08:00:00Z");
 * console.log(result); // Outputs "4 hours ago"
 *
 * @example
 * // If the current date is "2024-05-07T12:00:00Z"
 * const result = timeSince("2023-05-07T12:00:00Z");
 * console.log(result); // Outputs "1 year ago"
 */

export function timeSince(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);

  let interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + ' years ago';
  }

  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + ' months ago';
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + ' days ago';
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + ' hours ago';
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + ' minutes ago';
  }

  return Math.floor(seconds) + ' seconds ago';
}
