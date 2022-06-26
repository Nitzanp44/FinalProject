const isPatientListChange = (state = false, action) =>{
    switch (action.type) {
        case "IS_PATIENT_LIST_CHANGE":{
          return !state;
        }
        default:
            return state;
    }
}

export default isPatientListChange;