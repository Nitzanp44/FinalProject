import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import {changeLogin,changeUser} from '../actions/index'
import { useState } from "react";

const Login = () => {

    const dispatch = useDispatch();

    const[user,setUser]=useState({
        Email:"",
        Password:""
    });

    
    const handlechange=e=>{
        document.getElementById("erorrEmailOrPass").hidden=true;
        const{name,value}=e.target
        setUser({
            ...user,//spread operator 
    [name]:value
    })
    };

    function onSubmit(e){

        e.preventDefault();

        axios.post('http://localhost:5000/login' ,user,
        {headers: {
            "Content-Type": "application/json",
            }})
          .then(res => {
              
              let record=res.data;
              dispatch(changeUser(record));
              dispatch(changeLogin());
            }
            ).catch(error => {
                console.log(error.response.data);
                if(error.response.data=="no user or password")
                {
                    document.getElementById("erorrEmailOrPass").hidden=false;
                    document.getElementById("Email").placeholder="אימייל";
                    document.getElementById("Email").style.outlineColor='red';
                    document.getElementById("Password").placeholder="סיסמא";
                    document.getElementById("Password").style.outlineColor='red';
                }
    }); }
    

    return (
        <form onSubmit={onSubmit}>
            <h3>כניסה</h3>

            <div className="form-group">
                <input id="Email" name="Email" type="email" className="form-control" placeholder="אימייל" onChange={handlechange}/>
            </div>

            <div className="form-group">
                <input id="Password" name="Password" type="password" className="form-control" placeholder="סיסמא" onChange={handlechange}/>
            </div>

            <div className="form-group float-right">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">זכור אותי</label>
                </div>
            </div>

            <p id="erorrEmailOrPass" style={{ color: "red" }} hidden={true}>שם המשתמש או הסיסמא אינם תקינים</p>
                <button type="submit" className="btn btn-primary btn-block">אישור</button>
                <p className="forgot-password text-right">?שכחת <a href="#">סיסמא</a>
            </p>
        </form>
    );

}
export default Login;