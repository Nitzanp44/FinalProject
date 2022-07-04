import cloneDeep from 'lodash/cloneDeep';

const isTimerPlaying = (state = false, action) =>{
    switch (action.type) {
        case "IS_PLAYING_CHANGE":{
          let play = cloneDeep(state);
          play = action.payload;
          return play;
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