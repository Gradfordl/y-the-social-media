import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom"
import AuthPage from "../AuthPage/AuthPage.jsx";
import NavBar from "../../components/NavBar/NavBar.jsx";
import { getUser } from "../../utilities/users-service";
import ProfilePage from "../ProfilePage/ProfilePage";
import HomePage from "../HomePage/HomePage";
import NewPost from "../NewPost/NewPost";
import Settings from "../Settings/Settings"

function App() {
  const [user, setUser] = useState(getUser());

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
          <Route path="/profile" element={<ProfilePage user={user} setUser={setUser}/>} />
          <Route path="/" element={<HomePage user={user} setUser={setUser} />} />
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
