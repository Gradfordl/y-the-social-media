//users-service.js
import * as usersAPI from "./users-api";

//formData is now userData
export async function signUp(userData) {
  // Delegate the network request code to the users-api.js API module
  // which will ultimately return a JSON Web Token (JWT) from the backend

  //this is the frontend receiving the response from the backend(token) and persisting (STEP 3)
  const token = await usersAPI.signUp(userData);
  //persisting the token
  localStorage.setItem("token", token);

  //localstorage can only store strings. You have to manually parse to other datatypes upon retrieval.
  // Baby step by returning whatever is sent back by the server
  // return token;

  return getUser()
}

export async function updateUser(credentials) {
  const updatedUser = await usersAPI.update(credentials)
}

export async function login(credentials) {
  const token = await usersAPI.login(credentials)

  localStorage.setItem("token", token);

  return getUser()
}

export function getToken() {
  const token = localStorage.getItem("token");
  // getItem returns null if there's no string
  if (!token) return null;
  // Obtain the payload of the token
  const payload = JSON.parse(atob(token.split(".")[1]));
  // A JWT's expiration is expressed in seconds, not milliseconds, must convert
  if (payload.exp < Date.now() / 1000) {
    // Token has expired - remove it from localStorage
    localStorage.removeItem("token");
    return null;
  }
  return token
}

export function getUser() {
  const token = getToken() // either returns token or null

  // If there's a token, return the user in the payload, otherwise return null
  return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

export function logOut() {
  localStorage.removeItem("token");
}

export function checkToken() {
  // Just so that you don't forget how to use .then
  return usersAPI.checkToken()
    // checkToken returns a string, but let's
    // make it a Date object for more flexibility
    .then(dateStr => new Date(dateStr));
}

export async function deleteUser(credentials) {

  await usersAPI.deleteUser(credentials);
}

// export function createPost() {

// }