const initialState = {
  list: [],
};

export const toDoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
       
      const { id, data ,status} = action.payload;
      if(data==='')
      {
        return;
      }
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
            status:status
          },
        ],
        
      };

    case "DELETE_TODO":
      const Id = action.id;
      const newList = state.list.filter((item) => item.id !== Id);
      return {
        ...state,
        list: newList,
      };

    case "REMOVE_ALL_TODO":
      return {
        list: [],
      };

    default:
      return state;
  }
};
