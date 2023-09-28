const BASE_URL = '/api';

export function create(postData) {
  return sendRequest(`${BASE_URL}/posts`, 'POST', postData);
}

export function getPostHistory(){
  return sendRequest(`${BASE_URL}/posts`)
}


export async function sendRequest(url, method = 'GET', payload = null) {

    const options = { method };
    if (payload) {
      options.headers = { 'Content-Type': 'application/json' };
      options.body = JSON.stringify(payload);
    }
  
    const backendResponse = await fetch(url, options);
    // backendResponse.ok will be false if the status code set to 4xx in the controller action
    if (backendResponse.ok) return backendResponse.json();
    throw new Error('Bad Request');
  }