const isTimerPlaying = (state = false, action) =>{
    switch (action.type) {
        case "IS_PLAYING_CHANGE":{
          return state = action.payload;
        }
        default:
            return state;
    }
}

export default isTimerPlaying;