import cloneDeep from 'lodash/cloneDeep';

let patientIntianal = {
  ID:"",
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

        case "LOGOUT":{
          let patient = cloneDeep(state);
          patient = patientIntianal;
          return patient;
      }
        default:
          return state;
      }
  };

  export default patient;