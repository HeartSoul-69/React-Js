// import List from "./List";
// import List2 from "./List2";
import List3 from "./List3";

function App () {

  const Foods = [{id : 1 , name : "Burgir" , price : 40},
                  { id : 2 ,name : "Momos"  , price : 60} ,
                  { id : 3 ,name : "Pizza"  , price : 70},
                  { id : 4 ,name : "Spring-Roll", price : 30},
                  { id : 5 ,name : "Hot-Dog", price : 90},
    ]

  const Fruits = [{id : 1 , name : "Apple" , price : 20},
                  { id : 2 ,name : "Banana"  , price : 30} ,
                  { id : 3 ,name : "Orange"  , price : 50},
                  { id : 4 ,name : "Litchi", price : 60},
                  { id : 5 ,name : "Mango", price : 90},
    ]

  return(
    <>
        {/* <List/> */}
        {/* <List2/> */}
        <List3 itemList={Foods} />
        <List3 itemList={Fruits} category = {"Fruitss"}/>
        
    </>
  );
}

export default App;