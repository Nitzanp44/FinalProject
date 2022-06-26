import cloneDeep from 'lodash/cloneDeep';
import { axiosPost } from '../actions/serverHelper';

let practiceIntianal = {
    IDPatient:" ",
    IDTherapist:" ",
    NumOfCycles: 0,
    MuscleLoad: 0,
    CycleList: []
};

const practice = async (state = practiceIntianal, action) =>{
    
    switch (action.type) {
        case "START_PRACTICE":{
            let practice = cloneDeep(state);
            practice.IDPatient = action.payload[0];
            practice.IDTherapist = action.payload[1];
            practice.CycleList = action.payload[2];
            return practice;
        }
        case "CHANGE_MAXIMUM":{
            let practice = cloneDeep(state);
            practice.MuscleLoad = action.payload;
            return practice;
        }
        case "INTIANAL_CYCLE_LIST":{
            let practice = cloneDeep(state);
            practice.NumOfCycles = action.payload;
            return practice;
        }
        case "FINISH_PRACTICE":{           
            await axiosPost(practice, 'addPractice');
            return practice;
        }

        default:
            return state;
    }
}

export default practice;

