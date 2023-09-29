import { getToken } from "./users-service";
import sendRequest from "./send-request";

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

export function update(credentials) {
  return sendRequest(BASE_URL, "PUT", credentials)
}
