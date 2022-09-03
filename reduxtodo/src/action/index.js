export const addToDo=(data)=>
{
    type:"ADD_TODO";
    payload:{
        id: new Date().getTime().toString();
        data:data
    }
}