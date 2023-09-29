import { getToken } from "./users-service";
import sendRequest from "./send-request";

const BASE_URL = '/api/posts';

export function createComment(commentData) {
  return sendRequest(`${BASE_URL}/comments`, 'POST', commentData);
}

// export function getPostHistory(){
//   return sendRequest(BASE_URL)
// }

// export function getUserPosts(){
//   return sendRequest(`${BASE_URL}/user-posts`)
// }

// export function deletePost(postId) {
//   return sendRequest(`${BASE_URL}/${postId}`, 'DELETE');
// }

// export function updatePost(credentials) {
//   return sendRequest(BASE_URL, 'PUT', credentials);
// }


