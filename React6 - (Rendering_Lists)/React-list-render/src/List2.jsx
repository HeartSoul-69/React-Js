function List2 () {
    const Foods = [{id : 1 , name : "Burgir" , price : 40},
                  { id : 2 ,name : "Momos"  , price : 60} ,
                  { id : 3 ,name : "Pizza"  , price : 70},
                  { id : 4 ,name : "Spring-Roll", price : 30},
                  { id : 5 ,name : "Hot-Dog", price : 90},
    ]

    //Foods.sort((a,b) => (a.name.localeCompare)(b.name)); //ALPHABETICAL
    //Foods.sort((a,b) => (b.name.localeCompare) (a.name)); //REVERSE ALPHABETICAL
    //Foods.sort ((a,b) => (a.price - b.price))  //NUMERIC 
    //Foods.sort ((a,b) => (b.price - a.price))  //REVERSE NUMERIC 

    // const CheapFoods = (Foods.filter( Food => Food.price < 50))   //FILTER 
    // const ExpensiveFoods = (Foods.filter( Food => Food.price < 50))   //FILTER 



    const ListItems = Foods.map((Food) => <li key={Food.id}>
                                        {Food.name} : &nbsp;
                                        <b>{Food.price}</b>
                    </li> )

    // const ListItems = CheapFoods.map((CheapFood) => <li key={CheapFood.id}>
    //                                                 {CheapFood.name} : &nbsp;
    //                                                 <b>{CheapFood.price}</b>
    //                 </li> )

    return <ol>{ListItems}</ol> 

}

export default List2;