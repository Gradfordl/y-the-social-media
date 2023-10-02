import { useState } from "react"
import * as CommentsAPI from "../../utilities/comments-api"
import { useNavigate } from "react-router-dom";

export default function CreateComment ({post, user}) {

  const navigate = useNavigate()
    const [comment, setComment] = useState({
        text: "",
        id: post._id,
        author: user.name
      });

     function handleChange(evt){
        setComment({...comment, [evt.target.name]: evt.target.value});
      }
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        console.log(" comment button clicked");
        if (!comment.text) {
          return alert("Please enter a comment before submitting!")
        }
        try { 
          const createdComment= await CommentsAPI.createComment(comment);
          console.log(createdComment)
          // setComment(createdComment)
          navigate("/")
          
        } catch (err) {
          console.log(err)
        }
      };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input name="text" value={comment.text} onChange={handleChange}/>
                <button>Post Comment</button>
            </form>
        </div>
    )
}