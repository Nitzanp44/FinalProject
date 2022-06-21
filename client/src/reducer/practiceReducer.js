import cloneDeep from 'lodash/cloneDeep';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

let practiceIntianal = {
    IDPatient:" ",
    IDTherapist:" ",
    NumOfCycles: 0,
    MuscleLoad: 0,
    CycleList: []
};

const practice = (state = practiceIntianal, action) =>{
    switch (action.type) {
        case "START_PRACTICE":{
            let practice = cloneDeep(state);
            practice.IDPatient = action.payload[0];
            practice.IDTherapist = action.payload[1];
            practice.CycleList = action.payload[2];

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
            
            let postUrl = 'http://localhost:5000/addPractice';
    
            axios.post(
                postUrl,
                practice,
                {headers: {"Content-Type": "application/json"}}
            )
            .then(res => {
                console.log(res.data);
            });
            return practice;

        }


        default:
            return state;
    }
};

export default practice;

