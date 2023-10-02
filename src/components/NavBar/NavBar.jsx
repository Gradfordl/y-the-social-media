import { Link } from 'react-router-dom';
import * as userService from "../../utilities/users-service"

export default function NavBar({user, setUser}) {

  const handleLogOut = () => {
    userService.logOut();
    setUser(null)
  }
  return (
    <nav>
      <ul className='topnav' >
      <h4>Hey, {user.name}</h4>
      <li><Link to="/" >HOME</Link></li>{" "}
      <li><Link to="/profile">PROFILE</Link></li>{" "}
      <li><Link to="/new-post">TELL US Y</Link></li>{" "}
      <li><Link to="/settings">SETTINGS</Link></li>{" "}
      <li><Link to="/"onClick={handleLogOut} className="split" >LOG OUT</Link></li>
      </ul>
    </nav>
  );
}