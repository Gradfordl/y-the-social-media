import { getToken } from "./users-service";
import sendRequest from "./send-request";

const BASE_URL = '/api/posts';

export function createComment(commentData) {
  return sendRequest(`${BASE_URL}/comments`, 'POST', commentData);
}


export function updateComment(credentials) {
  return sendRequest(`${BASE_URL}/comments`, 'PUT', credentials);
}

// export function getPostHistory(){
//   return sendRequest(BASE_URL)
// }

// export function getUserPosts(){
//   return sendRequest(`${BASE_URL}/user-posts`)
// }

export function deleteComment(id, author, text) {
  return sendRequest(`${BASE_URL}/comments/${id}/${author}/${text}`, 'DELETE');
}



