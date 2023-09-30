import { useState } from "react";

export default function CommentList({ post }) {
  //get-all comments for post
  const [comments, setComments] = useState(post.comments);

  return (
    <div>
      {comments.length ? (
        <div className="comment-list">
          {comments.map((comment) => {
            return (
              <div key={comment._id} className="comment" >
                {comment.author ?
                <h5>Posted by: {comment.author}</h5> 
              : <p>no author info</p>
              }
                
                <p>{comment.text}</p>
                <p>likes ({comment.likes})</p>
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
