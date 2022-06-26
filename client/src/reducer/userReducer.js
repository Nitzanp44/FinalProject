let userIntianal = {
  ID:"",
  Name:"",
};

const user = (state = userIntianal, action) =>{
    switch (action.type) {
        case "CHANGE_USER":{
          let user = action.payload;
          userIntianal.ID=user.ID;
          userIntianal.Name=user.Name;
          return userIntianal;
        }
        case "LOGOUT":{
          userIntianal.ID="";
          userIntianal.Name="";
          return userIntianal;
        }
        default:
          return state;
    }
};

export default user;