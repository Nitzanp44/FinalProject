const isTimerPlaying = (state = false, action) =>{
    switch (action.type) {
        case "IS_PLAYING_CHANGE":{
          return state = action.payload;
        }
        case "LOGOUT":{
          state = false;
          return state;
      }
        default:
            return state;
    }
}

export default isTimerPlaying;