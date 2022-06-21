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
            let patientName = {Name: action.payload};
            const getAnswer = async () => {
              try{
                let res = await axios.post(
                  'http://localhost:5000/choosePatient', 
                  patientName,
                  {headers: {"Content-Type": "application/json"}}
                );
                if(res.data){
                  patient.ID=res.data.ID;
                  patient.Name=res.data.Name;                } 
            } catch(err){
                console.log('err --->', err);
            }};
            getAnswer();
            console.log(patient);
            return patient;
          }
          default:
            return state;
        }
    };

    export default patient;