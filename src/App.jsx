
import './App.css'
import { useState } from "react";

function App() {
const [person, setPerson] = useState("abdelouahab");
const [age, setAge] = useState(22);
let [counter, setCounter] = useState(0);
 




const setage = () => { setAge(100) ,document.getElementById("age").style.color = "pink"}
  return (
    <>
      <h1 id='txt'>Hi my name is {person}</h1> 
      <button id='btn1' onClick={() => {setPerson("SAMADI"), document.getElementById("txt").style.color = "pink" }}>change name</button>

      <br />
      <br />

      <h1 id='age'>Hi my age is {age}</h1> 
      <button id='btn2' onClick={setage}>change age</button>

      <br />
      <br />

      <button id='btn3' onClick={() => {setCounter(counter+1)}}>counter is {counter}</button>
    </>
  )
}

export default App



// f jsx lvariable kidar haka {variable}

// let person = "abdelouahab"
//  const changeName = () => { person = "ali hassan" , console.log(` new name is ${person}`); document.getElementById("txt").style.color = "blue"}
// 3la ma fhemt lhad l2an f lblassa dyal java script mn l2a7ssen n5edmo b functions f ay haja, w ghaliban 3la makibanli dak addEventLis.. ghat3awed b onclick 
// w dak document.getEleme.... kan5edmo biha 3adi ghir houa ymkn kayna xi hwayej li ana mazal ma 3rafthoom 
// khssni n3raf kifah n5adem eo.trget m3a onclick blast ma nbqa ndir kol mera document.getElementById("")