import Post from "../../components/Post/Post";
import { useState, useEffect} from "react"


export default function HomePage({user, setUser}) {

  useEffect(() => {
    document.title = "Home | Y";  
  }, []);

    return (
      <div>
        <h1>HOME</h1>
        <Post />
        
      </div>
    );
  }