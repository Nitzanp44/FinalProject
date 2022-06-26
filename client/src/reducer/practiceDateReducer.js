import cloneDeep from 'lodash/cloneDeep';

let IntianalDate = new Date();

const practiceDate = (state = IntianalDate, action) =>{
    switch (action.type) {
        case "SELECTED_DATE":{
            let date = cloneDeep(state);
            date = action.payload;
            return date;
        }
        
        default:
            return state;
    }
};

export default practiceDate;
    