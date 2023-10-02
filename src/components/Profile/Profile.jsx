export default function Profile({ user, setUser}) {

    const date = user.createdAt

    return (
        <div className="profile-insert" >
            <div>
                {user.image ? <img src={user.image} className="profile-pic"/> : ""}
            </div>
            <h2>{user.name}'s profile</h2>
            <p>Member since: {date}</p>
        </div>
    )
}