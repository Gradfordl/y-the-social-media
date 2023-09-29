import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"
import AuthPage from "../AuthPage/AuthPage.jsx";
import NavBar from "../../components/NavBar/NavBar.jsx";
import { getUser } from "../../utilities/users-service";
import ProfilePage from "../ProfilePage/ProfilePage";
import HomePage from "../HomePage/HomePage";
import NewPost from "../NewPost/NewPost";
import Settings from "../Settings/Settings"
import * as postsService from "../../utilities/posts-service"

function App() {
  const [user, setUser] = useState(getUser());
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        // console.log("hi")
        const retrievedPosts = await postsService.getPosts();
        setPosts(retrievedPosts);
        // console.log(posts);
      } catch (err) {
        console.log(err);
      }
    } 
    fetchPosts();
  }, []);

  return (
    <main className="App">
      {
        user ? 
        <>
        {/* import NavBar outside of Routes because it'll always display */}
        <NavBar user={user} setUser={setUser} />
        {/* Because App defines all routes we import & use Route Component */}
        <Routes>
          //define the route to the desired Component
          <Route path="/profile" element={<ProfilePage user={user} setUser={setUser} posts={posts} setPosts={setPosts}/>} />
          <Route path="/" element={<HomePage user={user} setUser={setUser} posts={posts} setPosts={setPosts}/>} />
          <Route path="/new-post" element={<NewPost user={user} /> }/>
          <Route path="/settings" element={<Settings user={user} setUser={setUser}  />} />
        </Routes>
        </>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

export default App;
