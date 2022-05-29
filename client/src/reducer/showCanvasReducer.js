const showCanvas = (state = false, action) =>{
    switch (action.type) {
        case "CHANGE_CANVAS_SHOW":{
          return !state;
        }
        default:
            return state;
    }
}

export default showCanvas;