import { useEffect, useState } from "react";
import * as postsService from "../../utilities/posts-service";
import Profile from "../../components/Profile/Profile";
import UpdatePost from "../../components/UpdatePost/UpdatePost";
import CommentList from "../../components/CommentList/CommentList";
import CreateComment from "../../components/CreateComment/CreateComment";

export default function ProfilePage({ user, setUser }) {
  const [posts, setPosts] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [showComment, setShowComment] = useState(false);

  useEffect(() => {
    document.title = "Profile | Y";
    async function fetchPosts() {
      try {
        const retrievedPosts = await postsService.getUserPosts();
        setPosts(retrievedPosts);
        // console.log(posts);
      } catch (err) {
        console.log(err);
      }
    }
    fetchPosts();
  }, []);

  async function deletePost(postId) {
    try {
      await postsService.deletePost(postId);
      alert("post Deleted");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <h1>USER PROFILE</h1>
      <Profile user={user} />
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
                  </div>
                  <div className="btn-container">
                    <button>Likes ({post.likes}) </button>
                    <button onClick={() => setShowComment(!showComment)}>
                      Comments ({post.comments.length})
                    </button>
                  </div>
                  {showComment ? (
                    <div>
                      <CommentList post={post} />
                    </div>
                  ) : (
                    ""
                  )}

                  <CreateComment post={post} user={user} />

                  <button onClick={() => setToggle(!toggle)}>Edit Post</button>
                  {toggle ? (
                    <div className="update-toggle">
                      <UpdatePost post={post} />
                    </div>
                  ) : (
                    ""
                  )}
                  <button onClick={() => deletePost(post._id)}>
                    Delete Post
                  </button>
                </div>
              );
            })}
      </ul>
    </div>
  );
}
