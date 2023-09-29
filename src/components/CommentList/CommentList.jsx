import { useState } from "react";

export default function CommentList({ post }) {
  //get-all comments for post
  const [comments, setComments] = useState(post.comments);

  return (
    <div>
      {/* {comments.length ? (
        <div className="comment-list">BEGIN COMMENT LIST</div>
      ) : (
        "No comments"
      )} */} HELP
    </div>
  );
}
