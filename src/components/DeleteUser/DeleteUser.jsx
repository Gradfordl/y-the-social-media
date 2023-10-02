import { useState } from "react";
import * as usersService from "../../utilities/users-service";
import { useNavigate} from "react-router-dom";

export default function DeleteUser({ user, setUser }) {
  const navigate = useNavigate()
  const [credentials, setCredentials] = useState({
    email: "",
  });
  const [error, setError] = useState("");

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  }
  const handleLogOut = () => {
    usersService.logOut();
    setUser(null);
    navigate("/")
  };
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const user = await usersService.deleteUser(credentials);
      alert("User Deleted")
      handleLogOut();
    } catch {
      setError("Unable to delete");
    }
  }
  return (
    <div className="form-container">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label>Confirm email to delete:</label>
        <input
          type="text"
          name="email"
          value={credentials.email}
          onChange={handleChange}
          required
        />
        <button type="submit">DELETE PROFILE</button>
      </form>
    </div>
  );
}
