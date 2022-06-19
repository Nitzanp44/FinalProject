import cloneDeep from 'lodash/cloneDeep';


let userIntianal = {
  ID:"",
  Name:"",
};

const user = (state = userIntianal, action) =>{
    switch (action.type) {
        case "CHANGE_USER":{
         // let copyState = cloneDeep(state);
          let user = action.payload;
          // userIntianal.Email=user.Email;
          userIntianal.ID=user.ID;
          userIntianal.Name=user.Name;
          return userIntianal;
        }
        case "LOGOUT":{
          // userIntianal.Email="";
          userIntianal.ID="";
          userIntianal.Name="";
        }
        default:
            return state;

    }

};

export default user;