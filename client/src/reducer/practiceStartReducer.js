const practiceStart = (state = false, action) =>{
    switch (action.type) {
        case "PRACTICE_START":{
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

export default practiceStart;
