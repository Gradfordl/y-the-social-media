import Post from "../../components/Post/Post";
import DeleteUser from "../../components/DeleteUser/DeleteUser";
import { useEffect } from "react";


export default function ProfilePage({user, setUser}) {
  useEffect(() => {
    document.title = "Profile | Y";  
  }, []);

    return (
  <div>
    <h1>USER PROFILE</h1>
    {/* <Post/> */}
    {/* <DeleteUser/> */}
  </div>
    );
  }