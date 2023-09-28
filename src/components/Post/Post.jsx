import { useState, useEffect } from "react";
import * as postsService from "../../utilities/posts-service";
import styles from "./Post.module.css";

export default function Post({user, setUser}) {
  const [posts, setPosts] = useState([]);

  // setup eventHandlers to increment post likes and display post comments


  //need to specify find to logged in user
  useEffect(() => {
    async function fetchPosts() {
      try {
        const retrievedPosts = await postsService.getPosts();
        setPosts(retrievedPosts);
        console.log(posts);
      } catch (err) {
        console.log(err);
      }
    }
    fetchPosts();
  }, []);

  return (
    <div>
      <ul>
        {!posts.length
          ? "No Posts"
          : posts.map((post) => {
              return (
                <div className="feed" key={post._id}>
                  <div>
                    <img src={post.image} alt="img" />
                  </div>
                  <div>
                    <p>{post.text}</p>
                  </div>
                  <div className="btn-container"> 
                    <a href="#">Likes ({posts.likes}) </a>
                    <a href="#">Comments {post.comments}</a>
                  </div>
                </div>
              );
            })}
      </ul>
    </div>
  );
}
