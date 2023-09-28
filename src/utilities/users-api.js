import { getToken } from "./users-service";

//base url for all express requests
const BASE_URL = '/api/users';

export function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}

export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

export function checkToken () {
  return sendRequest(`${BASE_URL}/check-token`);
}

export function deleteUser(credentials) {
  return sendRequest(BASE_URL, 'DELETE', credentials)
}

/*--- Helper Functions ---*/

export async function sendRequest(url, method = 'GET', payload = null) {
  // Fetch accepts an options object as the 2nd argument
  // used to include a data payload, set headers, etc.

  //Here we are creating the second argument for our fetch request (backendResponse)
  const options = { method };
  if (payload) {
    options.headers = { 'Content-Type': 'application/json' };
    options.body = JSON.stringify(payload);
  }

  const token = getToken();
  if (token) {
    // Ensure the headers object exists
    options.headers = options.headers || {};
    // Add token to an Authorization header
    // Prefacing with 'Bearer' is recommended in the HTTP specification
    options.headers.Authorization = `Bearer ${token}`;
  }

  const backendResponse = await fetch(url, options);
  // backendResponse.ok will be false if the status code set to 4xx in the controller action
  if (backendResponse.ok) return backendResponse.json();
  throw new Error('Bad Request');
}