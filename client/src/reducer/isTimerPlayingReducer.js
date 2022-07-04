import cloneDeep from 'lodash/cloneDeep';

const isTimerPlaying = (state = false, action) =>{
    switch (action.type) {
        case "IS_PLAYING_CHANGE":{
          let play = cloneDeep(state);
          play = action.payload;
          return play;
        }
        default:
            return state;
    }
}

export default isTimerPlaying;