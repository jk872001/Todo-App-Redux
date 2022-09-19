import {useState} from "react";
import {useSelector,useDispatch} from "react-redux";
import {addToDo,deleteToDo,removeAllTodo} from "./action/index"
import {Interview} from "./Interview"
function App() {
  // const [inputValue,setInputValue]=useState('');
  // const [taskStatus,setTaskStatus]=useState(false);
  // const dispatch=useDispatch();
  // const list=useSelector((data)=>data.toDoReducer.list)
  //  localStorage.setItem("allList",JSON.stringify(list));

  //  const show=JSON.parse(localStorage.getItem("allList"));
  //  console.log({list});
  
  return (
    // <div className="App">
    //  <input type="text"  value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
    //  <button 
    //  onClick={()=>dispatch(addToDo(inputValue,taskStatus),
    //  setInputValue(""))
    //  }
    //  >Add</button>
    //  <button onClick={()=>dispatch(removeAllTodo())} >Delete All</button>
    //  {list.map((item)=>
    // {
    //   return(
    //     <div key={item.id}>
    //     <input type="checkbox" value={taskStatus} onChange={()=>setTaskStatus(!taskStatus)}/>
    //     <p>{item.data}</p>
    //     {
    //       item.status===false ?<p>Incomplete</p>:<p>Complete</p>
    //     }
    //     <button onClick={()=>dispatch(deleteToDo(item.id))}>Delete</button>
    //     </div>
    //   )
    // }
    //  )}
    // </div>
    <div>
      <Interview/>
    </div>
  );
}

export default App;
