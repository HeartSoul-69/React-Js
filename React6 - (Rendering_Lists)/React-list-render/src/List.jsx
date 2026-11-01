function List () {
    const fruits = ["Apple","Banana","Guava","Litchi"];

    const ListItems = fruits.map(fruit => <li>{fruit}</li>)

//    return(fruits);        All in same line without     space                               
    
    // return(<ul>{ListItems}</ul>) 
    return(<ol>{ListItems}</ol>) 
}

export default List;