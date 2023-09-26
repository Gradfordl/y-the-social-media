export default function ProfilePage({user, setUser}) {

    return (
  <div>
    <h1>USER PROFILE</h1>
    <p>{user.name}</p>
    {/* <img src={user.image} alt="PROFILE PIC" /> */}
  </div>
    );
  }