import Post from "../../components/Post/Post";
import { useEffect } from "react";


export default function ProfilePage({user, setUser}) {
  useEffect(() => {
    document.title = "Profile | Y";  
  }, []);

    return (
  <div>
    <h1>USER PROFILE</h1>
    <img src={user.image} />
  </div>
    );
  }