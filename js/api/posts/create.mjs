import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../constants.mjs";

const action = "/posts";
const method = "post"

export async function createPost(postData) {
    const createURL = API_SOCIAL_URL + action;

    const response = await authFetch(createURL, {
        method,
        body: JSON.stringify(postData),
    })   

    return await response.json();


}