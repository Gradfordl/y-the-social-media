import { useState } from "react"
import * as CommentsAPI from "../../utilities/comments-api"

export default function CreateComment ({post}) {

    const [comment, setComment] = useState({
        text: "",
        id: post._id
      });

     function handleChange(evt){
        setComment({...comment, [evt.target.name]: evt.target.value});
      }
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        console.log(" comment button clicked");
        try { 

          const createdComment= await CommentsAPI.createComment(comment);
          console.log(createdComment)
          // setComment(createdComment)
          //navigate("/")
          
        } catch (err) {
          console.log(err)
        }
      };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <textarea name="text" value={comment.text} onChange={handleChange}/>
                <button>Post Comment</button>
            </form>
        </div>
    )
}