import { useState } from "react";
import { axiosPost } from '../actions/serverHelper';
import { useNavigate } from "react-router-dom";

const SignUp = () =>  {
    
    const navigate = useNavigate()

    const[user,setUser]=useState({
        ID:"",
        Name: '',
        Email:"",
        Phone: "",
        Password:""
    });
    
    const handlechange = (e) => {
        const{name,value}=e.target
        setUser({...user, [name]:value})
    };

    const onSubmit = async (e) => {

        e.preventDefault();
        try {
            let res = await axiosPost(user, 'signUp');
            console.log(res)
            if(res.status===200)
            {
            alert("ההרשמה בוצעה בהצלחה");
             navigate('/login');
            }
            else alert("Error");
        } catch (error) {
            alert("Error")
             }
        }


    return (
        <form onSubmit={onSubmit}>
            <h3 className='mb-5'>הרשמה</h3>

            <div className="form-group">
                <input type="text" name="Name" className="form-control" placeholder="שם" onChange={handlechange} />
            </div>

            <div className="form-group">
                <input type="text" name="ID" className="form-control" placeholder="תעודת זהות" onChange={handlechange}/>
            </div>

            <div className="form-group">
                <input type="email" name="Email" className="form-control" placeholder="כתובת מייל" onChange={handlechange}/>
            </div>

            <div className="form-group">
                <input type="text" name="Phone" className="form-control" placeholder="טלפון" onChange={handlechange}/>
            </div>

            <div className="form-group">
                <input type="password" name="Password" className="form-control" placeholder="סיסמא" onChange={handlechange}/>
            </div>

            <button type="submit" className="btn btn-primary btn-block" >הרשמה</button>
            {/* <p id="signUpSuccessfully" hidden={true}>ההרשמה בוצעה בהצלחה</p> */}
            <p className="forgot-password text-right">
                משתמש רשום? <a href="/sign-in">היכנס</a>
            </p>
        </form>
    );
}

export default SignUp;