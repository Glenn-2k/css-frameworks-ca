import { authFetch } from '../authFetch.mjs';
import { API_SOCIAL_URL } from '../constants.mjs';

const action = '/posts';
const method = 'DELETE';

export async function removePost(id) {
  const removeURL = `${API_SOCIAL_URL}${action}/${id}`;

  const response = await authFetch(removeURL, {
    method,
  });

  return await response.json();
}

// export function deletePost() {
//   const thrashIcon = document.querySelector('trash-icon');

//   thrashIcon.addEventListener('click', async (event) => {
//     try {
//       const response = await removePost(postData.id);
//       if (response.ok) {
//         console.log('post deleted');
//         post.remove();
//       } else {
//         console.log('post not deleted');
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   });
// }
