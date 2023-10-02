import { useState } from "react";
import * as postsService from "../../utilities/posts-service";

export default function LikeButton({post}) {
   const [likes, setLikes] = useState(post.likes);
   const [liked, setLiked] = useState(false);


   function Like() {
    liked ? setLikes(likes - 1) : setLikes(likes + 1);
    setLiked(!liked);
   }
   return (
      <button
         onClick={Like}
      >
        Likes ({likes})
      </button>
   );
}