import { useState } from "react";

function Counter () {
    let [count , setCount] = useState(0);

    const IncreaseNum = () => {
        setCount(count+1)
    }

    const ResetNum = () => {
        setCount(0);
    }

    const MinusNum = () => {
        setCount(count-1);
    }

    return( 
        <div className="Counter">
            <h1 className="Heading">Counter</h1>
            <h2>{count}</h2>

            <div className="Buttons" style={{gap : 15 , display: "flex"}}>
                <button onClick={IncreaseNum}>Increase</button>
                <button onClick={ResetNum}>Reset</button>
                <button onClick={MinusNum}>Decrease</button>
            </div>
            
        </div>
    );
}

export default Counter;