import {useState} from 'react';

function MyComponent() {
    let [Name,setName] = useState("Guest");
    let [Age, setAge]  = useState(0);

    const NaamChange = () =>  {
        setName("Anuarg")
    }

    const AgeChange = () => {
        setAge(Age+2)
    }

    const AgeChange2 = () => {
        setAge(Age-1)
    }
    

    return (
        <div>
            <p>Name : {Name}</p>
            <button onClick={NaamChange}>CLICK ME !!</button>
            
            <p>Age  : {Age}</p>
            <button onClick={AgeChange} style={{marginRight : "10px"}}>CLICK ME !!</button> 
            <button onClick={AgeChange2}>CLICK ME !!</button>
        </div>
    );
}

export default MyComponent; 