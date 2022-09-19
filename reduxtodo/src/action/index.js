export const addToDo=(data,status)=>
{
    return {
        type:"ADD_TODO",
        payload:{
            id: new Date().getTime().toString(),
            data:data,
            status:status
        }
    }
   
}

export const deleteToDo=(id)=>
{
    return {
        type:"DELETE_TODO",
        id:id
    }
   
}

export const removeAllTodo=(id)=>
{
    return {
        type:"REMOVE_ALL_TODO",
       
    }
   
}