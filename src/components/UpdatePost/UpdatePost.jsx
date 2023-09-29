import { useState } from "react";
import * as postsService from "../../utilities/posts-service";

export default function UpdatePost({ post, setPost }) {
    const [credentials, setCredentials] = useState({
        image: post.image,
        text: post.text,
        id: post._id
    })
  const [error, setError] = useState("");

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  }
                                     
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
    // console.log(credentials);
      const updatedPost = await postsService.updatePost(credentials);
      setPost(updatedPost)
    } catch (err) {
      setError(err);
      console.log(error);
    }
  };
  return (
    <div className="form-container">
      <form autoComplete="off" onSubmit={handleSubmit}>
            <label>Update Text</label>
            <input
              type="text"
              name="text"
              value={credentials.text}
              onChange={handleChange}
              required
            /> <br/>
            <label>Update Image</label>
            <input
              type="text"
              name="image"
              value={credentials.image}
              onChange={handleChange}
            /><br/>
            <button type="submit">
              Submit Changes
            </button>
      </form>
    </div>
  );
}
