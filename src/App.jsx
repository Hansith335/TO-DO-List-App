import React, { useState } from 'react'
import ToDoList from './ToDoList.jsx'

const App=()=>{
  const [crrt, setCrrt] = useState("")
  const [Items, setItems] = useState([])

  const inputEvent=(event)=>{
    setCrrt(event.target.value);
  }
  const listOfItems=()=>{
    setItems((oldItems)=>{
        return [...oldItems, crrt];
    })
    setCrrt("");
  }

  const deleteItems=(id)=>{
     setItems((oldItems)=>{
       return oldItems.filter((arrElem, index)=>{
         return index!==id;
       })
     })
  }
  return <>
    <div className="main_div">
     <div className="center_div">
     <br/>
     <h1>To-Do List</h1>
     <br/>
     <input type="text" placeholder="Add an Item" value={crrt} onChange={inputEvent}/>
     <button onClick={listOfItems}>+</button>
     <ol>
        {
          Items.map((itemval, index)=>{
            return <ToDoList key={index} id={index} text={itemval} onSelect={deleteItems}/>
          })
        }
     </ol>

     </div>

    </div>
  </>
}

  export default App;