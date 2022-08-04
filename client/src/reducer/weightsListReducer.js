import cloneDeep from 'lodash/cloneDeep';

let weightsArrIntianal = [];

const weightsList = (state = weightsArrIntianal, action) =>{
    switch (action.type) {            
        case "INTIANAL_WEIGHTS_LIST":{
            let arr = cloneDeep(state);
            arr = action.payload;
            return arr;
        }
        case "LOGOUT":{
            let arr = cloneDeep(state);
            arr = weightsArrIntianal;
            return arr;
        }
        default:
            return state;
    }
};

export default weightsList;