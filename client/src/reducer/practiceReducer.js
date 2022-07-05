import cloneDeep from 'lodash/cloneDeep';

let counter =-1;
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
        case "UPDATE_DATA":{
            let practice = cloneDeep(state);
           // if(counter>=0){ 
                let rigth = action.payload[1];
                let left = action.payload[2];   
                for (let element in rigth){
                    practice.CycleList[counter].dataRight.unshift(rigth[element]);
                }
                for (let element2 in left){        
                    practice.CycleList[counter].dataLeft.unshift(left[element2]);
                }
          //  }
            return practice;
          }
        case "CHANGE_COUNTER":{
            let practice = cloneDeep(state);
            counter=action.payload;
            return practice;
        }
        case "FINISH_PRACTICE":{ 
            let practice = cloneDeep(state); 
            counter = -1; 
            practice = practiceIntianal;     
            return practice;
        }
        case "LOGOUT":{
            let practice = cloneDeep(state);
            counter = 0;
            practice = practiceIntianal;
            return practice;
        }
        default:
            return state;
    }
}

export default practice;

