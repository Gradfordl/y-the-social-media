import { useState } from "react";
import UpdateComment from "../UpdateComent/UpdateComment";

export default function CommentList({ post, user }) {
  //get-all comments for post
  const [comments, setComments] = useState(post.comments);
  const [currentUser, setCurrentUser ] = useState({
    name : user.name
  })

  return (
    <div>
      {comments.length ? (
        <div className="comment-list">
          {comments.map((comment) => {
            return (
              <div key={comment.text} className="comment" >
                {comment.author ?
                <h5>Posted by: {comment.author}</h5> 
              : <p>no author info</p>
              }
                
                <p>{comment.text}</p>
                <p>likes ({comment.likes})</p>

                <div>
                  { comment.author === currentUser.name ? 
                  <UpdateComment comment={comment}/> : ""}
                </div>
                
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
