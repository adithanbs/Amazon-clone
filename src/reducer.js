export const initialState = {
    basket: [],
     user: null
  };

  function reducer(state,action) {
    // console.log(action);  
    switch(action.type){
          case "ADD_TO_BASKET":
          return {
           ...state,

          basket:[...state.basket,action.item]
          }
          case "REMOVE_FROM_BASKET":
            return  
        default:
            return state;  

      }
  }
  

  export default reducer;