import ProfileImage from './assets/ProfileImage.jpg'

function Profile () {

    const handleClick = (e) => {
        e.target.style.display = "none";
    }

    return (<img width="200px" src={ProfileImage} onClick={(e) => handleClick(e)}/>)
}

export default Profile;