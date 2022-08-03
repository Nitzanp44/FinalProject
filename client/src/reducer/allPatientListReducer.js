import cloneDeep from 'lodash/cloneDeep';

let patientArrIntianal = [];

const allPatientList = (state = patientArrIntianal, action) =>{
    switch (action.type) {            
        case "INTIANAL_ALL_PATIENT_LIST":{
            let arr = cloneDeep(state);
            arr = action.payload;
            return arr;
        }
        case "LOGOUT":{
            let arr = cloneDeep(state);
            arr = patientArrIntianal;
            return arr;
        }
        default:
            return state;
    }
};

export default allPatientList;