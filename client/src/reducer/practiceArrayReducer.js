import cloneDeep from 'lodash/cloneDeep';

let practiceArrIntianal = [];

const practiceArr = (state = practiceArrIntianal, action) =>{
    switch (action.type) {            
        case "INTIANAL_PRACTICE_LIST":{
            let arr = cloneDeep(state);
            arr = action.payload;
            return arr;
        }

        default:
            return state;
    }

};

export default practiceArr;