 const initialState={
    list:[]
 }
 
 export const toDoReducer=(state=initialState,action)=>
 {
    switch(action.type)
    {
        case "ADD_TODO":
            const {id,data}=action.payload;
           return {
            ...state,
            list:[
                ...state.list,
                {
                    id:id,
                    data:data
                }
            ]
           }

           case "DELETE_TODO":
            const Id=action.id
            const newList=state.list.filter((item)=>item.id !== Id);
           return {
            ...state,
            list:newList
           }
           default:return state;

    }
 }