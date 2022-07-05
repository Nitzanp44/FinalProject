const showSpinner = (state = false, action) =>{
    switch (action.type) {
        case "STOP_SPINNER":{
          return false;
        }
        case "CONTINUE_SPINNER":{
          return true;
        }
        default:
          return state;
    }
}

export default showSpinner;