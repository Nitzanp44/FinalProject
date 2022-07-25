
import cloneDeep from 'lodash/cloneDeep';

let therapistArrIntianal = [];

const allTherapistListReducer = (state = therapistArrIntianal, action) =>{
    switch (action.type) {            
        case "INTIANAL_ALL_THERAPIST_LIST":{
            let arr = cloneDeep(state);
            arr = action.payload;
            return arr;
        }
        case "LOGOUT":{
            let arr = cloneDeep(state);
            arr = therapistArrIntianal;
            return arr;
        }
        default:
            return state;
    }
};

export default allTherapistListReducer;