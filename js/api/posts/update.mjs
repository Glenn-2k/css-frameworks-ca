

import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../constants.mjs";

const action = "/posts";
const method = "put"

export async function updatePost(postData) {
    const updateURL = `${API_SOCIAL_URL}${action}/${postData.id}`;

    const response = await authFetch(updateURL, {
        method,
        body: JSON.stringify(postData),
    })   

    return await response.json();


}