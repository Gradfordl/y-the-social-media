import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DeleteUser from "../../components/DeleteUser/DeleteUser";
import UpdateUser from "../../components/UpdateUser/UpdateUser";



export default function Settings({user, setUser}) {
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = "Settings | Y";  
  }, []);

    return (
  <div>
    <h1>EDIT ACCOUNT</h1>
    <UpdateUser user={user} setUser={setUser} />
    <h3>DELETE ACCOUNT</h3>
    <DeleteUser user={user}/>
    <div><button onClick={() => navigate(-1)}>Back</button></div>
  </div>
    );
  }