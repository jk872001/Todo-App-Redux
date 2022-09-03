import {useSelector,useDispatch} from "react-redux";

function App() {
  
  const dispatch=useDispatch();
  const list=useSelector((data)=>data.toDoReducer)
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
