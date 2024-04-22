import { authFetch } from '../authFetch.mjs';
import { API_SOCIAL_URL } from '../constants.mjs';

const action = '/posts';
const method = 'POST';

// export async function submitPost(postData) {
//   const createURL = API_SOCIAL_URL + action;

//   try {
//     const response = await authFetch(createURL, {
//       method: method,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(postData),
//     });
//     const jsonResponse = await response.json();
//     return jsonResponse;
//   } catch (error) {
//     console.error('Error creating post:', error);
//     return null;
//   }
// }

// // initialize form submission

// export function initializePostSubmission() {
//   const createPostForm = document.querySelector('#create-post');
//   if (!createPostForm) {
//     console.error('Create post form not found!');
//     return;
//   }

//   createPostForm.addEventListener('submit', async (event) => {
//     event.preventDefault();
//     const formData = new FormData(createPostForm);
//     const postData = {
//       title: formData.get('title'),
//       body: formData.get('body'),
//     };
//     const result = await submitPost(postData);
//     console.log('Post creation result:', result);
//   });
// }

export function createPost() {
  const createPostForm = document.querySelector('#create-post');

  createPostForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(createPostForm);

    const input = { title: formData.get('title'), body: formData.get('body') };

    try {
      const response = await authFetch(API_SOCIAL_URL + action, {
        method,
        body: JSON.stringify(input),
      });
      if (response) {
        console.log('Post created successfully');
      }
    } catch (error) {
      console.error('Error creating this post:', error);
    }
    setTimeout(() => {
      location.reload();
    }, 500);
  });
}
