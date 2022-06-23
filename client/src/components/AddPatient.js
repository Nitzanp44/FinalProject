import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import {patientListChange} from '../actions/index';


const AddPatient = () => {
    const therapist = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const handlechange = (e) => {
        const{name,value} = e.target;
        user[name] = value;
    };

    let postUrl = 'http://localhost:5000/addPatient';
  
    const onSubmit = () =>{
    
        axios.post(
            postUrl,
            user,
            {headers: {"Content-Type": "application/json"}}
        )
        .then(res => {
            console.log(res.data);
        });

        dispatch(patientListChange());
    }

    const updateUserDetails = (e) =>{
        user[e.target.name] = e.target.value;
    }


    let inputsArr = [
        {label: 'שם', name: 'Name', type: 'text', placeHolder: 'אנא הקלד שם', icon: 'fa-user'},
        {label: 'דואר אלקטרוני', name: 'Email', type: 'email', placeHolder: 'אנא הקלד שם', icon: 'fa-envelope'},
        {label: 'תעודת זהות', name: 'ID', type: 'text', placeHolder: 'אנא הקלד שם', icon: 'fa-id-card'},
        {label: 'טלפון נייד', name: 'Phone', type: 'text', placeHolder: 'אנא הקלד שם', icon: 'fa-phone'},
        {label: 'גיל', name: 'Age', type: 'number', placeHolder: 'אנא הקלד שם', icon: 'fa-calendar'}
    ]

    let user = {
        Name:"",
        Email:"",
        ID:"",
        Phone:"",
        Age:"",
        IDTherapist: therapist.IS
    };

    return(
        <div className='mt-5'>
            <form className="mx-1 mx-md-4">
                {inputsArr.map((input) => 
                    <div className='d-flex flex-column'>
                        <label className="form-label text-right">{input.label}</label>
                        <div className="align-items-center mb-4">
                            <div className="form-outline mb-0 mr-4">
                                <div className='d-flex'>
                                    <input type={input.type} name={input.name} className="form-control" onChange={updateUserDetails}/>
                                    <i className={'fas fa-lg me-3 fa-fw ' + input.icon}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <Button variant="primary" type="submit" onClick={onSubmit}> הוסף מטופל</Button>
            </form>
        </div>
    )  
}

export default AddPatient;
