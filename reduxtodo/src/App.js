import {useState} from "react";
import {useSelector,useDispatch} from "react-redux";
import {addToDo,deleteToDo} from "./action/index"
function App() {
  const [inputValue,setInputValue]=useState('');
  const dispatch=useDispatch();
  const list=useSelector((data)=>data.toDoReducer.list)
  console.log({list})
  return (
    <div className="App">
     <input type="text"  value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
     <button 
     onClick={()=>dispatch(addToDo(inputValue),
     setInputValue(""))
     }
     >Add</button>
     {list.map((item)=>
    {
      return(
        <div key={item.id}>
        <p>{item.data}</p>
        <button onClick={()=>dispatch(deleteToDo(item.id))}>Delete</button>
        </div>
      )
    }
     )}
    </div>
  );
}

export default App;
