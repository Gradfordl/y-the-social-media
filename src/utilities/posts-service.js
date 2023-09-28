import * as postAPI from "./posts-api";


export async function createPost(postData) {

  const post = await postAPI.create(postData);

  console.log(post)
} 

export async function getPosts() {

  const posts = await postAPI.getPostHistory()
  return posts
}
