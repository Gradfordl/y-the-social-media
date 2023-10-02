import { Link } from 'react-router-dom';
import * as userService from "../../utilities/users-service"

export default function NavBar({user, setUser}) {

  const handleLogOut = () => {
    userService.logOut();
    setUser(null)
  }
  return (
    <nav className='topnav' >
      <ul >
      <h4>Hey, {user.name}</h4>
      <li><Link to="/" className='link' >HOME</Link></li>{" "}
      <li><Link to="/profile" className='link'>PROFILE</Link></li>{" "}
      <li><Link to="/new-post" className='link'>TELL US Y</Link></li>{" "}
      <li><Link to="/settings" className='link'>SETTINGS</Link></li>{" "}
      <li><Link to="/"onClick={handleLogOut} className="link" >LOG OUT</Link></li>
      </ul> <br/>
    </nav>
  );
}