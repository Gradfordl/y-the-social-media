export default function Profile({ user, setUser}) {
    return (
        <div className="profile-insert" >
            <div>
                {user.image ? <img src={user.image} className="profile-pic"/> : ""}
            </div>
            <h2>{user.name}'s profile</h2>
            
        </div>
    )
}