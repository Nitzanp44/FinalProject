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
            axios.post('http://localhost:5000/choosePatient' ,action.payload,
        {headers: {
            "Content-Type": "application/json",
            }})
          .then(res => {
              let record=res.data;
              patient.ID=record.ID;
            //   patient.Email=record.Email;
              patient.Name=record.Name;
            }
            ); 
            return patient;
          }
          default:
            return state;
        }
    };

    export default patient;