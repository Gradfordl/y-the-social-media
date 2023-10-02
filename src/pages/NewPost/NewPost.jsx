import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../utilities/posts-service"

export default function NewPost({ user }) {
  const navigate = useNavigate()
  const [post, setPost] = useState({
    text: "",
    image: "",
    author: user.name,
    user: user
  });
  const [error, setError] = useState("")
  useEffect(() => {
    document.title = "New Post | Y";  
  }, []);

 function handleChange(evt){
    setPost({...post, [evt.target.name]: evt.target.value});
    setError("")
  }
const handleSubmit = async (evt) => {
    //need to set form fields to state and use to create post in database
    evt.preventDefault();
    // console.log(" create post form submitted");
    try { 
      const postData = { ...post };
      const createdPost = await createPost(postData);
      console.log(createdPost)
      setPost(createdPost)
      navigate("/")
    } catch (err) {
      setError(err);
      console.log(error);
    }
  };
  
//REDIRECT AFTER CREATING POST
  return (
    <div className="new-post">
      <div>
        <h1 className="title">Tell Us Y</h1>
      </div>
      <div>
        <form  onSubmit={handleSubmit}>
          <label>Post Text: </label>
          <textarea name="text" value={post.text} rows={5} cols={50} onChange={handleChange}/>
          <br />

          <label>Image url (Optional): </label>
          <input name="image" value={post.image}  onChange={handleChange} cols={50} />
          <br />

          <button type="submit">
            Create Post
          </button> 
        </form>
      </div>
      <br />
      <div><button onClick={() => navigate(-1)}>Back</button></div>
    </div>
  );
}
