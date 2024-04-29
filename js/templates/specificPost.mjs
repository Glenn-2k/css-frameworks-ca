import { postTemplate } from './post.mjs';
import { getPost } from '../api/posts/read.mjs';

export async function runSpecificPost() {
  const post = await getPost();
  const postElement = postTemplate(post);
  document.body.appendChild(postElement);
}
