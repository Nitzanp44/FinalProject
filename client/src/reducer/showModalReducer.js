const showModal = (state = false, action) =>{
    switch (action.type) {
        case "CHANGE_MODAL_SHOW":{
          return !state;
        }
        default:
            return state;
    }
}

export default showModal;