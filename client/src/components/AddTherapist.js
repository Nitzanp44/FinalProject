import { axiosPost } from '../actions/serverHelper';
import { useSelector, useDispatch } from 'react-redux';
import { setPatientList, changeCanvasShow, changeModalShow } from '../actions/index';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const AddTherapist = () => {
    const dispatch = useDispatch();
  
    const onSubmit =  async () =>{
        await axiosPost(user, 'addTherapist');
    }

    const updateUserDetails = (e) =>{
        user[e.target.name] = e.target.value;
    }
    
    let inputsArr = [
        {label: 'שם', name: 'Name', type: 'text', placeHolder: 'אנא הקלד שם', icon: 'fa-user'},
        {label: 'דואר אלקטרוני', name: 'Email', type: 'email', placeHolder: 'אנא הקלד שם', icon: 'fa-envelope'},
        {label: 'תעודת זהות', name: 'ID', type: 'text', placeHolder: 'אנא הקלד שם', icon: 'fa-id-card'},
        {label: 'טלפון נייד', name: 'Phone', type: 'text', placeHolder: 'אנא הקלד שם', icon: 'fa-phone'},
        {label: 'סיסמא', name: 'Password', type: 'text', placeHolder: 'אנא הקלד שם', icon: 'fa-key'},
    ]

    let user = {
        Name:"",
        Email:"",
        ID:"",
        Phone:"",
        Password: "",
        Type: "Therapist"
    };

    return(
        <div>
            <form className="mx-1 mx-md-4">
                {inputsArr.map((input) => 
                    <div className='d-flex flex-column'>
                        <div className="align-items-center mb-4">
                            <div className="form-outline mb-0 mr-4">
                                <div className='d-flex'>
                                    <div className='w-75'>
                                        <input type={input.type} name={input.name} placeholder={input.label} className="form-control" onChange={updateUserDetails}/>
                                    </div>
                                    <div className='w-25 d-flex align-items-center justify-content-end'>
                                        <i className={'fas fa-lg me-3 fa-fw ' + input.icon + '  float-right'} ></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div className='d-flex justify-content-center mt-4'>
                    <Link to="/PracticeSetup" type="button" className='btn btn-outline-secondary' onClick={onSubmit}>הוסף מטפל</Link >
                </div>
            </form>
        </div>
    )
}

export default AddTherapist;
