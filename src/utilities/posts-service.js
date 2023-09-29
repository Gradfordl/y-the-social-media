import * as postAPI from "./posts-api";


export async function createPost(postData) {

  const post = await postAPI.create(postData);

  // console.log(post)
} 

export async function getPosts() {

  const posts = await postAPI.getPostHistory()
  return posts
}

export async function getUserPosts() {

  const posts = await postAPI.getUserPosts()
  return posts
}

export async function deletePost(postId) {

 await postAPI.deletePost(postId);

} 

export async function updatePost(credentials) {

  await postAPI.updatePost(credentials);
 
 } 