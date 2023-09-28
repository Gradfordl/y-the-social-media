import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./NewPost.module.css";
import { createPost } from "../../utilities/posts-service"

export default function NewPost({ user }) {
  const [post, setPost] = useState({
    text: "",
    image: ""
  });
  // const [error, setError] = useState("")
  useEffect(() => {
    document.title = "New Post | Y";  
  }, []);

 function handleChange(evt){
    setPost({...post, [evt.target.name]: evt.target.value});
    // setError("")
  }
const handleSubmit = async (evt) => {
    //need to set form fields to state and use to create post in database
    evt.preventDefault();
    console.log(" create post form submitted");
    try { 

      const postData = { ...post };
      const createdPost = await createPost(postData);
      console.log(createdPost)
      setPost(createdPost)
    } catch (err) {
      // setError(err);
      console.log(err)
    }
  };

 

  return (
    <div className="new-post">
      <div>
        <h1 className="title">Tell Us Y</h1>
      </div>
      <div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label>Post Text: </label>
          <textarea name="text" value={post.text} rows={5} cols={50} onChange={handleChange}/>
          <br />

          <label>Image url (Optional): </label>
          <input name="image" value={post.image} className={styles.input} onChange={handleChange} cols={50} />
          <br />

          <button type="submit">
            Create Post
          </button>
        </form>
      </div>
      <br />
      {/* <div><Link to="/profile">Back</Link></div> */}
    </div>
  );
}
