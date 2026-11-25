import {useState} from "react";

function Counter () {
    const [Num1,useNum1] = useState(0);
    
    const DoIncrease = () => {
        useNum1(Num1 + 1)
    }

    const DoReset =() => {
        useNum1(0);
    }

    const DoDecrease = () => {
        useNum1(Num1 - 1);
    }
    
    return (
        <div>
            <h1 className="Counter">Counter</h1>
            <h2 className="Heading">{Num1}</h2>
            <div className="Buttons">
                <button onClick={DoIncrease} className="Inc">Increase</button>
                <button onClick={DoReset} className="reset">Reset</button>
                <button onClick={DoDecrease} className="decrease">Decrease</button>
            </div>
        </div>
    )
} 

export default Counter;