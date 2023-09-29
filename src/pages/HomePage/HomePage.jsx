import { useState, useEffect} from "react"
import * as postsService from "../../utilities/posts-service"



export default function HomePage({ user, setUser}) {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      document.title = "Home | Y";  
      try {
        const retrievedPosts = await postsService.getPosts();
        setPosts(retrievedPosts);
        // console.log(posts);
      } catch (err) {
        console.log(err);
      }
    } 
    fetchPosts();
  }, []);

    return (
      <div>
        <h1>HOME</h1>
        <div>
      <ul>
        {!posts.length
          ? "No Posts"
          : posts.map((post) => {
              return (
                <div className="feed" key={post._id}>
                  <div className="img-container">
                    {post.image ? <img src={post.image} /> : "" }
                  </div>
                  <div>
                    <p>{post.text}</p>
                  </div>
                  <div className="btn-container"> 
                    <a href="#">Likes ({post.likes}) </a>
                    <a href="#">Comments {post.comments}</a>
                  </div>
                </div>
              );
            })}
      </ul>
    </div>
        
      </div>
    );
  }