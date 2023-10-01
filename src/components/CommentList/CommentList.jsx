import { useState } from "react";
import UpdateComment from "../UpdateComent/UpdateComment";
import * as commentsAPI from "../../utilities/comments-api"

export default function CommentList({ post, user }) {
  //get-all comments for post
  const [comments, setComments] = useState(post.comments);
  const [currentUser, setCurrentUser] = useState({
    name: user.name,
  });

  async function deleteComment(id, author, text) {
    try {
      await commentsAPI.deleteComment(id, author, text);
      alert("comment Deleted");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      {comments.length ? (
        <div className="comment-list">
          {comments.map((comment) => {
            return (
              <div key={comment.text} className="comment">
                {comment.author ? (
                  <h5>Posted by: {comment.author}</h5>
                ) : (
                  <p>no author info</p>
                )}
                {post._id} <br/>
                {comment._id}
                <p>{comment.text}</p>
                <p>likes ({comment.likes})</p>
                {comment.author === currentUser.name ? (
                  <div>
                    <UpdateComment comment={comment} />
                    <br/>

                    <button onClick={() => deleteComment(comment._id, comment.author, comment.text)}>
                      Delete this comment
                    </button>
                  </div>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
      ) : (
        "No comments"
      )}
    </div>
  );
}
