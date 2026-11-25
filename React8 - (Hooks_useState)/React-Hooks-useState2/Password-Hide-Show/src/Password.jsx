import { useState } from "react";

function Password_Hider() {
    let [IsHidden , setIsHidden] = useState(false);

    const ToggleHidden = () => {
        if(IsHidden == false) {
            setIsHidden(true);
        }
        else {
            setIsHidden(false);
        }
    }
    
    return (
        <>
            <h3 className="Heading" style={{fontFamily : "sans-serif"}}>Password Hide hai ya Nahi</h3>
            <div className="Input">
                <input className="password" type = {IsHidden ? "text" : "password"} placeholder="password"/>
                <button  onClick={ToggleHidden}>{IsHidden ? "Hide" : "Show"}</button>
            </div>
        </>
    );
}

export default Password_Hider;