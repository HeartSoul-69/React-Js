//props = read only properties that are shared between components. 
//A parent component can send data to a child component.
// <component key=value />

//Proptypes = a mechanism that ensures that the passed value is of the correct data type 
//age: Proptypes Number

//default Props = default values for props occurs in case no value is passed from the parent component eg-> name:"Guest"

import Student from './Student.jsx'

function App() {
  return(
    <>
      <Student name = "Anurag" age = {20} isStudent={true} />
      <Student name = "Kunal" age = {18} isStudent={false} />
      <Student name = "Subhatit" age = {24} isStudent={true} />
      <Student/>
    </>
  );
}



export default App;