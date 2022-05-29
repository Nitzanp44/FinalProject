let patientIntianal = {
    Name:" נועם לוי"
  };
  
  const patient = (state = patientIntianal, action) =>{
      switch (action.type) {
          case "CHANGE_PATIENT":{
           // let copyState = cloneDeep(state);
            let patient = action.payload;
            // userIntianal.Name=user.Name;
            return patient;
          }
          default:
            return state;
        }
    };

    export default patient;