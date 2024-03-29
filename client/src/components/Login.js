import { useDispatch } from 'react-redux';
import {changeLogin,changeUser} from '../actions/index'
import { useState } from "react";
import { axiosPost } from '../actions/serverHelper';

const Login = () => {

    const dispatch = useDispatch();    
    const[user,setUser]=useState({
        Email:"",
        Password:""
    });
    
    const handlechange = (e) => {
        document.getElementById("erorrEmailOrPass").hidden=true;
        const{name,value}=e.target
        setUser({...user, [name]:value})
    };

    const onSubmit = async (e) => {

        e.preventDefault();
        try {
            let res = await axiosPost(user, 'login');
            if(res.status===200)
            {
                dispatch(changeUser(res.data));
                dispatch(changeLogin());
            }
            else if(res.response.data === 'no user or password') {
                document.getElementById("erorrEmailOrPass").hidden=false;
                document.getElementById("Email").placeholder="אימייל";
                document.getElementById("Password").placeholder="סיסמא";
            }
            else alert("Error");
        } catch (error) {
            alert("Error")
             }
        }
    
    

    return (
        <div>
            <form onSubmit = {onSubmit}>
                <h3 className='mb-5'>כניסה</h3>

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
        </div>
    );

}
export default Login;