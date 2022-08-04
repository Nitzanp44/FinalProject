let userIntianal = {
  ID:"",
  Name:"",
  Type:"",
};

const user = (state = userIntianal, action) =>{
    switch (action.type) {
        case "CHANGE_USER":{
          let user = action.payload;
          userIntianal.ID=user.ID;
          userIntianal.Name=user.Name;
          userIntianal.Type=user.Type;
          return userIntianal;
        }
        case "LOGOUT":{
          userIntianal.ID="";
          userIntianal.Name="";
          userIntianal.Type="";
          return userIntianal;
        }
        default:
          return state;
    }
};

export default user;