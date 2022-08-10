import { axiosPost } from '../actions/serverHelper';
import { useSelector, useDispatch } from 'react-redux';
import { setPatientList, changeCanvasShow, changeModalShow } from '../actions/index';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const AddPatient = () => {
    const therapist = useSelector((state) => state.user);
    const dispatch = useDispatch();
  
    const onSubmit =  async () =>{
        await axiosPost(user, 'addPatient');
        let res = await axiosPost(therapist, 'patientsList');
        dispatch(setPatientList(res.data));
        dispatch(changeCanvasShow());
        dispatch(changeModalShow());
    }

    const updateUserDetails = (e) =>{
        user[e.target.name] = e.target.value;
    }
    
    let inputsArr = [
        {label: 'שם', name: 'Name', type: 'text', placeHolder: 'אנא הקלד שם', icon: 'fa-user'},
        {label: 'דואר אלקטרוני', name: 'Email', type: 'email', placeHolder: 'אנא הקלד שם', icon: 'fa-envelope'},
        {label: 'תעודת זהות', name: 'ID', type: 'text', placeHolder: 'אנא הקלד שם', icon: 'fa-id-card'},
        {label: 'טלפון נייד', name: 'Phone', type: 'text', placeHolder: 'אנא הקלד שם', icon: 'fa-phone'},
        {label: 'גיל', name: 'Age', type: 'number', placeHolder: 'אנא הקלד שם', icon: 'fa-calendar'},
        {label: ((therapist.Type == "therapist")? (therapist.ID).toString():'תעודת זהות מטפל'), name: 'IDTherapist', type: 'text', placeHolder: 'אנא הקלד שם', icon: 'fa-user-md'}
    ]

    let user = {
        Name:"",
        Email:"",
        ID:"",
        Phone:"",
        Age:"",
        IDTherapist: therapist.ID
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
                    <Link to="/PracticeSetup" type="button" className='btn btn-outline-secondary' onClick={onSubmit}>הוסף מטופל</Link >
                </div>
            </form>
        </div>
    )
}

export default AddPatient;
