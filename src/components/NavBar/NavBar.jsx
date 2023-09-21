import { Link } from 'react-router-dom';
import * as userService from "../../utilities/users-service"

export default function NavBar({user, setUser}) {

  const handleLogOut = () => {
    userService.logOut();
    setUser(null)
  }
  return (
    <nav>
      <h1>Welcome, {user.name}</h1>
      <Link to="/orders">Order History</Link>
      {/* below are options for leaving a space */}
      &nbsp; | {" "}
      <Link to="/orders/new">New Order</Link>
      <br/>
      <Link to="" onClick={handleLogOut} >Log Out</Link>
    </nav>
  );
}