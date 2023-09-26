import { Link } from 'react-router-dom';
import * as userService from "../../utilities/users-service"

export default function NavBar({user, setUser}) {

  const handleLogOut = () => {
    userService.logOut();
    setUser(null)
  }
  return (
    <nav>
      <aside>
      <h1>Welcome, {user.name}</h1>
      <Link to="/" >HOME</Link>
      &nbsp; | {" "}
      <Link to="/profile">PROFILE</Link>
      <br/>
      <Link to="" onClick={handleLogOut} >LOG OUT</Link>
      </aside>
    </nav>
  );
}