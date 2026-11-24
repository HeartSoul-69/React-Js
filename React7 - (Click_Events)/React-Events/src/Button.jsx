function Button () {
    const HandleClick = () => {
        console.log("Click mat kar Love-day")
    }

    const handleClick2 = (name) => {
        console.log(`${name} click mat kar `)
    }

    return ( <>
                <button id="Button" onClick={HandleClick} >Click Me !!!</button>
                <br></br> <br></br>
                <button id="Button" onClick={() => handleClick2("Anurag")} >Click Me !!!</button>
            </>    
    )
}

export default Button;