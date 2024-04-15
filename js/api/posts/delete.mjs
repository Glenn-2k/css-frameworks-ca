import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../constants.mjs";

const action = "/posts";
const method = "delete"

export async function removePost(id) {
    const removeURL = `${API_SOCIAL_URL}${action}/${id}`;

    const response = await authFetch(removeURL, {
        method,
    })   

    return await response.json();


}