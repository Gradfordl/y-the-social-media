import { useState, useEffect } from "react";
import * as postsService from "../../utilities/posts-service";
import CommentList from "../../components/CommentList/CommentList";
import CreateComment from "../../components/CreateComment/CreateComment";
import LikeButton from "../../components/LikeButton/LikeButton";

export default function HomePage({ user, setUser }) {
  const [posts, setPosts] = useState([]);
  const [showComment, setShowComment] = useState(false);

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
                    {post.image ? (
                      <div className="img-container">
                        <img src={post.image} alt="img" />
                      </div>
                    ) : (
                      ""
                    )}
                    <div>
                      <p>{post.text}</p>
                      <h4>posted by: {post.author}</h4>
                    </div>
                    <div className="btn-container">
                      <LikeButton post={post}/>
                      <button onClick={() => setShowComment(!showComment)}>
                        Comments ({post.comments.length})
                      </button>
                    </div>
                    {showComment ? (
                      <div>
                        <CommentList post={post} user={user} />
                      </div>
                    ) : (
                      ""
                    )}
                    <CreateComment post={post} user={user} />
                  </div>
                );
              })}
        </ul>
      </div>
    </div>
  );
}
