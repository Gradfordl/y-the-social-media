import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as usersService from "../../utilities/users-service";

export default function UpdateUser({ user, setUser }) {
  const navigate = useNavigate()
    const [credentials, setCredentials] = useState({
        name: user.name,
        id: user._id,
        image: user.image,
        email: user.email
    })
  const [error, setError] = useState("");

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  }
                                     
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
    // console.log(credentials);
      const updatedUser = await usersService.updateUser(credentials);
      setUser(updatedUser);
      navigate("/profile")
    } catch (err) {
      setError(err);
      console.log(error);
    }
  };
  return (
    <div className="form-container">
      <form autoComplete="off" onSubmit={handleSubmit}>
            <label>Update Name</label>
            <input
              type="text"
              name="name"
              value={credentials.name}
              onChange={handleChange}

            /> <br/>
            <label>Update Image</label>
            <input
              type="text"
              name="image"
              value={credentials.image}
              onChange={handleChange}

            /><br/>
            <label>Update Email</label>
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}

            /><br/>
            <button type="submit">
              Submit Changes
            </button>
      </form>
    </div>
  );
}
