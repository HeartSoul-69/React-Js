import { useState } from "react";
import Profile from "./assets/Profile.jpg"

function SignIn () {
    let [IsHidden , setIsHidden] = useState(false);

    const ToggleEvent = () => {
        if (IsHidden == false) {
            setIsHidden(true)
        }
        else {
            setIsHidden(false)
        }
    }

    return (
        <>
            <div className="Card">
                <div className="Card-Content">
                    <img className="ProfilePic" height="100px" max-width="100px" src={Profile} alt="Profile-Img" />

                    <input className="Email" type="text" placeholder="Email" />

                    <div className="Password-Container">
                        <input className="Pass" type={IsHidden ? "text" : "password"}placeholder="Password"/>
                        <button className="Hide" onClick={ToggleEvent}>{IsHidden ? "Hide" : "Show"}</button>
                    </div>
                    
                    <button className="Signin">Sign In</button>
                </div>
            </div>
        </>
    );
}

export default SignIn;