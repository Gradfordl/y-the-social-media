import * as postAPI from "./posts-api";

//index
export async function getPosts() {
  const posts = await postAPI.getPostHistory()
  return posts
}

export async function getUserPosts() {
  const posts = await postAPI.getUserPosts()
  return posts
}
//new
export async function createPost(postData) {
  const post = await postAPI.create(postData);
  return post
} 
//delete
export async function deletePost(postId) {
 await postAPI.deletePost(postId);
} 
//update
export async function updatePost(credentials) {
  await postAPI.updatePost(credentials);
 } 
//  export async function updateLikes(likes) {
//   await postAPI.updateLikes(likes)
//  }
