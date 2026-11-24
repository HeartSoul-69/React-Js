function Button2() {
    let count = 0;
    const handleClick = (name) => {
        if (count<3) {
            count++;
            console.log(`Ayyooo ${name} bro stop touchig me` )
        }
        else {
            console.log(`Bss krr komedy king, already ${count} baar dabba chuka hai`);
        }
    }

    return (
            <button onClick={ () => handleClick("Anurag")}>Dabayiyo Mat love day</button>
    );
}

export default Button2;