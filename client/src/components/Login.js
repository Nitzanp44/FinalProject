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
            ); }
    

    return (
        <form onSubmit={onSubmit}>
            <h3>כניסה</h3>

            <div className="form-group">
                <input name="Email" type="email" className="form-control" placeholder="אימייל" onChange={handlechange}/>
            </div>

            <div className="form-group">
                <input name="Password" type="password" className="form-control" placeholder="סיסמא" onChange={handlechange}/>
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">זכור אותי</label>
                </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block">אישור</button>
            <p className="forgot-password text-right">
                ?שכחת <a href="#">סיסמא</a>
            </p>
        </form>
    );

}
export default Login;