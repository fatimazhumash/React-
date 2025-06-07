function ProfileCard(props){
    return(
        <div className="profile-card">
            <h1>Profile Card</h1>
            <img src={props.image} alt="profile" width="120" height="60"/>
            <h2>Name:{props.name}</h2>
            <p>Bio:{props.bio}</p>

        </div>
    )
} 
export default ProfileCard