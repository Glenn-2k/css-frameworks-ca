import { runPosts } from '../templates/post.mjs';

export function filterPosts() {
  const checkboxComments = document.getElementById('inlineCheckboxComments');
  const checkboxReactions = document.getElementById('inlineCheckboxReactions');

  checkboxComments.addEventListener('change', runPosts);
  checkboxReactions.addEventListener('change', runPosts);
}
