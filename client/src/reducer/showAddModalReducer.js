
const showAddModalReducer = (state = false, action) =>{
    switch (action.type) {
        case "CHANGE_ADD_MODAL_SHOW":{
          return !state;
        }
        case "LOGOUT":{
          state = false;
          return state;
        }
        default:
            return state;
    }
}

export default showAddModalReducer;