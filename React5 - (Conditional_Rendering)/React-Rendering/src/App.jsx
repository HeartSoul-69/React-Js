// Conditional rendering = Allows you to control what gets rendered in your application based on your certain conditions (show, hide , or change components) 

import UserGreeting from "./UserGreeting";


function App () {
    return(
        <>
            <UserGreeting Username = "Anurag" IsLogged = {true}/>
        </>
    );
}

export default App;