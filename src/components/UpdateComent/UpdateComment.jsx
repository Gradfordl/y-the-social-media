import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as CommentsAPI from "../../utilities/comments-api";


export default function UpdateComment({ comment, setComment }) {
    const navigate = useNavigate()
  const [credentials, setCredentials] = useState({
    text: comment.text,
    id: comment._id,
  });
  const [error, setError] = useState("");

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      // console.log(credentials);
      const updatedComment = await CommentsAPI.updateComment(credentials);
      setComment(updatedComment);     
      console.log("no luck")
      navigate("/")
 
    } catch (err) {
      setError(err);
      console.log(error);
    }
  };

  return (
    <div className="update-comment">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label>Update Text</label>
        <input
          type="text"
          name="text"
          value={credentials.text}
          onChange={handleChange}
          required
        />{" "}
        <br />
        <button type="submit">Submit Changes</button>
      </form>
    </div>
  );
}
