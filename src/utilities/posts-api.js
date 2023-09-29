import { getToken } from "./users-service";
const BASE_URL = '/api/posts';

export function create(postData) {
  return sendRequest(BASE_URL, 'POST', postData);
}

export function getPostHistory(){
  return sendRequest(BASE_URL)
}

export function getUserPosts(){
  return sendRequest(`${BASE_URL}/user-posts`)
}

export function deletePost(postId) {
  return sendRequest(`${BASE_URL}/${postId}`, 'DELETE');
}

export function updatePost(credentials) {
  return sendRequest(BASE_URL, 'PUT', credentials);
}


async function sendRequest(url, method = 'GET', payload = null) {
  // Fetch takes an optional options object as the 2nd argument
  // used to include a data payload, set headers, etc.
  const options = { method };
  if (payload) {
    options.headers = { 'Content-Type': 'application/json' };
    options.body = JSON.stringify(payload);
  }
  const token = getToken();
  if (token) {
    // Ensure headers object exists
    options.headers = options.headers || {};
    // Add token to an Authorization header
    // Prefacing with 'Bearer' is recommended in the HTTP specification
    options.headers.Authorization = `Bearer ${token}`;
  }
  const res = await fetch(url, options);
  // res.ok will be false if the status code set to 4xx in the controller action
  if (res.ok) return res.json();
  throw new Error('Funky monkey');
}