import cloneDeep from 'lodash/cloneDeep';
import axios from 'axios';


let patientIntianal = {
    ID:"",
    // IDTherapist:{ type: String, required: true, index: true },
    Name:" לא נבחר מטופל"
  };
  
  const patient = (state = patientIntianal, action) =>{
      switch (action.type) {
          case "CHANGE_PATIENT":{
            let patient = cloneDeep(state);
            patient.ID = action.payload.ID;                
            patient.Name = action.payload.Name;                
            return patient;
          }
          default:
            return state;
        }
    };

    export default patient;