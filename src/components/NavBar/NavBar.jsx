import { Link } from 'react-router-dom';
import * as userService from "../../utilities/users-service"
import styles from "./NavBar.module.css"

export default function NavBar({user, setUser}) {

  const handleLogOut = () => {
    userService.logOut();
    setUser(null)
  }
  return (
    <nav>
      <ul className={styles.ul}>
      <h1>Welcome, {user.name}</h1>
      <li><Link to="/" className={styles.li} >HOME</Link></li>
      <li><Link to="/profile" className={styles.li}>PROFILE</Link></li>
      <li><Link to="/new-post" className={styles.li}>TELL US Y</Link></li>
      <li><Link to="/settings" className={styles.li}>SETTINGS</Link></li>
      <br/>
      <br/>
      <li><Link to="/" className={styles.li} onClick={handleLogOut} >LOG OUT</Link></li>
      </ul>
    </nav>
  );
}