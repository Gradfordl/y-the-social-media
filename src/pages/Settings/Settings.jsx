import { useEffect } from "react";
import DeleteUser from "../../components/DeleteUser/DeleteUser";
import UpdateUser from "../../components/UpdateUser/UpdateUser";



export default function SettingsPage({user, setUser}) {
  useEffect(() => {
    document.title = "Settings | Y";  
  }, []);

    return (
  <div>
    <h1>EDIT ACCOUNT</h1>
    <UpdateUser user={user} setUser={setUser} />
    <h3>DELETE ACCOUNT</h3>
    <DeleteUser/>
  </div>
    );
  }